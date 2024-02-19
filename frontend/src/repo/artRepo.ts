import { Artwork } from "@/lib/types";

type ArtRepo = {
    newArtwork: () => Artwork;
    getArtworkByID: (id: number) => Promise<Artwork | undefined>;
    getArtworksByPrompt: (promptId: number) => Promise<Artwork[]>;
    getLatestArtworks: () => Promise<Artwork[]>;
    getMostLikedArtworks: () => Promise<Artwork[]>;
    updateIsLiked: (id: number, isLiked: boolean) => Promise<Artwork | undefined>;
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
        comments: 12,
        isLiked: false,
        createdAt: new Date(),
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
        comments: 10,
        isLiked: false,
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
        comments: 10,
        isLiked: false,
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
        comments: 5,
        isLiked: false,
        createdAt: new Date()
    }];

    const newArtwork = (): Artwork => {
        return {
            id: 0,
            title: '',
            authorId: 0,
            authorName: '',
            authorIconUrl: '',
            promptId: 0,
            promptText: '',
            imageUrl: '',
            likes: 0,
            comments: 0,
            isLiked: false,
            createdAt: new Date()
        };
    };

    const getArtworkByID = async (id: number): Promise<Artwork | undefined> => {
        return sampleData.find(a => a.id === id);
    };

    const getArtworksByPrompt = async (promptId: number): Promise<Artwork[]> => {
        return sampleData.filter(a => a.promptId === promptId);
    };

    const getLatestArtworks = async (): Promise<Artwork[]> => {
        return sampleData.sort((a, b) => b.id - a.id);
    };

    const getMostLikedArtworks = async (): Promise<Artwork[]> => {
        return sampleData.sort((a, b) => b.likes - a.likes);
    };

    const updateIsLiked = async (id: number, isLiked: boolean): Promise<Artwork | undefined> => {
        const artwork = sampleData.find(a => a.id === id);
        if (artwork) {
            return {
                ...artwork,
                isLiked: isLiked,
                likes: isLiked ? artwork?.likes + 1 : artwork?.likes - 1
            };
        }
    };

    return {
        newArtwork,
        getArtworkByID,
        getArtworksByPrompt,
        getLatestArtworks,
        getMostLikedArtworks,
        updateIsLiked
    };
};

export default NewArtRepo;