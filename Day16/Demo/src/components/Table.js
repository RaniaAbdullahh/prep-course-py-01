function Table(props) {
    console.log(props)
  return (
    <>
    <h1>this is table Info</h1>
      <table>
        <tr>
          <th>Name</th>
          <th>Image</th>
          <th>Rank</th>
        </tr>
        {
            props.data2.map(meme=>{
                return(
                    <>
                    <tr>
                        <td>{meme.name}</td>
                        <td>{meme.image}</td>
                        <td>{meme.rank}</td>
                    </tr>
                    </>
                )

            })
        }
      </table>
    </>
  );
}

export default Table;
