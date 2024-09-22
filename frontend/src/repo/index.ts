import { UserRepository, ArtRepository } from "./repository";
import NewUserRepository from "./userRepo";
import NewArtRepository from "./artRepo";

const host = "http://localhost:3001";

const UserRepo = NewUserRepository(host);
const ArtRepo = NewArtRepository(host);

export { UserRepo, ArtRepo };
export type { UserRepository, ArtRepository };
