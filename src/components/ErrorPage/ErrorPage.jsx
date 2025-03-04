import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div>
            <h1>OopS!!!!!</h1>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h3>Page Not found</h3>
                    <p>Go back to Homepage</p>
                    <Link to='/'>
                        <button>Go Back</button>
                    </Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;