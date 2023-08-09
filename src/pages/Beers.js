// add from header+
import axios from "axios";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Beers() {
    const [beersArr, setBeersArr] = useState(null);
    const [query, setQuery] = useState("");

        useEffect(() => getBeersArr(), []);

    const getBeersArr = () => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers`)
            .then((response) => setBeersArr(response.data))
            .catch((e) =>
            console.log("Error getting the list of beers from the API", e)
            );
        };


        const searchBeer = (queryToSearch) => {
            axios
            .get(`${process.env.REACT_APP_API_URL}/search?q=${queryToSearch}`)
            .then((response) => setBeersArr(response.data))
            .catch((e) => console.log("Error getting beers from API", e));
        };

        return (
        <>
        <Header /> <br />
        <label>Search by name</label> <br />
        <input type="search" value={query} onChange={(e) => {
            setQuery(e.target.value);
            searchBeer(e.target.value);
            }}
        />
        {beersArr ? (
        beersArr.map((beerJan) => {
            return (
                    <div key={beerJan._id}>
                        <div>
                            {beerJan.image_url && (<Link to={`/beers/${beerJan._id}`}><img src={beerJan.image_url} alt={beerJan.name} /></Link>)}
                        </div>
                        <div>
                            <h1>{beerJan.name}</h1>
                            <h2>{beerJan.tagline}</h2>
                            <p>Created by: {beerJan.contributed_by}</p>
                            <Link to={`/beers/${beerJan._id}`}>Details</Link>
                            <hr />
                        </div>
                    </div>
                );
            })
            ) : (
            <p>Loading...</p>
            )}
        </>
        );
    }

    export default Beers;