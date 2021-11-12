import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const {data, isPending, error} = useFetch('https://api.npoint.io/3958194093f3495eb056')

    return (
        <div className="home">
            {error && <div> {error}</div>}
            {isPending && <div>Loading...</div>}
            {data && <BlogList blogs={data} title="Blog" />}
        </div>
     );
}
 
export default Home;