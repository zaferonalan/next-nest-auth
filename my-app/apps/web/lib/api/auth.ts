import { CreateUserInput, loginInput } from "@repo/schemas";
import { BACKEND_URL } from "../constants";

export async function signup(data:CreateUserInput) {
    return fetch(`${BACKEND_URL}/auth/signup`,{
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(data)
    })
}


export async function signIn(data: loginInput) {
    return fetch(`${BACKEND_URL}/auth/signin`, {
        method: "POST",
        headers: {
            "Content-Type": "applicaition/json"
        },
        body: JSON.stringify(data)
    })
}