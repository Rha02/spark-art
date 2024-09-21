import { UserRepository, ArtRepository } from "./repository";
import NewUserRepository from "./userRepo";

const host = "http://localhost:3001";

const UserRepo = NewUserRepository(host);

export { UserRepo };
export type { UserRepository, ArtRepository };
