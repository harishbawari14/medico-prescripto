// import jwt from 'jsonwebtoken'

// // doctor authentication middleware
// const authDoctor = async (req, res, next) => {
//     const { dtoken } = req.headers
//     if (!dtoken) {
//         return res.json({ success: false, message: 'Not Authorized Login Again' })
//     }
//     try {
//         const token_decode = jwt.verify(dtoken, process.env.JWT_SECRET)
//         req.body.docId = token_decode.id
//         next()
//     } catch (error) {
//         console.log(error)
//         res.json({ success: false, message: error.message })
//     }
// }

// export default authDoctor;

import jwt from 'jsonwebtoken';

// Doctor authentication middleware
const authDoctor = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    // Check if the Authorization header is provided and starts with "Bearer"
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, message: 'Authorization token required. Please log in.' });
    }

    const token = authHeader.split(' ')[1]; // Extract the token from "Bearer <token>"

    try {
        // Verify the token using the secret key
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        // Attach the doctor ID from the token to the request body
        req.body.docId = decodedToken.id;
        next();
    } catch (error) {
        console.error('Token verification error:', error);
        res.status(403).json({ success: false, message: 'Invalid or expired token. Please log in again.' });
    }
};

export default authDoctor;
