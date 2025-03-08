import { useEffect, useState } from "react";
import { Button } from "./components/ui/button";
import "./App.css";

function App() {

    const [data, setData] = useState({});
    

    useEffect(() => {
        const getData = async () => {
            let res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/data`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            res = await res.json();
            console.log(res);
            setData(res);
        };
        getData();
    }, []);

    return (
        <>
            <div>Hello world</div>
            <Button className=" ml-4">Click me</Button>
            <div>{JSON.stringify(data)}</div>
        </>
    );
}

export default App;
