export type Artwork = {
    id: number;
    title: string;
    authorId: number;
    authorName: string;
    promptId: number;
    promptText: string;
    imageUrl: string;
    likes: number;
}

export type User = {
    id: number;
    username: string;
    profileImageUrl: string;
    createdAt: Date;
}

export type Prompt = {
    id: number;
    text: string;
    creatorId: number;
    responses: number;
    createdAt: Date;
}