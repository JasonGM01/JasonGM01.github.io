import { NextResponse } from "next/server";
import { getDB } from "../../../lib/mongodb";

//get all schools
export async function GET(){
    const db = await getDB();

    const schools = await db
    .collection("education")
    .find({})
    .toArray();

    return NextResponse.json(schools);
}

//create new school
export async function POST(req: Request){
     const body = await req.json();

    const db = await getDB();

    const result = await db.collection("education").insertOne({
        school: body.title,
        accro: body.accro,
        courses: body.type,
        date: body.date,
        degree: body.degree,
        createdAt: new Date(),
    });

    return NextResponse.json({id: result.insertedId});
}