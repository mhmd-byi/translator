import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";
export default async (req: Request, res: Response) => {
  await dbConnect();
};
export async function GET(req: Request, res: Response) {
  return NextResponse.json("Hello world");
}

export async function POST(req: Request, res: Response) {
    console.log('this is req', req.body)
  try {
    const user = await User.create(req.body);
    return NextResponse.json({ success: true, data: user });
  } catch (error) {
    // console.log('this is error', error)
    return NextResponse.json({ status: 400, success: false });
  }
}
