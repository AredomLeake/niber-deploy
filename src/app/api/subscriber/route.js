// import { NextResponse } from "next/server";
// import connect from "@/utils/db";
// import Subscriber from "@/models/Subscriber";

// export const GET = async (request) => {
//   const url = new URL(request.url);

//   const username = url.searchParams.get("username");

//   try {
//     await connect();

//     const subscribers = await Subscriber.find(username && { username });

//     return new NextResponse(JSON.stringify(subscribers), { status: 200 });
//   } catch (err) {
//     return new NextResponse("Database Error", { status: 500 });
//   }
// };

// export const Subscriber = async (request) => {
//   const body = await request.json();

//   const newSubscriber = new Subscriber(body);

//   try {
//     await connect();

//     await newSubscriber.save();

//     return new NextResponse("Post has been created", { status: 201 });
//   } catch (err) {
//     return new NextResponse("Database Error", { status: 500 });
//   }
// };
