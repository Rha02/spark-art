import { Prompt } from "@/lib/models";
import { PromptRepository } from "./repository";

const NewPromptRepository = (host: string): PromptRepository => {
    console.log("PromptRepo host: " + host);

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

    return {
        getPrompts: async (filter) => {
            console.log(filter);
            return [...sampleData];
        },
        getPromptByID: async (id) => {
            return sampleData.find(p => p.id === id);
        },
        getPromptsByUser: async (userId) => {
            return sampleData.filter(p => p.creatorId === userId);
        },
        createPrompt: async (text) => {
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
        }
    }
}

export default NewPromptRepository;