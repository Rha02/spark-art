"use client";
import { Artwork } from "@/lib/types";
import { ArtRepo } from "@/repo";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Prompt({ params }: { params: { id: string, artid: string}}) {
    const artID = parseInt(params.id);
    if (isNaN(artID)) {
        window.location.href = "/prompts";
    }

    const [artwork, setArtwork] = useState<Artwork>(ArtRepo.newArtwork());

    useEffect(() => {
        ArtRepo.getArtworkByID(artID).then((a) => {
            if (a) {
                setArtwork(a);
            }
        }).catch((err) => console.error(err));
    }, [artID]);

    return (
        <main>
            <h1>{artwork.title}</h1>
            <h2>{artwork.authorName}</h2>
            <p>{artwork.createdAt.toDateString()}</p>
            <h3>{artwork.promptText}</h3>
            <Image src={artwork.imageUrl} width={500} height={500} className="rounded-ful" alt={""} />
            <p>{artwork.likes}</p>
        </main>
    );
}