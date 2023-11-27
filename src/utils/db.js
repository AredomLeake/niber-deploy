import mongoose from "mongoose";
//6.11.1

const connect = async () => {
  try {
    // await mongoose.connect(process.env.MONGO);
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("database connected");
  } catch (error) {
    console.log("connection failed", error.message);
    throw new Error("Connection failed!");
  }
};

export default connect;
