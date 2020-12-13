function Starships(props) {
    const starshipList = props.starships.map((ship, idx) => {
        return <li key={idx}>{ship.name}</li>
    })
    return(
        <ul>
            <h1>This is a test</h1>
            <li>{starshipList}</li>
        </ul>
    )
}

export default Starships;