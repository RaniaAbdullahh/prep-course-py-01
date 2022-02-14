function Greeting(props){

    return (
        <>
        {props.isLoggedIn ? <p>You loggedIn successfully !!</p> : <p>please Login!!</p>}

        </>
    )
}

export default Greeting;



// {condition ? <h1>Hello</h1> : <h1>Bye</h1>}