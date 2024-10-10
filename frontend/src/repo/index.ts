import { UserRepository, ArtRepository } from "./repository";
import NewUserRepository from "./userRepo";
import NewArtRepository from "./artRepo";
import NewTopicRepository from "./topicRepo";
import NewCommentRepository from "./commentRepo";

const host = "http://localhost:3001";

const UserRepo = NewUserRepository(host);
const ArtRepo = NewArtRepository(host);
const TopicRepo = NewTopicRepository(host);
const CommentRepo = NewCommentRepository(host);

export { UserRepo, ArtRepo, TopicRepo, CommentRepo };
export type { UserRepository, ArtRepository };
