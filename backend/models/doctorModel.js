// import mongoose from "mongoose";

// const doctorSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     image: { type: String, required: true },
//     speciality: { type: String, required: true },
//     degree: { type: String, required: true },
//     experience: { type: String, required: true },
//     about: { type: String, required: true },
//     available: { type: Boolean, default: true },
//     fees: { type: Number, required: true },
//     slots_booked: { type: Object, default: {} },
//     address: { type: Object, required: true },
//     date: { type: Number, required: true },
// }, { minimize: false })

// const doctorModel = mongoose.models.doctor || mongoose.model("doctor", doctorSchema);
// export default doctorModel;

import mongoose from "mongoose";
import bcrypt from "bcrypt";

// Address sub-schema for structured storage
const addressSchema = new mongoose.Schema({
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true }
});

const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String, required: true },
    speciality: { type: String, required: true },
    degree: { type: String, required: true },
    experience: { type: String, required: true },
    about: { type: String, required: true },
    available: { type: Boolean, default: true },
    fees: { type: Number, required: true },
    slots_booked: {
        type: [{ date: String, time: String }], // Array to store booked slots
        default: []
    },
    address: { type: addressSchema, required: true },
}, { timestamps: true, minimize: false });

// Hash password before saving to the database
doctorSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

const doctorModel = mongoose.models.Doctor || mongoose.model("Doctor", doctorSchema);
export default doctorModel;
