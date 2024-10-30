import {useState} from "react";

export const useShowTotal = () => {
    const [showTotal, setShowTotal] = useState<boolean>(false);
    return {
        showTotal, 
        setShowTotal
    };  
}