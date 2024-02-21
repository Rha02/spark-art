import { Prompt } from '@/lib/types';

type PromptCardProps = {
    prompt: Prompt;
}

export default function PromptCard(props: PromptCardProps) {
    return (
        <a className="" href={"/prompts/" + props.prompt.id} key={props.prompt.id}>
            <div className="px-2 py-2 rounded-lg border shadow mb-4">
                <div className="flex space-x-2 items-center">
                    <h2 className="text-lg text-gray-800">{props.prompt.text}</h2>
                    <span className="text-sm text-gray-500">{props.prompt.createdAt.toDateString()}</span>
                </div>
                <div>
                    <p>{props.prompt.responses} responses</p>
                </div>
            </div>
        </a>
    );
}