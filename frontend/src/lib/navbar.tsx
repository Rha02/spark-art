export default function Navbar() {
    /**
     * Navlink is a helper component for a single link in the navbar.
     */
    function Navlink({ link, name }: { link: string; name: string }) {
        return (
            <a href={link} className="hover:bg-indigo-500 hover:text-white px-2 py-1 rounded-lg transition ease-in-out duration-250">
                {name}
            </a>
        );
    };
    
    return (
        <nav className="bg-indigo-600 text-indigo-50 flex justify-between px-16 py-4 items-center">
            <h1 className="text-2xl font-semibold">
                <a href="/dashboard">SparkArt</a>
            </h1>
            <ul className="flex space-x-2">
                <Navlink link="/dashboard" name="Dashboard" />
                <Navlink link="/prompts" name="Prompts" />
                <Navlink link="/users/1" name="Profile" />
                <Navlink link="/login" name="Login" />
                <Navlink link="/register" name="Register" />
            </ul>
        </nav>
    );
}