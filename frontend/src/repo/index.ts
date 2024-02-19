import NewArtRepo from "./artRepo";
import NewCommentRepo from "./commentRepo";
import NewPromptRepo from "./promptRepo";
import NewUserRepo from "./userRepo";

const ArtRepo = NewArtRepo('http://localhost:3001');
const UserRepo = NewUserRepo('http://localhost:3001');
const PromptRepo = NewPromptRepo('http://localhost:3001');
const CommentRepo = NewCommentRepo('http://localhost:3001');

export { ArtRepo, UserRepo, PromptRepo, CommentRepo };