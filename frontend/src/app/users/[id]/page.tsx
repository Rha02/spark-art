import { ArtRepo, PromptRepo, UserRepo } from "@/repo";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Users({ params }: { params: { id: string } }) {
    const userID = parseInt(params.id);
    const user = await UserRepo.getUserByID(userID);
    if (!user) {
        redirect("/dashboard");
    }

    const [artworks, prompts] = await Promise.all([
        ArtRepo.getArtworksByUser(userID),
        PromptRepo.getPromptsByUser(userID)
    ]);

    return (
        <main className="mx-36">
            <h1 className="text-3xl pt-8 text-indigo-500 font-bold">{user.username}</h1>
            <div className="mt-2 flex items-center space-x-2">
                <Image src={user.profileImageUrl} width={150} height={150} className="rounded-full bg-green-100" alt={""} />
                <span className="text-gray-500">{user.username}</span>
            </div>
            <h2 className="text-xl text-indigo-500 font-semibold mt-4">Artworks:</h2>
            <div>
                {artworks.map((artwork, idx) => <div key={idx}>{artwork.title}</div>)}
            </div>
            <h2 className="text-xl text-indigo-500 font-semibold mt-4">Prompts:</h2>
            <div>
                {prompts.map((prompt, idx) => <div key={idx}>{prompt.text}</div>)}
            </div>
        </main>
    );
}