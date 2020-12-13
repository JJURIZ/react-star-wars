import { Link } from 'react-router-dom';


function StarshipDetails(props) {
    const ship = props.location.state;

    return(
        <div className="ship-detail">
        <p className="detail-text">NAME: {ship.name}</p> 
        <p className="detail-text">MODEL: {ship.model}</p>
        <Link to='/'><p className="return">Return</p></Link>
        </div>
    )
}

export default StarshipDetails;