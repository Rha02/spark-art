export default function Register() {
    return (
        <main>
            <h1 className="text-center text-4xl pt-8 font-semibold text-indigo-500">Register</h1>
            <div className="flex justify-center mt-4">
                <form action="/api/register" method="POST" className="flex flex-col items-center justify-center py-8 w-1/2 xl:w-1/4 border-4 space-y-4" encType="multipart/form-data">
                    <div className="flex flex-col items-center justify-center space-y-1">
                        <label htmlFor="username" className="text-indigo-500 text-lg">Username</label>
                        <input type="text" name="username" id="username" className="border-b-2 border-indigo-500 w-64 text-center bg-gray-100 rounded" />
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-1">
                        <label htmlFor="email" className="text-indigo-500 text-lg">Email</label>
                        <input type="email" name="email" id="email" className="border-b-2 border-indigo-500 w-64 text-center bg-gray-100 rounded" />
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-1">
                        <label htmlFor="profile-picture" className="text-indigo-500 text-lg">Profile Picture</label>
                        <input type="file" name="profile-picture" id="profile-picture" className="border-b-2 border-indigo-500 w-64 text-center bg-gray-100 rounded" />
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-1">
                        <label htmlFor="password" className="text-indigo-500 text-lg">Password</label>
                        <input type="password" name="password" id="password" className="border-b-2 border-indigo-500 w-64 text-center bg-gray-100 rounded" />
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-1">
                        <label htmlFor="password-confirm" className="text-indigo-500 text-lg">Confirm Password</label>
                        <input type="password" name="password-confirm" id="password-confirm" className="border-b-2 border-indigo-500 w-64 text-center bg-gray-100 rounded" />
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-1">
                        <button type="submit" className="bg-indigo-500 text-white p-2 rounded-md w-64 hover:bg-indigo-600 transition ease-in-out duration-150">Register</button>
                    </div>
                    <div>
                        <p className="text-indigo-500">Already have an account?
                            <a href="/login" className="ml-1 text-indigo-500 underline">Login</a>
                        </p>
                    </div>
                </form>
            </div>
        </main>
    );
}