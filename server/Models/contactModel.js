import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  from: {
    
    username:{type:String},
    secure_url:{type:String},

  },
  to: {
    
    username:{type:String},
    secure_url:{type:String},

  },
  
});

export default  mongoose.model("Contacts", contactSchema);