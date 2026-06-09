import {SignJWT, jwtVerify} from "jose";
import {cookies} from 'next/headers';

const secret = new TextEncoder().encode(process.env.SESSION);

export async function createSession(user: {
    id: string;
    userName: string;
    email: string;
    role: string;
}){
    const token = await new SignJWT(user)
    .setProtectedHeader({alg: "HS256"})
    .setIssuedAt()
    .setExpirationTime("1d")
    .sign(secret!);

    const cookieStore = await cookies();

    cookieStore.set("session", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60*60*24*3,
    });
}

export async function getSession(){
    const cookieStore = await cookies();
    const token = cookieStore.get("session")?.value;

    if(!token){
        return null;
    }

    try{
        const {payload} = await jwtVerify(token, secret!);
        return payload;
    } catch{
        return null;
    }
}

export async function deleteSession(){
    const cookieStore = await cookies();
    cookieStore.delete("session");
}