import React, { useState } from "react";
import "./Autocomplete.css";

const Autocomplete = () => {
    const [data, setdata] = useState([
        "randry",
        "san",
        "santatra",
        "Sitraka",
        "Test"
    ]);

    const [sugestion, setSugestion] = useState([]);
    const [key, setKey] = useState("")

    const handleChange = (value) => {
        setKey(value);
        if(value) {
            setSugestion(
                data.filter((item) => {
                    return item.includes(value);
                })
            );
        } else {
            setSugestion([]);
        }
    }

    const handleSelect = (value) => {
        setKey(value);
        setSugestion([]);
    }
    return (
        <div className="Autocomplete">
            <div>
                <input className="input" type="text" value={key} onChange={(e) => {handleChange(e.target.value)}}/>
            </div>
            <div>
                <ul>
                    {sugestion.map((item, index) => {
                        return <li onClick={(e) => {handleSelect(item)}} key={index}>{item}</li>;
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Autocomplete;
