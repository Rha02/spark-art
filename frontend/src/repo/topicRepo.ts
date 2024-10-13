import { Topic } from "@/lib/models";
import { TopicRepository } from "./repository";

const NewTopicRepository = (host: string): TopicRepository => {
    console.log("TopicRepo host: " + host);

    const sampleData: Topic[] = [
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
        getTopics: async (filter) => {
            console.log(filter);
            return [...sampleData];
        },
        getTopicByID: async (id) => {
            return sampleData.find(p => p.id === id);
        },
        getTopicsByUser: async (userId) => {
            return sampleData.filter(p => p.creatorId === userId);
        },
        createTopic: async (text) => {
            const newTopic: Topic = {
                id: sampleData.length + 1,
                text: text,
                creatorId: 1,
                creatorName: 'TheBatman',
                creatorIconUrl: '',
                responses: 0,
                createdAt: new Date()
            };

            sampleData.push(newTopic);

            return newTopic;
        }
    }
}

export default NewTopicRepository;