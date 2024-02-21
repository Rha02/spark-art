import { PromptCard, ArtCard } from "@/lib/components/client";
import { ArtRepo, PromptRepo, UserRepo } from "@/repo";
import { cookies } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Users({ params }: { params: { id: string } }) {
    const userID = parseInt(params.id);
    const user = await UserRepo.getUserByID(userID);
    if (!user) {
        redirect("/dashboard");
    }

    // Get cookie store
    const cookieStore = cookies();

    // Get authtoken from cookies
    const authtoken = cookieStore.get("authtoken")?.value;

    // Check if user is authenticated
    const isAuthenticated = authtoken !== undefined;

    const [artworks, prompts, authUser] = await Promise.all([
        ArtRepo.getArtworksByUser(userID),
        PromptRepo.getPromptsByUser(userID),
        isAuthenticated ? UserRepo.getAuthUser(authtoken) : null
    ]);

    return (
        <main className="mx-36 mt-8">
            <div className="mt-2 flex items-center space-x-2">
                <Image src={user.profileImageUrl} width={150} height={150} className="rounded-full bg-green-100" alt={""} />
                <h1 className="text-indigo-500 text-3xl font-bold">{user.username}</h1>
            </div>
            <form className="ml-5 mt-1 space-y-1" action="/api/profile-icon" method="POST" encType="multipart/form-data">
                <div>
                    <input type="file" name="profile-picture" id="profile-picture" className="border-b-2 border-indigo-500 w-64 text-center bg-gray-100 rounded" />
                </div>
                <button type="submit" className="py-1 px-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition ease-in-out duration-150">
                    Update Icon
                </button>
            </form>
            <h2 className="text-2xl text-indigo-500 font-semibold mt-4 border-t-2 border-indigo-200">Artworks</h2>
            <div className="flex justify-center">
                <div className="grid grid-cols-5">
                    {artworks.map(artwork => <ArtCard key={artwork.id} artwork={artwork} />)}
                </div>
            </div>
            <h2 className="text-2xl text-indigo-500 font-semibold mt-4">Prompts</h2>
            <div className="mt-2 mb-24">
                {prompts.map(prompt =>
                    <PromptCard key={prompt.id} prompt={prompt} />
                )}
            </div>
        </main>
    );
}