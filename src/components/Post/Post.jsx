import { Link, useNavigate } from "react-router-dom";


const Post = ({ post }) => {
    const { id, title } = post;

    const navigate = useNavigate();

    const postStyle = {
        border: '2px solid red',
        padding: '10px',
        borderRadius: '10px',
        margin: '20px',
    }

    const handleShowDetails = () => {
        // console.log('Button CLicked')
        navigate(`/post/${id}`)
    }

    return (
        <div style={postStyle}>
            <h3>ID of Post: {id}</h3>
            <p>Title: {title}</p>
            <Link to={`/post/${id}`}>
                <button>Post Details</button>
            </Link>

            <button onClick={handleShowDetails}>Click to See Details</button>
        </div>
    );
};

export default Post;