import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import Container from '../components/Container/Container';
import { mainlayout } from './style';

function MainPage({children}) {

    const [ content, setContent ] = useState({
        content: ""
    });

    const dateControl = document.querySelector('input[type="date"]')

    const handleInputChange = (e) => {
        setContent(content => {
            return {
                ...content,
                [e.target.name]: e.target.value
            }
        });
    }

    const handleAddClick = (e) => {
        console.log(dateControl.value);
        console.log(content);
    }

    return (
        <div css={s.mainlayout}>
            <h1>TODOLIST</h1>
            <div>
                <input type="text" name='content' value={content.content} onChange={handleInputChange} />
                <button onClick={handleAddClick}>추가</button>
                <input type="date" />
            </div>
            
            <div css={s.layout}>
                <Container />
                <Container />
                <Container />
            </div>
        </div>
            
    );
}

export default MainPage;