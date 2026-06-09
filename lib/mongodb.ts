import {MongoClient} from 'mongodb';
const uri = process.env.MONGOURI;

if(!uri){
    throw new Error("Error");
}

const client = new MongoClient(uri);

export async function getDB(){
    await client.connect();
    return client.db("personal");
}