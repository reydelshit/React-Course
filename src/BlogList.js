import { Link } from 'react-router-dom';

const BlogList = (props) => {

    const blog = props.blogs
    const title = props.title
    // props: {blogs, title}

    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
            {blog.map((ehy) => (
                <div className="blog-preview" key={ehy.id}>
                    <Link to={`/blogs/${ehy.id}`}><h2>{ehy.title}</h2></Link>
                   <p>Written by {ehy.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;