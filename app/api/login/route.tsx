import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { getDB } from "@/lib/mongodb";

export async function POST(req: Request){
    const {email, password} = await req.json();

    if(!email || !password){
        return NextResponse.json(
            {error: "Email and Password are required"},
            {status: 400}
        );
    }

    const db = await getDB();
    const users = await db
    .collection("users")
    .findOne({ email })

    if(!users){
        return NextResponse.json(
            {error: "Invalid email or password"},
            {status: 401}
        );
    }

    const passwordMatch = await bcrypt.compare(password, users.password);

    if(!passwordMatch){
        return NextResponse.json(
            {error: "Invalid email or password"},
            {status: 401}
        );
    }

    return NextResponse.json(
        {
            message:"Login successful",
            user: 
            {
                id: users._id.toString(),
                userName: users.userName,
                email: users.email
            },
        }
    );
}