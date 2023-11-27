import mongoose from "mongoose";

const { Schema } = mongoose;

const subscriberSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//If the User collection does not exist create a new one.
export default mongoose.models.Subscriber ||
  mongoose.model("Subscriber", subscriberSchema);
