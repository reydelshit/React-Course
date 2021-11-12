import { useHistory, useParams } from "react-router-dom";
import useFetch from './useFetch'


const BlogDetails = () => {
    const { id } = useParams()
    const { data: blog, error, isPending} = useFetch('https://api.npoint.io/3958194093f3495eb056/' + id)
    const history = useHistory();

    const handleDelete= () => {
        fetch('https://api.npoint.io/3958194093f3495eb056/' + blog.id,{
            method: 'DELETE'
        }).then(() => {
            history.push('/')
        })
    }
    return ( 
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div>}
            { blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by { blog.author }</p>
                    <div>{blog.body}</div>
                    <p>yow</p>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails; 