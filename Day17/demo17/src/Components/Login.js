function Login(props){
    console.log(props);
    if(props.isLoggedIn){//T
        

        return (

            <>
             <button onClick={props.handleLogin}>LogOut </button> 
            
             
            </>
        )

    }else{//f

        return (
    
            <>
             <button onClick={props.handleLogin}>LogIn </button>
             
            </>
        )
    }
}
export default Login;