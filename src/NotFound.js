import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>404 Not Found</h2>
            <p>bitch stfu</p>
            <Link to="/">Go back to home</Link>
        </div>
     );
}
 
export default NotFound;