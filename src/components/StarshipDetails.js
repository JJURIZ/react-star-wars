import { Link } from 'react-router-dom';


function StarshipDetails(props) {
    const ship = props.location.state;

    return(
        <div>
        <p>NAME: {ship.name}</p> 
        <p>MODEL: {ship.model}</p>
        <Link to='/'>Return</Link>
        </div>
    )
}

export default StarshipDetails;