
import {Link} from 'react-router-dom';
function  Heder(){//stateless component
    return(
        <>
        <nav>
            <Link to="/home">Home</Link>
           

        </nav>
        <nav>
           <Link to="/about">About</Link>
        </nav>
        </>
    )
}
export default Heder;