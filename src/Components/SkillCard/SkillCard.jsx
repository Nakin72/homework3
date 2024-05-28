import "./SkillCard.scss"
import UniversalButton from "../UniversalButton/UniversalButton";
import { useState } from "react";
import { useCallback } from 'react'
import React from 'react'


function SkillCard({ skillNameText, skillDescription, removeCallback }) {
    const [skillDigit, setCount] = useState(0);
    const [remove, setRemove] = useState(false);

    return (
        <div className="skillCard">
            <div className="topPart">
                <UniversalButton
                    b_name="remove"
                    size="small"
                    color="primary"
                    onClick={removeCallback} // Ensure this is correctly bound to the removeCallback prop
                >
                    x
                </UniversalButton>
            </div>
            <div className="nameLevel">
                <h1 className="skillName">{skillNameText}</h1> {/* Corrected here */}
                <div className="skillLevel">
                    <UniversalButton b_name="sminus" size="small" color="primary" onClick={() => { if (skillDigit > 0) { setCount(skillDigit - 5); } }}>
                        -
                    </UniversalButton>
                    <h1 className="skillDigittext">{skillDigit}%</h1>
                    <UniversalButton b_name="splus" size="small" color="primary" onClick={() => { if (skillDigit < 100) { setCount(skillDigit + 5); } }}>
                        +
                    </UniversalButton>
                </div>
            </div>
            <h1 className="skillDescription">{skillDescription}</h1>
        </div >
    );

};





export default SkillCard