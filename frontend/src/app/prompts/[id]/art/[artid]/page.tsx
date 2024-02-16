"use client";
import { ArtComment, Artwork } from "@/lib/types";
import { ArtRepo } from "@/repo";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Prompt({ params }: { params: { id: string, artid: string}}) {
    const artID = parseInt(params.id);
    if (isNaN(artID)) {
        window.location.href = "/prompts";
    }

    const [artwork, setArtwork] = useState<Artwork>(ArtRepo.newArtwork());
    const [comments, setComments] = useState<ArtComment[]>([]);

    useEffect(() => {
        ArtRepo.getArtworkByID(artID).then((a) => {
            if (a) {
                setArtwork(a);
            }
        }).catch((err) => console.error(err));
    }, [artID]);

    const handleLike = () => {
        console.log("TODO: handle like button");
    };

    return (
        <main className="mt-8">
            <h1 className="text-3xl font-bold text-indigo-500 text-center">{artwork.title}</h1>
            <div className="flex justify-center mt-1 items-center space-x-2">
                <a href={"/users/" + artwork.authorId} className="flex items-center space-x-2">
                    <Image src={artwork.authorIconUrl} width={40} height={40} className="rounded-full bg-green-200" alt={""} />
                    <span className="text-blue-600 hover:text-blue-700">{artwork.authorName}</span>
                </a>
                <span className="text-gray-500 text-sm">
                    {artwork.createdAt.toDateString()}
                </span>
            </div>
            <h3 className="text-center text-gray-500 text-sm">
                <span className="mr-2">
                    Drawn for:
                </span>
                <a href={"/prompts/" + artwork.promptId} className="text-blue-600 hover:text-blue-700">
                    {artwork.promptText}
                </a>
            </h3>
            <div className="flex justify-center mt-2">
                <Image src={artwork.imageUrl} width={500} height={500} className="bg-green-200" alt={""} />
            </div>
            <div className="flex justify-center space-x-4 items-center mt-2">
                <button onClick={handleLike} className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white p-1 rounded-md">{artwork.likes} Likes</button>
                <span className="py-1">{artwork.comments} Comments</span>
            </div>
            <h2 className="text-2xl font-bold text-indigo-500 mt-4 text-center">Comments</h2>
            <div className="flex justify-center mt-2">
                <ul className="w-2/3 space-y-4">
                    <li className="bg-gray-100 py-2 px-3 rounded shadow">
                        <div className="flex items-center space-x-2">
                            <Image src={artwork.authorIconUrl} width={40} height={40} className="rounded-full bg-green-200" alt={""} />
                            <span className="text-blue-600 hover:text-blue-700">{artwork.authorName}</span>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium officiis obcaecati iusto ducimus fugiat numquam natus, corporis molestiae accusantium tempore distinctio, mollitia exercitationem unde blanditiis aliquid voluptatum architecto impedit omnis?</p>
                    </li>
                    <li className="bg-gray-100 py-2 px-3 rounded shadow">
                        <div className="flex items-center space-x-2">
                            <Image src={artwork.authorIconUrl} width={40} height={40} className="rounded-full bg-green-200" alt={""} />
                            <span className="text-blue-600 hover:text-blue-700">{artwork.authorName}</span>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium officiis obcaecati iusto ducimus fugiat numquam natus, corporis molestiae accusantium tempore distinctio, mollitia exercitationem unde blanditiis aliquid voluptatum architecto impedit omnis?</p>
                    </li>
                </ul>
            </div>
        </main>
    );
}