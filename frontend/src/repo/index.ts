import NewArtRepo from "./artRepo";
import NewUserRepo from "./userRepo";

const ArtRepo = NewArtRepo('http://localhost:3001');
const UserRepo = NewUserRepo('http://localhost:3001');

export { ArtRepo, UserRepo };