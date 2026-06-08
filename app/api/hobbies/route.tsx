import { NextResponse } from "next/server";
import { getDB } from "@/lib/mongodb";

//get all contacts
export async function GET(){
    const db = await getDB();

    const hobbies = await db
    .collection("hobbies")
    .find({})
    .toArray();

    return NextResponse.json(hobbies);
}

//create new contact
export async function POST(req: Request){
     const body = await req.json();

    const db = await getDB();

    const result = await db.collection("hobbies").insertOne({
        hobby: body.hobby,
        type: body.type,
        createdAt: new Date(),
    });

    return NextResponse.json({id: result.insertedId});
}