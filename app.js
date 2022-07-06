require('dotenv').config();

const connectionString="mongodb+srv://smartmedic:smartmedic2022@smartmedic.r5ddgad.mongodb.net/smartmedical?retryWrites=true&w=majority"


const patient = require("./routers/patientRouters");
const doctor = require("./routers/doctorRouters");
const nurse = require("./routers/nurseRouters");
const dPatientSchedule = require("./routers/docPatScheduleRouters");
const nPatientSchedule = require("./routers/nurPatScheduleRouters");
const nurseSchedule = require("./routers/nurseScheduleRouters");
const doctorSchedule = require("./routers/doctorScheduleRouters");
const medicalRecord = require("./routers/medicalRecordRouters");
const hospital = require("./routers/hospitalRouters");
const hospitalDoctor = require("./routers/hospitalDoctorRouters")
const hospitalNurse = require("./routers/hospitalNurseRouters")
const express = require("express");
const app = express();
const myMongoose=require('mongoose');
const bodyParser = require('body-parser');
const cors =require('cors');
const { storage } = require('./middleware/upload');
const multer = require('multer');
const upload = multer({ storage });


var port = process.env.PORT || 8080;
var fs = require('fs');


app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.use("/",(req,res)=>{
  res.send("<h1> Hello To Smart Medical Record")
});

app.use("/hospitaldoctor",hospitalDoctor);
app.use("/hospitalnurse",hospitalNurse);
app.use("/hospital",hospital);
app.use("/patient",patient);
app.use("/doctor",doctor);
app.use("/nurse",nurse);
app.use("/dpatient",dPatientSchedule);
app.use("/npatient",nPatientSchedule);
app.use("/nurseschedule",nurseSchedule);
app.use("/doctorschedule",doctorSchedule);
app.use("/medicalrecord",medicalRecord);


myMongoose.connect(connectionString,()=>{
    console.log('connect with data successfully')
    app.listen(port,()=>{
        console.log(`Runinng on port ${port}`);
    })
});

