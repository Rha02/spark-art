"use client";
import Image from 'next/image';
import { useState } from 'react';

export default function Dashboard() {
    const [sortType, setSortType] = useState('latest');

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
                        onChange={(e) => setSortType(e.target.value)}
                    >
                        <option value="latest">Latest</option>
                        <option value="most-liked">Most Liked</option>
                    </select>
                </div>
            </div>
            <div className="flex justify-center mt-2">
                <div className="grid grid-cols-5 w-3/4 mx-2 space-x-4 mt-8">
                    <div className="items-center flex flex-col justify-center shadow-lg">
                        <div className="flex flex-col items-center py-4">
                            <a href="/dashboard" className="mb-2">
                                <Image src="" alt="" className="h-48 w-48 hover:scale-105 transition duration-150" />
                            </a>
                            <h3 className="bg-yellow-100 text-xl py-1 w-full text-center">Some Artwork</h3>
                            <div className="mb-2 text-center">
                                <p>By: <a href="/dashboard" className="text-blue-600 hover:text-purple-500 transition ease-in-out duration-150">Author Name</a></p>
                                <p>For: <a href="/dashboard" className="text-blue-600 hover:text-purple-500 transition ease-in-out duration-150">Prompt Name</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="items-center flex flex-col justify-center shadow-lg">
                        <div className="flex flex-col items-center py-4">
                            <a href="/dashboard" className="mb-2">
                                <Image src="" alt="" className="h-48 w-48 hover:scale-105 transition duration-150" />
                            </a>
                            <h3 className="bg-yellow-100 text-xl py-1 w-full text-center">Some Artwork</h3>
                            <div className="mb-2 text-center">
                                <p>By: <a href="/dashboard" className="text-blue-600 hover:text-purple-500 transition ease-in-out duration-150">Author Name</a></p>
                                <p>For: <a href="/dashboard" className="text-blue-600 hover:text-purple-500 transition ease-in-out duration-150">Prompt Name</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="items-center flex flex-col justify-center shadow-lg">
                        <div className="flex flex-col items-center py-4">
                            <a href="/dashboard" className="mb-2">
                                <Image src="" alt="" className="h-48 w-48 hover:scale-105 transition duration-150" />
                            </a>
                            <h3 className="bg-yellow-100 text-xl py-1 w-full text-center">Some Artwork</h3>
                            <div className="mb-2 text-center">
                                <p>By: <a href="/dashboard" className="text-blue-600 hover:text-purple-500 transition ease-in-out duration-150">Author Name</a></p>
                                <p>For: <a href="/dashboard" className="text-blue-600 hover:text-purple-500 transition ease-in-out duration-150">Prompt Name</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="items-center flex flex-col justify-center shadow-lg">
                        <div className="flex flex-col items-center py-4">
                            <a href="/dashboard" className="mb-2">
                                <Image src="" alt="" className="h-48 w-48 hover:scale-105 transition duration-150" />
                            </a>
                            <h3 className="bg-yellow-100 text-xl py-1 w-full text-center">Some Artwork</h3>
                            <div className="mb-2 text-center">
                                <p>By: <a href="/dashboard" className="text-blue-600 hover:text-purple-500 transition ease-in-out duration-150">Author Name</a></p>
                                <p>For: <a href="/dashboard" className="text-blue-600 hover:text-purple-500 transition ease-in-out duration-150">Prompt Name</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="items-center flex flex-col justify-center shadow-lg">
                        <div className="flex flex-col items-center py-4">
                            <a href="/dashboard" className="mb-2">
                                <Image src="" alt="" className="h-48 w-48 hover:scale-105 transition duration-150" />
                            </a>
                            <h3 className="bg-yellow-100 text-xl py-1 w-full text-center">Some Artwork</h3>
                            <div className="mb-2 text-center">
                                <p>By: <a href="/dashboard" className="text-blue-600 hover:text-purple-500 transition ease-in-out duration-150">Author Name</a></p>
                                <p>For: <a href="/dashboard" className="text-blue-600 hover:text-purple-500 transition ease-in-out duration-150">Prompt Name</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="items-center flex flex-col justify-center shadow-lg">
                        <div className="flex flex-col items-center py-4">
                            <a href="/dashboard" className="mb-2">
                                <Image src="" alt="" className="h-48 w-48 hover:scale-105 transition duration-150" />
                            </a>
                            <h3 className="bg-yellow-100 text-xl py-1 w-full text-center">Some Artwork</h3>
                            <div className="mb-2 text-center">
                                <p>By: <a href="/dashboard" className="text-blue-600 hover:text-purple-500 transition ease-in-out duration-150">Author Name</a></p>
                                <p>For: <a href="/dashboard" className="text-blue-600 hover:text-purple-500 transition ease-in-out duration-150">Prompt Name</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}