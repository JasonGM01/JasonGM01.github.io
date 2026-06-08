import { NextResponse } from "next/server";
import { getDB } from "@/lib/mongodb";

//get all skills
export async function GET(){
    const db = await getDB();

    const schools = await db
    .collection("skills")
    .find({})
    .toArray();

    return NextResponse.json(schools);
}

//create new skill
export async function POST(req: Request){
     const body = await req.json();

    const db = await getDB();

    const result = await db.collection("skills").insertOne({
        skill: body.skill,
        level: body.level,
        type: body.type,
        createdAt: new Date(),
    });

    return NextResponse.json({id: result.insertedId});
}