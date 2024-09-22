import { Artwork } from "@/lib/models";
import { ArtRepository } from "./repository";

const NewArtRepository = (host: string): ArtRepository => {
    console.log("ArtRepo host: " + host);

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

    return {
        createArtwork: async (artwork) => {
            return artwork;
        },
        getArtworks: async () => [...sampleData],
        getArtworkById: async (id) => {
            return sampleData.find(artwork => artwork.id === id);
        },
        getArtworksByPrompt: async (promptId) => {
            return sampleData.filter(artwork => artwork.promptId === promptId);
        },
        getArtworksByUser: async (userId) => {
            return sampleData.filter(artwork => artwork.authorId === userId);
        },
        likeArtwork: async (artworkId) => {
            console.log(`User liked artwork ${artworkId}`);
        },
        dislikeArtwork: async (artworkId) => {
            console.log(`User disliked artwork ${artworkId}`);
        }
    }
};

export default NewArtRepository;