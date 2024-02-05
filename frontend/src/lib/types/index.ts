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