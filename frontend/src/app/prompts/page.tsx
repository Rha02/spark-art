"use client";

export default function Prompts() {
    const handleSearch = () => {
        console.log("searching");
    };

    const handleCreate = () => {
        console.log("creating");
    };

    return (
        <main>
            <h1 className="text-center text-4xl pt-8 font-semibold text-indigo-500">Explore Prompts</h1>
            <div className="flex w-full justify-center pt-4">
                <div className="text-center border-b-2 w-3/4">
                    <div className="flex justify-center items-center">
                        <label htmlFor="search" className="font-semibold text-gray-800 bg-indigo-600 rounded-l-lg py-2.5 px-3 text-white">
                            Search
                        </label>
                        <input type="text" className="border-2 border-indigo-500 p-2 w-1/2" name="search" placeholder="Batman looking down into the city" />
                        <button onClick={handleSearch} className="py-2.5 px-3 bg-indigo-600 hover:bg-indigo-500 transition ease-in-out duration-150 text-white rounded-r-lg">Search</button>
                        <button className="py-2.5 px-4 ml-1 bg-green-600 hover:bg-green-500 transition ease-in-out duration-150 text-white rounded-lg">+</button>
                    </div>
                    <div>
                        <label htmlFor="" className="font-bold text-gray-800">
                            Sort By:
                        </label>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-2">
            </div>
        </main>
    );
}