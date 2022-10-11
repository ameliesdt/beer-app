import './Home.css';
import { Link } from "react-router-dom";
import allBeers from '../../img/allBeers.png'
import randomBeers from'../../img/randomBeers.png';

const Home = () => {
    return ( 
        <main className="Home-Container">        
            <div className="Home-Card">
                <div className="Img-Container">
                    <img src={allBeers}/>
                </div>
                <div className="Home-Btn">
                     <Link to="/Overview">All Beers</Link>
               </div>
               <div className="Txt-Container">
                  <p className="Home-Txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis. </p>
               </div>
            </div>

            <div className="Home-Card">
                <div className="Img-Container">
                    <img src={randomBeers}/>
                </div>
                <div className="Home-Btn">
                     <Link to="/RandomBeer">Random Beer</Link>
               </div>
                <div className="Txt-Container">
                  <p className="Home-Txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis. </p>
                </div>
             </div>
        </main>
     );
}
 
export default Home;