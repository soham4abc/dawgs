import {useState, useEffect} from 'react';


const CONTEXT_KEY = "9ec571f86697d07ac";

const UseGoogleSearch = (term) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyDYn-WgxFJ6mEx4fdqQsfQhk97e-jf7Rrk&cx=f755aa3df881a8474&q=${term}`)
                .then(response => response.json())
                .then(result => {
                    setData(result)
                })
        }

        fetchData().then(res => {
            console.log(res);
        }).catch(error => {
            console.log(error);
        });
    }, [term])

    return {data};
};

export default UseGoogleSearch;
