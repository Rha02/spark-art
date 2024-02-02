export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            Hello World!
            <nav>
                <ul className="text-center">
                    <li><a href="/login" className="text-blue-600 hover:text-blue-500">Login</a></li>
                    <li><a href="/register" className="text-blue-600 hover:text-blue-500">Register</a></li>
                    <li><a href="/dashboard" className="text-blue-600 hover:text-blue-500">Dashboard</a></li>
                    <li><a href="/profile" className="text-blue-600 hover:text-blue-500">Profile</a></li>
                    <li><a href="/prompts" className="text-blue-600 hover:text-blue-500">Prompts</a></li>
                </ul>
            </nav>
        </main>
    );
}
