import { useEffect, useState } from "react";

const useAllData = () => {
    const [data, setData] = useState([[]]);
    useEffect(() => {
        fetch("/commands.json")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            });
    }, []);
    return [data];
};

export default useAllData;