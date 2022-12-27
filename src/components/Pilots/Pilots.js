import { useState, useEffect } from "react";
import axios from "axios";

function Pilots({ url }) {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get(url)
            .then(response => setData(response.data))
            .catch(error => setError(error));
    }, [url]);

    if (error) return `Error: ${error.message}`;

    // console.log(data);

    return (
        <>
            <p>{data.name}</p>
        </>
    );
}

export default Pilots;