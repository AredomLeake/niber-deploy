import Expertise from "@/models/expertise";
import connect from "@/utils/db";

import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { name, email, expertise } = await request.json();

  await connect();

 

  const newExpertise = new Expertise({
    name,
    email,
    expertise,
  });

  try {
    await newExpertise.save();
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};
