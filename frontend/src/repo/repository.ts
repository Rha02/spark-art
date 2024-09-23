import { Artwork, Prompt, User } from "@/lib/models"

type getPromptsFilter = {
    sortType?: string;
    search?: string;
};

export type UserRepository = {
    createUser: (user: User) => Promise<User>
    getAuthUser: (token: string) => Promise<User>
    getUserById: (id: number) => Promise<User>
    updateProfileIcon: (id: number, file: File) => Promise<string>
}

export type ArtRepository = {
    createArtwork: (artwork: Artwork) => Promise<Artwork>
    getArtworks: () => Promise<Artwork[]>
    getArtworkById: (id: number) => Promise<Artwork | undefined>
    getArtworksByPrompt: (promptId: number) => Promise<Artwork[]>
    getArtworksByUser: (userId: number) => Promise<Artwork[]>
    likeArtwork: (artworkId: number) => Promise<void>
    dislikeArtwork: (artworkId: number) => Promise<void>
}

export type PromptRepository = {
    getPromptByID: (id: number) => Promise<Prompt | undefined>;
    getPrompts: (filter?: getPromptsFilter) => Promise<Prompt[]>;
    getPromptsByUser: (userId: number) => Promise<Prompt[]>;
    createPrompt: (text: string) => Promise<Prompt>;
}

