import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { getDB } from "@/lib/mongodb";

//create new user
export async function POST(req: Request){
    const {userName, email, password} = await req.json();

    if(!userName || !email || !password){
        return NextResponse.json(
            {error: "Username, email, and password  are required"},
            {status: 400}
        );
    }

    const db = await getDB();

    const existingUser = await db
    .collection("users")
    .findOne({email});

    if(existingUser){
        return NextResponse.json(
            {error: "User already exists"},
            {status: 409}
        );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await db.collection("users").insertOne({
        userName,
        email,
        password: hashedPassword,
        createdAt: new Date(),
    });

    return NextResponse.json(
        {
            message: "User created",
            id: result.insertedId
        },
        {status: 201}
    );
}

//get one user
