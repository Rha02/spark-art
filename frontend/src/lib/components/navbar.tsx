import { cookies } from "next/headers";
import React, { AnchorHTMLAttributes } from "react";

export default function Navbar() {
    const navlinkStyle = "hover:bg-indigo-500 hover:text-white px-2 py-1 rounded-lg transition ease-in-out duration-250";
    /**
     * NavlinkProps is a helper type for the Navlink component.
     */
    type NavlinkProps = {
        link: string;
        name: string;
    }
    /**
     * Navlink is a helper component for a single link in the navbar.
     */
    function Navlink(props: NavlinkProps) {
        return (
            <a href={props.link} className={navlinkStyle}>
                {props.name}
            </a>
        );
    };

    // Get cookie store
    const cookieStore = cookies();

    // Get authtoken from cookies
    const authtoken = cookieStore.get("authtoken")?.value;

    // Check if user is authenticated
    const isAuthenticated = authtoken !== undefined;

    return (
        <nav className="bg-indigo-600 text-indigo-50 flex justify-between px-16 py-4 items-center">
            <h1 className="text-2xl font-semibold">
                <a href="/dashboard">SparkArt</a>
            </h1>
            <ul className="flex space-x-2">
                <Navlink link="/dashboard" name="Dashboard" />
                <Navlink link="/prompts" name="Prompts" />
                {isAuthenticated && <Navlink link="/users/1" name="Profile" />}
                {isAuthenticated && <Navlink link="/api/logout" name="Logout" />}
                {!isAuthenticated && <Navlink link="/login" name="Login" />}
                {!isAuthenticated && <Navlink link="/register" name="Register" />}
            </ul>
        </nav>
    );
}