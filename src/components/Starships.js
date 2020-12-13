import { Link } from 'react-router-dom'

function Starships(props) {
    const starshipList = props.starships.map((ship, idx) => {
        return <div className="ship-item"><p className="ship-text" key={idx}><Link to={{pathname: '/starship', state: ship}} key={ship.name}>{ship.name}</Link></p></div>
    })
    
    return(
        <div className="ship-container">
            {starshipList}
        </div>
    )
}

export default Starships;