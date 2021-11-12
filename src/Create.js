import { useState } from "react";
import { useHistory} from "react-router-dom"

const Create = () => {

    const [ title, setTitle] = useState('');
    const [ body, setBody] = useState('');
    const [ author, setAuthor] = useState('');
    const [ isPending, setIspending] = useState(false);
    const history = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author}

        setIspending(true)
        
        fetch('https://api.npoint.io/3958194093f3495eb056', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(blog)

        }).then(() => {
            setIspending(false)
            history.push('/')
        })
    }

    return ( 
       <div className="create">
           <h2>HEHEHHEHE</h2>
           <form onSubmit={handleSubmit}>
               <label>Title</label>
               <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}/>
               <label>Message</label>
               <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>
               <label>Author</label>
               <input type="text" required value={author} onChange={(e) => setAuthor(e.target.value)}/>
               { !isPending && <button >Add blog</button>}
               { isPending && <button >Adding blog..</button>}
           </form>
       </div>
     );
}
 
export default Create; 