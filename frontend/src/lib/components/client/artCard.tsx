import { Artwork } from '@/lib/types';
import Image from 'next/image';

type ArtCardProps = {
    artwork: Artwork;
}

export default function ArtCard(props: ArtCardProps) {
    return (
        <div className="items-center flex flex-col justify-center shadow">
            <div className="flex flex-col items-center py-4">
                <a href={"/prompts/"+props.artwork.promptId+"/art/"+props.artwork.id} className="mb-2">
                    <Image src={props.artwork.imageUrl} alt="" width={0} height={0} className="h-48 w-48 hover:scale-105 transition duration-150" />
                </a>
                <h3 className="bg-yellow-100 text-xl py-1 w-full text-center">{props.artwork.title}</h3>
                <div className="mb-2 text-center">
                    <p>By: <a href={"/users/"+props.artwork.authorId} className="text-blue-600 hover:text-purple-500 transition ease-in-out duration-150">
                        {props.artwork.authorName}
                    </a></p>
                    <p>For prompt: <a href={"/prompts/"+props.artwork.promptId} className="text-blue-600 hover:text-purple-500 transition ease-in-out duration-150">
                        {props.artwork.promptText}
                    </a></p>
                </div>
            </div>
        </div>
    );
}