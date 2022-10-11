import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Details from '../../Components/Detail/Detail';
import './Overview.css';

const Overview = (beer) => {
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        fetch("https://ih-beers-api2.herokuapp.com/beers")
          .then((response) => response.json())
          .then((data) => setBeers(data));
      }, []);
    return ( 
        <div className="Overview-Page">
            {beers.map((beer) => (
                <div key={beer._id} className="OV-Container">
                <div className="Overview-Container">
                    <div className="Overview-Img-Container">
                        <img src={beer.image_url}/>
                    </div>
                    <div className="Overview-Txt-Container">
                        <h1>{beer.name}</h1>
                        <p className="tagline">{beer.tagline}</p>
                        <p>{beer.contributed_by}</p>
                        <Link to={`/${beer._id}`}>Details</Link>
                    </div>
                </div>
                <div className="line"></div>       
                </div>
            ))}
        </div>
     );
}
 
export default Overview
