const { default: mongoose } = require("mongoose");

const dbConnect = () => {
  try {
    const conn = mongoose.connect("mongodb+srv://admin:admin@cluster0.11eys.mongodb.net/ecomDB?retryWrites=true&w=majority&appName=Cluster0");
    
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("DAtabase error");
  }
};
module.exports = dbConnect;
