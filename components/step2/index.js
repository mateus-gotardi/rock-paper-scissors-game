import { Step2Styles } from "./styles";
import { Cell, colors } from '..'
import { useState } from "react";

export default function Step2({ choose }) {
    const  [w, setW] = useState(window.innerWidth);
    return (
        <Step2Styles colors={colors}>
            <div className="showChoose">
                <h2>YOU PICKED</h2>
                <Cell width={ w>450? 13: 10 } element={choose}></Cell>
            </div>
            <div className="showChoose">
                <h2>THE HOUSE PICKED</h2>
                <div className="placeHolder"><div></div></div>
            </div>

        </Step2Styles>
    )
}