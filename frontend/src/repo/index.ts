import NewArtRepo from "./artRepo";
import NewPromptRepo from "./promptRepo";
import NewUserRepo from "./userRepo";

const ArtRepo = NewArtRepo('http://localhost:3001');
const UserRepo = NewUserRepo('http://localhost:3001');
const PromptRepo = NewPromptRepo('http://localhost:3001');

export { ArtRepo, UserRepo, PromptRepo };