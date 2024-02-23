import { UserRepo } from "@/repo";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    // get form and file data
    const formData = await req.formData();

    // get file from form data
    const file = formData.get("profile-picture");
    if (!file) {
        return NextResponse.redirect("/dashboard");
    }

    const authToken = req.cookies.get("authtoken")?.value;
    if (!authToken) {
        return NextResponse.redirect("/login");
    }

    // get user id from auth token
    const authuser = await UserRepo.getAuthUser(authToken);
    // check if user is authenticated
    if (!authuser) {
        return NextResponse.redirect("/login");
    }

    // update user profile picture
    await UserRepo.updateProfileIcon(authuser.id, file as File);

    const url = new URL(req.nextUrl);
    url.pathname = `/users/${authuser.id}`;

    return NextResponse.redirect(url);
}
