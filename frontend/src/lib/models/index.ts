
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
    promptId: number;
    promptText: string;
    imageUrl: string;
    likes: number;
    comments: number;
    isLiked: boolean;
    createdAt: Date;
}

export type Prompt = {
    id: number
    text: string
    creatorId: number;
    creatorName: string;
    creatorIconUrl: string;
    responses: number;
    createdAt: Date;
}