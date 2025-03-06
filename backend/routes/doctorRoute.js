// import express from 'express';
// import { loginDoctor, appointmentsDoctor, appointmentCancel, doctorList, changeAvailablity, appointmentComplete, doctorDashboard, doctorProfile, updateDoctorProfile } from '../controllers/doctorController.js';
// import authDoctor from '../middleware/authDoctor.js';
// const doctorRouter = express.Router();

// doctorRouter.post("/login", loginDoctor)
// doctorRouter.post("/cancel-appointment", authDoctor, appointmentCancel)
// doctorRouter.get("/appointments", authDoctor, appointmentsDoctor)
// doctorRouter.get("/list", doctorList)
// doctorRouter.post("/change-availability", authDoctor, changeAvailablity)
// doctorRouter.post("/complete-appointment", authDoctor, appointmentComplete)
// doctorRouter.get("/dashboard", authDoctor, doctorDashboard)
// doctorRouter.get("/profile", authDoctor, doctorProfile)
// doctorRouter.post("/update-profile", authDoctor, updateDoctorProfile)

// export default doctorRouter;

import express from 'express';
import {
    loginDoctor,
    appointmentsDoctor,
    appointmentCancel,
    doctorList,
    changeAvailablity,
    appointmentComplete,
    doctorDashboard,
    doctorProfile,
    updateDoctorProfile
} from '../controllers/doctorController.js';
import authDoctor from '../middleware/authDoctor.js';

const doctorRouter = express.Router();

// Auth-related routes
doctorRouter.post("/login", loginDoctor);

// Appointment-related routes
doctorRouter.get("/appointments", authDoctor, appointmentsDoctor);
doctorRouter.put("/appointments/cancel", authDoctor, appointmentCancel);
doctorRouter.put("/appointments/complete", authDoctor, appointmentComplete);

// Doctor profile routes
doctorRouter.get("/profile", authDoctor, doctorProfile);
doctorRouter.put("/profile/update", authDoctor, updateDoctorProfile);

// Doctor list and dashboard routes
doctorRouter.get("/list", doctorList);
doctorRouter.get("/dashboard", authDoctor, doctorDashboard);

// Availability route
doctorRouter.put("/availability/change", authDoctor, changeAvailablity);

export default doctorRouter;
