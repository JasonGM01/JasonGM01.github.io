import { NextResponse } from "next/server";
import { getDB } from "@/lib/mongodb";

//get all contacts
export async function GET(){
    const db = await getDB();

    const contacts = await db
    .collection("contacts")
    .find({})
    .toArray();

    return NextResponse.json(contacts);
}

//create new contact
export async function POST(req: Request){
     const body = await req.json();

    const db = await getDB();

    const result = await db.collection("contacts").insertOne({
        contact: body.contact,
        type: body.type,
        createdAt: new Date(),
    });

    return NextResponse.json({id: result.insertedId});
}