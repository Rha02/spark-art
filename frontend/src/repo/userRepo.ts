import { UserRepository } from "@/repo";

const NewUserRepository = (host: string): UserRepository => {
    console.log("UserRepo host: " + host);

    return {
        createUser: async (user) => {
            // TODO: Implement user creation
            return user;
        },
        getAuthUser: async (token) => {
            console.log("Getting auth user with token: " + token);
            // TODO: Implement user authentication
            return {
                id: 1,
                username: "test",
                profileImageUrl: "fakeurl",
                createdAt: new Date()
            }
        },
        getUserById: async (id) => {
            console.log("Getting user with id: " + id);
            // TODO: Implement user retrieval
            return {
                id: id,
                username: "test",
                profileImageUrl: "fakeurl",
                createdAt: new Date()
            }
        },
        updateProfileIcon: async (id, file) => {
            console.log("Updating profile icon for user: " + id);
            console.log("File: " + file.name);
            // TODO: Implement profile icon update
            return "fakeurl";
        }
    }
}

export default NewUserRepository;