import { Prompt } from "@/lib/types";

type promptRepo = {
    getPrompts: () => Promise<Prompt[]>;
    createPrompt: (text: string) => Promise<Prompt>;
}

const NewPromptRepo = (host: string): promptRepo => {
    console.log('prompt host: ', host);

    const sampleData: Prompt[] = [
        {
            id: 1,
            text: 'Apple tree on a hill',
            creatorId: 1,
            responses: 5,
            createdAt: new Date()
        },
        {
            id: 2,
            text: 'Cat with a box on top of it, with eyes, paws, and tail showing',
            creatorId: 1,
            responses: 2,
            createdAt: new Date()
        },
        {
            id: 3,
            text: 'Batman fighting the Joker in a dark alleyway',
            creatorId: 1,
            responses: 3,
            createdAt: new Date()
        }
    ];

    const getPrompts = async (): Promise<Prompt[]> => {
        return sampleData;
    };

    const createPrompt = async (text: string): Promise<Prompt> => {
        const newPrompt: Prompt = {
            id: sampleData.length + 1,
            text: text,
            creatorId: 1,
            responses: 0,
            createdAt: new Date()
        };
        sampleData.push(newPrompt);
        return newPrompt;
    };

    return {
        getPrompts,
        createPrompt
    };
};

export default NewPromptRepo;