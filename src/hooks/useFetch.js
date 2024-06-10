import { useState, useCallback} from "react";
import axios from "axios";



const usefetch = () => {

    const [apiRes, setApiRes] = useState(``);
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const getApiRes = useCallback (async (url) => {
        try {
            const res = await axios.get(url);
            setApiRes(res.data);
            setHasError(false);
        } catch (err) {
            setHasError(true);
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    });
    

    return [apiRes, getApiRes, hasError, isLoading]
}


export default usefetch;