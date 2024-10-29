import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const navigate = useNavigate();
    const { postId } = useParams();
    console.log(postId)

    const handleGoBack = () => {
        navigate(-1);
    }

    const { id, title, body } = post;
    return (
        <div>
            <h3>Post Details: {id}</h3>
            <h2>Tile: {title}</h2>
            <p>{body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;