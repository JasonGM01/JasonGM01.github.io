import { NextResponse } from "next/server";
import { getDB } from "../../../lib/mongodb";

//get all projects
export async function GET(){
    const db = await getDB();

    const projects = await db
    .collection("projects")
    .find({})
    .toArray();
    return NextResponse.json(projects);
}

//create new project
export async function POST(req: Request){
    const body = await req.json();

    const db = await getDB();

    const result = await db.collection("projects").insertOne({
        title: body.title,
        type: body.type,
        description: body.description,
        date: body.date,
        link: body.link,
        createdAt: new Date(),
    });

    return NextResponse.json({id: result.insertedId});
}