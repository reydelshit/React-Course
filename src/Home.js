import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const {data, isPending, error} = useFetch('./data/database.json')

    return (
        <div className="home">
            {error && <div> {error}</div>}
            {isPending && <div>Loading...</div>}
            {data && <BlogList blogs={data} title="Blog" />}
        </div>
     );
}
 
export default Home;