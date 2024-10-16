"use client";

import { ArtCard } from "@/lib/components/client";
import { Artwork, Topic } from "@/lib/models";
import { ArtRepo, TopicRepo } from "@/repo";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function TopicPage({ params }: { params: { id: string } }) {
    const topicId = parseInt(params.id);
    if (isNaN(topicId)) {
        window.location.href = "/topics";
    }

    const [artworks, setArtworks] = useState<Artwork[]>([]);
    const topic = useRef<Topic>({
        id: 0,
        text: "",
        creatorId: 0,
        creatorName: "",
        creatorIconUrl: "",
        responses: 0,
        createdAt: new Date()
    });

    useEffect(() => {
        TopicRepo.getTopicByID(topicId).then((p) => {
            if (p) {
                topic.current = p;
            }
        }).catch((err) => console.error(err));
        ArtRepo.getArtworksByTopic(topicId).then((artworks) => setArtworks(artworks)).catch((err) => console.error(err));
    }, [topicId]);

    return (
        <main className="mx-36">
            <h1 className="text-3xl pt-8 text-indigo-500 font-bold">{topic.current.text}</h1>
            <div className="mt-2 flex items-center space-x-2">
                <Image src={topic.current.creatorIconUrl} width={40} height={40} className="rounded-ful" alt={""} />
                <span className="text-gray-500">{topic.current.creatorName}</span>
            </div>
            <h2 className="text-xl text-indigo-500 font-semibold mt-4">Responses:</h2>
            <div className="grid grid-cols-5 mx-2">
                {artworks.map((artwork, idx) => <ArtCard key={idx} artwork={artwork} />)}
            </div>
        </main>
    );
}