import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Arrow from '../../img/Vector.png';
import './Detail.css';
import Nav from '../Nav/Nav';

const Detail = () => {
    let params = useParams();
    console.log(params.id);
    
    const [beer, setBeer] = useState({});

    useEffect(() => {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/${params.id}`)
          .then((response) => response.json())
          .then((data) => setBeer(data));
      }, []);
    return ( 
        <div className="Detail-Container">
            <div className="Detail-Img-Container">
                <img src={beer.image_url}/>
            </div>
            <div className="Detail-Txt-Container">
                <h1>{beer.name}</h1>
                <p className="tagline detail-tagline">{beer.tagline}</p>
                <div className="Brewed-Ctn">
                    <div className="info-ctn">
                        <p>First brewed</p>
                        <p>{beer.first_brewed}</p>
                        </div>
                    <div className="info-ctn">
                        <p>Attenuation level:</p>
                        <p>{beer.attenuation_level}</p>
                    </div>
                </div>
                <p>{beer.description}</p>
            </div>
            <div className="Detail-GoBack-Btn">
                <div className="back-btn-container">
                    <Link to="/Overview"><img src={Arrow}/></Link>
                </div>
                <div className="space"></div>
            </div>
            <Nav />
        </div>
)}
 
export default Detail;