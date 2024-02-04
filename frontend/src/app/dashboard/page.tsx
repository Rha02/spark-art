"use client";
import ArtCard from '@/lib/components/client/artCard';
import { Artwork } from '@/lib/types';
import Image from 'next/image';
import { useState } from 'react';

export default function Dashboard() {
    const [sortType, setSortType] = useState('latest');

    const onSortTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortType(e.target.value);
        // TODO: Fetch data based on sort type
    };

    const artwork: Artwork = {
        id: 100,
        title: 'Some Artwork',
        authorId: 101,
        authorName: 'Author Name',
        promptId: 102,
        promptText: 'Some Prompt Text',
        imageUrl: '/path/to/image.jpg'
    };

    return (
        <main>
            <h1 className="text-center text-4xl pt-8 font-semibold text-indigo-500">Explore Art</h1>
            <div className="flex w-full justify-center pt-4">
                <div className="text-center border-b-2 w-3/4">
                    <label htmlFor="" className="font-bold text-gray-800">
                        Sort By:
                    </label>
                    <select className="p-2 text-indigo-500 font-semibold"
                        value={sortType}
                        onChange={onSortTypeChange}>
                        <option value="latest">Latest</option>
                        <option value="most-liked">Most Liked</option>
                    </select>
                </div>
            </div>
            <div className="flex justify-center mt-2">
                <div className="grid grid-cols-5 w-3/4 mx-2 space-x-4 mt-8 space-y-4">
                    <ArtCard artwork={artwork} />
                    <ArtCard artwork={artwork} />
                    <ArtCard artwork={artwork} />
                    <ArtCard artwork={artwork} />
                    <ArtCard artwork={artwork} />
                    <ArtCard artwork={artwork} />
                    <ArtCard artwork={artwork} />
                </div>
            </div>
        </main>
    );
}