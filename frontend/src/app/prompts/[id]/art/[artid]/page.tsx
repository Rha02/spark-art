export default function Prompt({ params }: { params: { id: string, artid: string}}) {
    return (
        <div>
            This is an art with id: {params.artid}
            <br />
            For a prompt with ID: {params.id}
        </div>
    );
}