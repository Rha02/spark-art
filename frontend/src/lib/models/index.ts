
export type User = {
    id: number
    username: string
    profileImageUrl: string;
    createdAt: Date;
}

export type Artwork = {
    id: number
    title: string
    authorId: number;
    authorName: string;
    authorIconUrl: string;
    topicId: number;
    topicText: string;
    imageUrl: string;
    likes: number;
    comments: number;
    isLiked: boolean;
    createdAt: Date;
}

export type Topic = {
    id: number
    text: string
    creatorId: number;
    creatorName: string;
    creatorIconUrl: string;
    responses: number;
    createdAt: Date;
}

export type ArtComment = {
    id: number;
    creatorId: number;
    creatorName: string;
    creatorIconUrl: string;
    artworkId: number;
    text: string;
    createdAt: Date;
}