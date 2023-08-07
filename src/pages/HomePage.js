import { Link } from "react-router-dom";
import beersImg from "../assets/beers.png"
import randomBeer from "../assets/random-beer.png"
import newBeer from "../assets/new-beer.png"

function HomePage() {
    return (
        <div className="home-page">
            <div>
                    <img className="home-img" src={beersImg} alt="beers" /> <br />
                    <Link className="link-name" to="/beer">All Beers </Link>
                    <p className="home-page-p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe autem
                    numquam molestiae odit, atque quaerat dolor quisquam eligendi voluptas
                    alias quo deleniti, accusantium, quis commodi! Eveniet eligendi alias
                    corporis id.
                    </p>
            </div>

            <div>
                    <img className="home-img" src={randomBeer} alt="beers" /> <br />
                    <Link className="link-name" to="/random-beer">Random Beer</Link>
                    <p className="home-page-p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe autem
                    numquam molestiae odit, atque quaerat dolor quisquam eligendi voluptas
                    alias quo deleniti, accusantium, quis commodi! Eveniet eligendi alias
                    corporis id.
                    </p>
            </div>

            <div>
                    <img className="home-img" src={newBeer} alt="beers" /> <br />
                    <Link className="link-name" to="/new-beer">New Beer</Link>
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