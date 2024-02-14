import { Artwork } from "@/lib/types";

type ArtRepo = {
    getArtworksByPrompt: (promptId: number) => Promise<Artwork[]>;
    getLatestArtworks: () => Promise<Artwork[]>;
    getMostLikedArtworks: () => Promise<Artwork[]>;
}

const NewArtRepo = (host: string): ArtRepo => {
    console.log('art host: ', host);

    const sampleData: Artwork[] = [{
        id: 1,
        title: 'Artwork 1',
        authorId: 1,
        authorName: 'Author 1',
        authorIconUrl: '',
        promptId: 1,
        promptText: 'Prompt 1',
        imageUrl: '',
        likes: 100,
        createdAt: new Date()
    }, {
        id: 2,
        title: 'Artwork 2',
        authorId: 2,
        authorName: 'Author 2',
        authorIconUrl: '',
        promptId: 2,
        promptText: 'Prompt 2',
        imageUrl: '',
        likes: 50,
        createdAt: new Date()
    }, {
        id: 3,
        title: 'Artwork 3',
        authorId: 3,
        authorName: 'Author 3',
        authorIconUrl: '',
        promptId: 3,
        promptText: 'Prompt 3',
        imageUrl: '',
        likes: 30,
        createdAt: new Date()
    }, {
        id: 4,
        title: 'Artwork 4',
        authorId: 4,
        authorName: 'Author 4',
        authorIconUrl: '',
        promptId: 4,
        promptText: 'Prompt 4',
        imageUrl: '',
        likes: 20,
        createdAt: new Date()
    }];

    const getArtworksByPrompt = async (promptId: number): Promise<Artwork[]> => {
        return sampleData.filter(a => a.promptId === promptId);
    };

    const getLatestArtworks = async (): Promise<Artwork[]> => {
        return sampleData.sort((a, b) => b.id - a.id);
    };

    const getMostLikedArtworks = async (): Promise<Artwork[]> => {
        return sampleData.sort((a, b) => b.likes - a.likes);
    };

    return {
        getArtworksByPrompt,
        getLatestArtworks,
        getMostLikedArtworks
    };
};

export default NewArtRepo;