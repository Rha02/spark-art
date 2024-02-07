import { UserRepo } from "@/repo";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    // get form and file data
    const formData = await req.formData();

    console.log(formData);

    const url = new URL(req.nextUrl);

    // modify url to redirect to the dashboard
    url.pathname = "/dashboard";

    const res = NextResponse.redirect(url);

    const authToken = await UserRepo.register(formData);

    // set authtoken cookie
    res.cookies.set("authtoken", authToken, {
        httpOnly: true,
        secure: true,
        path: "/",
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
    });

    return res;
}
