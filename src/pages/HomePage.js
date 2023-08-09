import { Link } from "react-router-dom";
import beersImg from "../assets/beers.png"
import randomBeer from "../assets/random-beer.png"
import newBeer from "../assets/new-beer.png"



function HomePage() {
    return (

            <div >
                <div>
                    <Link to="/beers" className="link-name">
                        <img className="home-img" src={beersImg} alt="beers" />
                        <br/>
                        <br/>
                        <span className="link-name">All Beers </span>
                    </Link>
                    <p className="home-page-p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe autem
                    numquam molestiae odit, atque quaerat dolor quisquam eligendi voluptas
                    alias quo deleniti, accusantium, quis commodi! Eveniet eligendi alias
                    corporis id.
                    </p>
                </div>

                <div>
                    <Link to="/RandomBeer" className="link-name">
                        <img className="home-img" src={randomBeer} alt="RandomBeer" />
                        <br/>
                        <br/>
                        <span className="link-name">Random Beer </span>
                    </Link>
                    <p className="home-page-p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe autem
                    numquam molestiae odit, atque quaerat dolor quisquam eligendi voluptas
                    alias quo deleniti, accusantium, quis commodi! Eveniet eligendi alias
                    corporis id.
                    </p>
                </div>

                <div >
                    <Link to="/NewBeer" className="link-name">
                        <img className="home-img" src={newBeer} alt="NewBeer" />
                        <br/>
                        <br/>
                        <span className="link-name">New Beers </span>
                    </Link>
                        <p className="home-page-p">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe autem
                        numquam molestiae odit, atque quaerat dolor quisquam eligendi voluptas
                        alias quo deleniti, accusantium, quis commodi! Eveniet eligendi alias
                        corporis id.
                        </p>
                </div>

            </div>

    );
    }

export default HomePage;
