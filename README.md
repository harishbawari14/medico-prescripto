# Medico-Prescripto 🏥💊

A full-stack medical prescription management system that simplifies the process of generating, storing, and retrieving prescriptions.

## 🌟 Features
- 🌟 **Prescription Management** – Create, update, and store prescriptions securely.
- 🏥 **Admin Dashboard** – Manage doctors, patients, and prescriptions efficiently.
- 📂 **Database Integration** – Securely store patient records.
- 🔒 **Authentication & Authorization** – User roles for **Doctors, Patients, and Admins**.
- 🛋️ **REST API** – Backend API for seamless frontend interaction.
- 📱 **Responsive Design** – Works on mobile & desktop.

## 🏗 Tech Stack
### **Frontend**
- 🖥️ **React.js** – Modern UI development
- 🌈 **Tailwind CSS** – Responsive styling
- 🔄 **Redux (Optional)** – State management

### **Backend**
- ✨ **Node.js** – Server-side logic
- ⚡ **Express.js** – Fast API development
- 📄 **MongoDB** – NoSQL database
- 🔒 **JWT Authentication** – Secure login & access control

## 🚀 Getting Started

### **1. Clone the Repository**
```sh
git clone https://github.com/harishbawari14/medico-prescripto.git
cd medico-prescripto
```

### **2. Install Dependencies**
#### Install frontend dependencies:
```sh
cd frontend
npm install
```

#### Install backend dependencies:
```sh
cd ../backend
npm install
```

### **3. Configure Environment Variables**
Create a `.env` file inside the `backend/` directory with the following:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### **4. Run the Application**
#### Start Backend:
```sh
cd backend
npm start
```

#### Start Frontend:
```sh
cd ../frontend
npm start
```

### **5. Open in Browser**
Go to:  
👉 **http://localhost:3000/** (Frontend)  
👉 **http://localhost:5000/** (Backend API)

## 🔥 API Endpoints (Backend)
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST | `/api/auth/login` | User login |
| POST | `/api/auth/register` | Register new user |
| GET | `/api/prescriptions` | Get all prescriptions |
| POST | `/api/prescriptions` | Create a new prescription |


## 🛠️ Future Improvements
- 🏥 **Doctor Appointment System**
- 📊 **Medical History Dashboard**
- 📢 **Email & SMS Notifications**
