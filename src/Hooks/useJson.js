import { useEffect, useState } from "react"


const useJson = (FileName) => {
    const [data, setData] = useState([]);
    const url = `${FileName}.json`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(result => setData(result))
    }, [])

    return [data, setData];
}
export default useJson;