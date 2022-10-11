import React, {useId} from "react";
import {add, subtraction} from "../utils";

export default function App() {
    const num = add(1, 2);
    const sub = subtraction(5, 1);
    const id = useId();
    const b = "sss";
    console.log(b);
}
