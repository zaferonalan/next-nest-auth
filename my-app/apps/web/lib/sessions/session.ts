"use server"

import { Session, sessionSchema } from "@repo/schemas";
import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const secretKey = process.env.SESSION_SECRET_KEY
const encodedKey = new TextEncoder().encode(secretKey)

export async function createSession(payload: Session) {
    const expireAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000 )

    const session = await new SignJWT(payload)
        .setProtectedHeader({alg: "HS256"})
        .setIssuedAt()
        .setExpirationTime('7d')
        .sign(encodedKey);
    
    const cookie = await cookies()

    cookie.set('session', session, {
        httpOnly: true,
        secure: true,
        expires: expireAt,
        sameSite: "lax",
        path: "/"
    })
}


export async function getSession() {
    const cookie = (await cookies()).get('session')?.value

    if (!cookie) {
        return null
    }

    try {
        const { payload } = await jwtVerify(cookie, encodedKey, {
            algorithms: ["HS256"]
        })

        return sessionSchema.parse(payload)

    } catch (err) {
        console.error("Failed to Verify the session");
        redirect("/auth/signin")
    }
}