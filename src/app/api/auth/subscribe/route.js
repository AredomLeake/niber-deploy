import Subscriber from "@/models/Subscriber";
import connect from "@/utils/db";
// import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { name, email, message } = await request.json();

  await connect();

  //   const hashedPassword = await bcrypt.hash(password, 5);

  const newSubscriber = new Subscriber({
    name,
    email,
    message,
    // password: hashedPassword,
  });

  try {
    await newSubscriber.save();
    return new NextResponse("subscription completed", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};
