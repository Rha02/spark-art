"use client";

import { CommentIcon, ThumbsUpIcon } from '@/lib/icons';
import { Artwork } from '@/lib/models';
import { ArtRepo } from '@/repo';
import Image from 'next/image';
import { useState } from 'react';

type ArtCardProps = {
    artwork: Artwork;
}

export default function ArtCard(props: ArtCardProps) {
    const [artwork, setArtwork] = useState<Artwork>(props.artwork);

    const handleLike = () => {
        ArtRepo.likeArtwork(artwork.id).then(() => {
            if (artwork.isLiked) {
                setArtwork({ ...artwork, likes: artwork.likes - 1, isLiked: false });
            } else {
                setArtwork({ ...artwork, likes: artwork.likes + 1, isLiked: true });
            }
        }).catch((err) => console.error(err));
    };

    return (
        <div className="items-center flex flex-col justify-center shadow">
            <div className="flex flex-col items-center py-4">
                <a href={"/topics/" + artwork.topicId + "/art/" + artwork.id} className="mb-2">
                    <Image src={artwork.imageUrl} alt="" width={0} height={0} className="h-48 w-48 hover:scale-105 transition duration-150" />
                </a>
                <h3 className="text-xl py-1 w-full text-center">{artwork.title}</h3>
                <div className="mb-2 text-center">
                    <p>By:
                        <a href={"/users/" + artwork.authorId} className="ml-1 text-blue-600 hover:text-purple-500 transition ease-in-out duration-150">
                            {artwork.authorName}
                        </a>
                    </p>
                    <p>For topic:
                        <a href={"/topics/" + artwork.topicId} className="ml-1 text-blue-600 hover:text-purple-500 transition ease-in-out duration-150">
                            {artwork.topicText}
                        </a>
                    </p>
                </div>
                <div className="flex justify-center space-x-4 items-center">
                    <button onClick={handleLike} className={"p-1 rounded-md flex space-x-1 item-center border-2 border-blue-500 " + (artwork.isLiked ? "bg-blue-500 text-white" : "text-blue-500")}>
                        <span>
                            {artwork.likes}
                        </span>
                        <ThumbsUpIcon width={20} height={20} color={artwork.isLiked ? "#ffffff" : "#3b82f6"} />
                    </button>
                    <span className="py-1 flex text-gray-600 space-x-1 items-center">
                        <span>{artwork.comments}</span>
                        <CommentIcon width={20} height={20} color="#4b5563" />
                    </span>
                </div>
            </div>
        </div>
    );
}