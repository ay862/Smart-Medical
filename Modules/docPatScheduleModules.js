const myMongoose = require("mongoose");

const docPatScheduleModule = myMongoose.Schema(
    {
      "day" :{
        type: Date,
        required : [true, "it must be Date"],
        default:new Date()
      },
      "examination":{
        type:Boolean,
        required : true,
        default:false
      },
      "note":{
        type:String
      },
      "doctorID":{
        type: String,
        required : true,
        match: [/^([D])[0-9]{14}$/,'It must be like ( D  + National Id)']
      },
      "patientID":{
        type: String,
        required : true,
        match: [/^([P])[0-9]{14}$/,'It must be like ( P + National Id)']
      }
    }
)

module.exports=myMongoose.model("doctorpatientschedules",docPatScheduleModule);