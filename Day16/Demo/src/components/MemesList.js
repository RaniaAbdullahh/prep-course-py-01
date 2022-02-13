function MemesList(props){
    // console.log(props)
    return(
        <>
        {
            props.data.map(meme=>{
                return(
                    <>
                    <h1>Name : {meme.name} </h1>
                    <img src={meme.image}/>
                    <p> Rank : {meme.rank} </p>
                    <p>Text :{meme.bottomText} </p>

                    </>



                );
            })
        }
          
        </>
        
            
    );
}

export default MemesList;