import { NextRequest, NextResponse } from "next/server";

type RequestBody = {
    username: string;
    password: string;
}

export async function POST(req: NextRequest) {
    const { username, password } = await req.json() as RequestBody;

    if (!username || !password) {
        return NextResponse.json({
            errors: {
                username: "Username is required",
                password: "Password is required"
            }
        }, {
            status: 400
        })
    }

    // TODO: Make a request to the backend to register the user
    const token = "fake-token"

    const response = NextResponse.json({})

    response.cookies.set("authtoken", token, {
        httpOnly: true,
        path: "/",
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7)
    })

    return response;
}
