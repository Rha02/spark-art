import { UserRepository, ArtRepository } from "./repository";
import NewUserRepository from "./userRepo";
import NewArtRepository from "./artRepo";
import NewPromptRepository from "./promptRepo";
import NewCommentRepository from "./commentRepo";

const host = "http://localhost:3001";

const UserRepo = NewUserRepository(host);
const ArtRepo = NewArtRepository(host);
const PromptRepo = NewPromptRepository(host);
const CommentRepo = NewCommentRepository(host);

export { UserRepo, ArtRepo, PromptRepo, CommentRepo };
export type { UserRepository, ArtRepository };
