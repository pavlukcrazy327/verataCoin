'use client';

import React, { useState } from "react";
import "./TextInput1.scss";

export default function TextInput1(props: any) {
    const [isEmpty, setIsEmpty] = useState(true);
    const [value, setValue] = useState("")

    const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    }
    const handleFocus = (e: any) => {
        setIsEmpty(false);
    }
    const handleBlur = (e: any) => {
        setIsEmpty(e.currentTarget.innerText === '');
    }

    return (
        <div contentEditable="true" 
            className="textinput-1 items-center"
            suppressContentEditableWarning={true}
            onInput={handleInput}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={{...(props.style ?? {})}}
        >
            { isEmpty && <>
                {props.icon && <div className="icon"><props.icon /></div>}
                <span className="placeholder">{props.placeholder}</span>
            </>}
        </div>
    )
}