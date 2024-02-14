"use client";

import ArtCard from "@/lib/components/client/artCard";
import { Artwork, Prompt, User } from "@/lib/types";
import Image from "next/image";
import { useEffect } from "react";

export default function Prompt({ params }: { params: { id: number }}) {
    const prompt: Prompt = {
        id: params.id,
        text: "Prompt with ID " + params.id,
        creatorId: 1,
        responses: 0,
        createdAt: new Date(),
    };

    const artworks: Artwork[] = [
        {
            id: 1,
            title: "Artwork 1",
            authorId: 1,
            authorName: "Author 1",
            authorIconUrl: "",
            promptText: prompt.text,
            imageUrl: "",
            promptId: 1,
            createdAt: new Date(),
            likes: 100
        },
        {
            id: 2,
            title: "Artwork 2",
            authorId: 2,
            authorName: "Author 2",
            authorIconUrl: "",
            promptText: prompt.text,
            imageUrl: "",
            promptId: 2,
            createdAt: new Date(),
            likes: 50
        },
        {
            id: 3,
            title: "Artwork 3",
            authorId: 3,
            authorName: "Author 3",
            authorIconUrl: "",
            promptText: prompt.text,
            imageUrl: "",
            promptId: 3,
            createdAt: new Date(),
            likes: 30
        }
    ];

    const promptAuthor: User = {
        id: 1,
        username: "TheBatman",
        profileImageUrl: "",
        createdAt: new Date()
    };

    useEffect(() => {
        console.log("TODO: get prompt and its artworks from repo");
    }, []);

    return (
        <main className="mx-36">
            <h1 className="text-3xl pt-8 text-indigo-500 font-bold">{prompt.text}</h1>
            <div className="mt-2 flex items-center space-x-2">
                <Image src={promptAuthor.profileImageUrl} width={40} height={40} className="rounded-full" alt={""} />
                <span className="text-gray-500">{promptAuthor.username}</span>
            </div>
            <h2 className="text-xl text-indigo-500 font-semibold mt-4">Responses:</h2>
            <div className="grid grid-cols-5 mx-2">
                {artworks.map((artwork, idx) => <ArtCard key={idx} artwork={artwork} />)}
            </div>
        </main>
    );
}