import { CreateUserInput } from "@repo/schemas";
import { BACKEND_URL } from "../constants";

export async function signup(data:CreateUserInput) {
    return fetch(`${BACKEND_URL}/auth/signup`,{
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(data)
    })
}