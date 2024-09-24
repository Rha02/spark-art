import { ArtComment } from "@/lib/models";

type ArtCommentRepo = {
    newArtComment: () => ArtComment;
    getArtCommentsByArtwork: (artworkId: number) => Promise<ArtComment[]>;
    createArtComment: (artworkId: number, text: string) => Promise<ArtComment>;
}

const NewCommentRepository = (host: string): ArtCommentRepo => {
    console.log('ArtComment host: ', host);

    const sampleData: ArtComment[] = [{
        id: 1,
        creatorId: 1,
        creatorName: 'User 1',
        creatorIconUrl: '',
        artworkId: 1,
        text: 'ArtComment 1',
        createdAt: new Date()
    }, {
        id: 2,
        creatorId: 2,
        creatorName: 'User 2',
        creatorIconUrl: '',
        artworkId: 2,
        text: 'ArtComment 2',
        createdAt: new Date()
    }, {
        id: 3,
        creatorId: 3,
        creatorName: 'User 3',
        creatorIconUrl: '',
        artworkId: 3,
        text: 'ArtComment 3',
        createdAt: new Date()
    }, {
        id: 4,
        creatorId: 4,
        creatorName: 'User 4',
        creatorIconUrl: '',
        artworkId: 4,
        text: 'ArtComment 4',
        createdAt: new Date()
    }];

    const newArtComment = () => {
        return {
            id: 0,
            creatorId: 0,
            creatorName: '',
            creatorIconUrl: '',
            artworkId: 0,
            text: '',
            createdAt: new Date()
        };
    };

    const getArtCommentsByArtwork = async (artworkId: number) => {
        return sampleData.filter((ac) => ac.artworkId === artworkId);
    };

    const createArtComment = async (artworkId: number, text: string) => {
        return {
            id: 5,
            creatorId: 5,
            creatorName: 'User 5',
            creatorIconUrl: '',
            artworkId: artworkId,
            text: text,
            createdAt: new Date()
        };
    };

    return {
        newArtComment,
        getArtCommentsByArtwork,
        createArtComment
    };
};

export default NewCommentRepository;