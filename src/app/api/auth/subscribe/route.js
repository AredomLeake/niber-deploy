import User from "@/models/User";
import connect from "@/utils/db";

import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { name, email, message } = await request.json();

  await connect();

  const newUser = new User({
    name,
    email,
    message,
  });

  try {
    await newUser.save();
    return new NextResponse("message sent successfully", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};
