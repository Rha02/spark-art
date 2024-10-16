import { Artwork, Topic, User } from "@/lib/models"

type getTopicsFilter = {
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
    getArtworksByTopic: (topicId: number) => Promise<Artwork[]>
    getArtworksByUser: (userId: number) => Promise<Artwork[]>
    likeArtwork: (artworkId: number) => Promise<void>
    dislikeArtwork: (artworkId: number) => Promise<void>
}

export type TopicRepository = {
    getTopicByID: (id: number) => Promise<Topic | undefined>;
    getTopics: (filter?: getTopicsFilter) => Promise<Topic[]>;
    getTopicsByUser: (userId: number) => Promise<Topic[]>;
    createTopic: (text: string) => Promise<Topic>;
}

