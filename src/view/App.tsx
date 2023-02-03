import React from "react";
import {add} from "../utils";
import './App.scss';


export default function App() {
    const num = add(1,2);
    console.log(num);
    return <div className="warp">
        test
    </div>;
}
