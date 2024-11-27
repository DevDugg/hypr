import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function POST(request: Request) {
  const body = await request.json();

  const { name, email, subject, message, category } = body;

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
  }

  try {
    const newSubmission = {
      _type: "form-submission",
      name,
      email,
      subject,
      message,
      category,
    };

    await client.create(newSubmission);

    return NextResponse.json({ message: "Form submission successful" }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}
