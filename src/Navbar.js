import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 

        <nav className="navbar">
            <h1>Reydel Ocon</h1>
            <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/create" style={{
                color: 'white',
                backgroundColor: '#f1356d',
                borderRadius: '10px',
                padding: '10px'
            }}>new blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;