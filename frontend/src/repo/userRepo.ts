import { UserRepository } from "./repository";

const NewUserRepository = (host: string): UserRepository => {
    console.log("UserRepo host: " + host);

    return {
        getAuthUser: async (token) => {
            return fetch(host + "/user", {
                method: "GET",
                headers: {
                    "Authorization": "Bearer " + token
                }
            }).then(res => res.json());
        },
        getUserById: async (id) => {
            console.log("Getting user with id: " + id);
            // TODO: Implement user retrieval
            return {
                id: id,
                username: "test",
                profileImageUrl: "",
                createdAt: new Date()
            }
        },
        updateProfileIcon: async (id, file) => {
            console.log("Updating profile icon for user: " + id);
            console.log("File: " + file.name);
            // TODO: Implement profile icon update
            return "";
        }
    }
}

export default NewUserRepository;