import { useEffect } from "react";

export default function Counter ({count}){

    useEffect(()=>{
        document.title = `Count: ${count}`;
    }, [count]);
    return(
        <h1>Couter: {count}</h1>
    )
}