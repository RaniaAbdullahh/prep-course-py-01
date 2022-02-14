import { useState } from 'react';
import Login from './Login';
import Greeting from './Greeting';

function Home(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
   
    function handleClick(){
        // alert('you are logged in !!')
        setIsLoggedIn(!isLoggedIn);
        console.log(isLoggedIn);

        
    }
    return(
        <>
        <h1>Hello from Home </h1>
        <Login isLoggedIn={isLoggedIn} handleLogin={handleClick} />
        <Greeting isLoggedIn={isLoggedIn} />
        
       
        </>
    )
}
export default Home;

// addEventlistener('click',handleclick)
// function handleclick(e){

// }