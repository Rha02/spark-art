"use client";

import { ArtCard } from "@/lib/components/client";
import { Artwork, Prompt } from "@/lib/models";
import { ArtRepo, PromptRepo } from "@/repo";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function PromptPage({ params }: { params: { id: string } }) {
    const promptId = parseInt(params.id);
    if (isNaN(promptId)) {
        window.location.href = "/prompts";
    }

    const [artworks, setArtworks] = useState<Artwork[]>([]);
    const prompt = useRef<Prompt>({
        id: 0,
        text: "",
        creatorId: 0,
        creatorName: "",
        creatorIconUrl: "",
        responses: 0,
        createdAt: new Date()
    });

    useEffect(() => {
        PromptRepo.getPromptByID(promptId).then((p) => {
            if (p) {
                prompt.current = p;
            }
        }).catch((err) => console.error(err));
        ArtRepo.getArtworksByPrompt(promptId).then((artworks) => setArtworks(artworks)).catch((err) => console.error(err));
    }, [promptId]);

    return (
        <main className="mx-36">
            <h1 className="text-3xl pt-8 text-indigo-500 font-bold">{prompt.current.text}</h1>
            <div className="mt-2 flex items-center space-x-2">
                <Image src={prompt.current.creatorIconUrl} width={40} height={40} className="rounded-ful" alt={""} />
                <span className="text-gray-500">{prompt.current.creatorName}</span>
            </div>
            <h2 className="text-xl text-indigo-500 font-semibold mt-4">Responses:</h2>
            <div className="grid grid-cols-5 mx-2">
                {artworks.map((artwork, idx) => <ArtCard key={idx} artwork={artwork} />)}
            </div>
        </main>
    );
}