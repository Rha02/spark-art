import { Artwork } from "@/lib/types";

type artRepo = {
    getLatestArtworks: () => Promise<Artwork[]>;
    getMostLikedArtworks: () => Promise<Artwork[]>;
}

const NewArtRepo = (host: string): artRepo => {
    console.log('art host: ', host);

    const sampleData: Artwork[] = [{
        id: 1,
        title: 'Artwork 1',
        authorId: 1,
        authorName: 'Author 1',
        promptId: 1,
        promptText: 'Prompt 1',
        imageUrl: '',
        likes: 100
    }, {
        id: 2,
        title: 'Artwork 2',
        authorId: 2,
        authorName: 'Author 2',
        promptId: 2,
        promptText: 'Prompt 2',
        imageUrl: '',
        likes: 50
    }, {
        id: 3,
        title: 'Artwork 3',
        authorId: 3,
        authorName: 'Author 3',
        promptId: 3,
        promptText: 'Prompt 3',
        imageUrl: '',
        likes: 30
    }, {
        id: 4,
        title: 'Artwork 4',
        authorId: 4,
        authorName: 'Author 4',
        promptId: 4,
        promptText: 'Prompt 4',
        imageUrl: '',
        likes: 20
    }];

    const getLatestArtworks = async (): Promise<Artwork[]> => {
        return sampleData.sort((a, b) => b.id - a.id);
    };

    const getMostLikedArtworks = async (): Promise<Artwork[]> => {
        return sampleData.sort((a, b) => b.likes - a.likes);
    };

    return {
        getLatestArtworks,
        getMostLikedArtworks
    };
};

export default NewArtRepo;