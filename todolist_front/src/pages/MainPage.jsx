import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import Container from '../components/Container/Container';
import { mainlayout } from './style';

function MainPage({children}) {
    return (
        <div css={s.mainlayout}>
            <h1>TODOLIST</h1>
            <div>
                <input type="text" />
                <button>추가</button>
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