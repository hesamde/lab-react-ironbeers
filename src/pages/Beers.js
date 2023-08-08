// add from header+
import axios from "axios";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Beers() {
    const [beersArr, setBeersArr] = useState(null);

        useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/`)
            .then((response) => setBeersArr(response.data))
            .catch((e) =>
            console.log("Error getting the list of beers from the API", e)
            );
        }, []);

        return (
        <>
            <Header />
            {beersArr ? (beersArr.map((beerJan) => {
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