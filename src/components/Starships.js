function Starships(props) {
    
    for (const name in props.starships.data) {
        if (props.starships.data.hasOwnProperty(name[1].name))
        return {name}
    }
    return(
        <ul>
            <h1>This is a test</h1>
            <li>{props.name}</li>
            {console.log(`this is ${Object.entries(props.starships)}`)}
        </ul>
    )
}

export default Starships;