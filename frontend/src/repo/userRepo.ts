import { User } from "@/lib/types";

type userRepo = {
    register: (formData: FormData) => Promise<string>;
    getAuthUser: (token: string) => Promise<User>;
    getUserByID: (id: number) => Promise<User | undefined>;
    updateProfileIcon: (id: number, file: File) => Promise<string>;
}

const NewUserRepo = (host: string): userRepo => {
    console.log('user host: ', host);

    const sampleData: User[] = [{
        id: 1,
        username: "TheBatman",
        profileImageUrl: "",
        createdAt: new Date()
    }, {
        id: 2,
        username: "TestUser2",
        profileImageUrl: "",
        createdAt: new Date()
    }];

    const register = async (formData: FormData): Promise<string> => {
        // TODO: execute the fetch request to the backend
        return "1234";
    };

    const getAuthUser = async (token: string): Promise<User> => {
        // TODO: execute the fetch request to the backend
        return sampleData[0];
    };
    
    const getUserByID = async (id: number): Promise<User | undefined> => {
        return sampleData.find((u) => u.id === id);
    };

    const updateProfileIcon = async (id: number, file: File): Promise<string> => {
        console.log('updateProfileIcon: ', id, file);
        // TODO: execute request to backend, then respond with new profile image url
        return "";
    };

    return {
        register,
        getAuthUser,
        getUserByID,
        updateProfileIcon
    };
};

export default NewUserRepo;