import { Artwork, User } from "@/lib/models"

export type UserRepository = {
    createUser: (user: User) => Promise<User>
    getAuthUser: (token: string) => Promise<User>
    getUserById: (id: number) => Promise<User>
    updateProfileIcon: (id: number, file: File) => Promise<string>
}

export type ArtRepository = {
    createArtwork: (artwork: Artwork) => Promise<Artwork>
    getArtworks: () => Promise<Artwork[]>
    getArtworkById: (id: number) => Promise<Artwork>
    getArtworksByPrompt: (promptId: number) => Promise<Artwork[]>
    getArtworksByUser: (userId: number) => Promise<Artwork[]>
    likeArtwork: (userId: number, artworkId: number) => Promise<void>
    unlikeArtwork: (userId: number, artworkId: number) => Promise<void>
    commentOnArtwork: (userId: number, artworkId: number, text: string) => Promise<void>
    deleteComment: (commentId: number) => Promise<void>
}

