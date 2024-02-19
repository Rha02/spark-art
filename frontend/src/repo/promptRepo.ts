import { Prompt } from "@/lib/types";

type getPromptsFilter = {
    sortType?: string;
    search?: string;
};

type PromptRepo = {
    newPrompt: () => Prompt;
    getPromptByID: (id: number) => Promise<Prompt | undefined>;
    getPrompts: (filter?: getPromptsFilter) => Promise<Prompt[]>;
    getPromptsByUser: (userId: number) => Promise<Prompt[]>;
    createPrompt: (text: string) => Promise<Prompt>;
}

const NewPromptRepo = (host: string): PromptRepo => {
    console.log('prompt host: ', host);

    const sampleData: Prompt[] = [
        {
            id: 1,
            text: 'Apple tree on a hill',
            creatorId: 1,
            creatorName: 'TheBatman',
            creatorIconUrl: '',
            responses: 5,
            createdAt: new Date()
        },
        {
            id: 2,
            text: 'Cat with a box on top of it, with eyes, paws, and tail showing',
            creatorId: 1,
            creatorName: 'TheBatman',
            creatorIconUrl: '',
            responses: 2,
            createdAt: new Date()
        },
        {
            id: 3,
            text: 'Batman fighting the Joker in a dark alleyway',
            creatorId: 1,
            creatorName: 'TheBatman',
            creatorIconUrl: '',
            responses: 3,
            createdAt: new Date()
        }
    ];

    const newPrompt = (): Prompt => {
        return {
            id: 0,
            text: '',
            creatorId: 0,
            creatorName: '',
            creatorIconUrl: '',
            responses: 0,
            createdAt: new Date()
        };
    };

    const getPromptByID = async (id: number): Promise<Prompt | undefined> => {
        return sampleData.find(p => p.id === id);
    };

    const getPrompts = async (filter?: getPromptsFilter): Promise<Prompt[]> => {
        console.log(filter);
        return [...sampleData];
    };

    const getPromptsByUser = async (userId: number): Promise<Prompt[]> => {
        return sampleData.filter(p => p.creatorId === userId);
    };

    const createPrompt = async (text: string): Promise<Prompt> => {
        const newPrompt: Prompt = {
            id: sampleData.length + 1,
            text: text,
            creatorId: 1,
            creatorName: 'TheBatman',
            creatorIconUrl: '',
            responses: 0,
            createdAt: new Date()
        };
        sampleData.push(newPrompt);
        return newPrompt;
    };

    return {
        newPrompt,
        getPromptByID,
        getPrompts,
        getPromptsByUser,
        createPrompt
    };
};

export default NewPromptRepo;