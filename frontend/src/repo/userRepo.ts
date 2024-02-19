import { User } from "@/lib/types";

type userRepo = {
    register: (formData: FormData) => Promise<string>;
    getAuthUser: (token: string) => Promise<User>;
    getUserByID: (id: number) => Promise<User | undefined>;
}

const NewUserRepo = (host: string): userRepo => {
    console.log('user host: ', host);

    const sampleData: User[] = [{
        id: 1,
        username: "TestUser",
        profileImageUrl: "",
        createdAt: new Date()
    }];

    const register = async (formData: FormData): Promise<string> => {
        // TODO: execute the fetch request to the backend
        return "1234";
    };

    const getAuthUser = async (token: string): Promise<User> => {
        // TODO: execute the fetch request to the backend
        return {
            id: 1,
            username: "TestUser",
            profileImageUrl: "",
            createdAt: new Date()
        };
    };
    
    const getUserByID = async (id: number): Promise<User | undefined> => {
        return sampleData.find((u) => u.id === id);
    };

    return {
        register,
        getAuthUser,
        getUserByID
    };
};

export default NewUserRepo;