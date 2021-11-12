import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = (props) => {

    const blogs = props.blogs
    const title = props.title

    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((ehy) => (
                <div className="blog-preview" key={ehy.id}>
                    <Link to={`/blogs/${ehy.id}`}><h2>{ehy.title}</h2></Link>
                   <p>Written by {ehy.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;