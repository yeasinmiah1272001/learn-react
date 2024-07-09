import { useEffect, useState } from "react";


const usePremium = () => {
    const [premiumData, setPremiumData] = useState([[]]);
    useEffect(() => {
        fetch("/premium.json")
            .then((res) => res.json())
            .then((data) => {
                setPremiumData(data);
            });
    }, []);
    return [premiumData];
};

export default usePremium;