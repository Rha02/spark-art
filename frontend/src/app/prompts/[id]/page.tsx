export default function Prompt({ params }: { params: { id: string }}) {
    return (
        <div>
            This is a Prompt with ID: {params.id}
            <br />
            TODO: Create Individual Prompt Page
        </div>
    );
}