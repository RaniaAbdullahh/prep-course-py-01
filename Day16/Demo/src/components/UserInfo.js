import Table from "./Table";

function UserInfo(props){
    // console.log(props)
    return(
        <>
        <p style={{color:props.favColor}}>my name is {props.name} </p>
        <p>My Fav Food is {props.food} </p>
        <Table data2={props.data}/>
        </>
    )
}
export default UserInfo;