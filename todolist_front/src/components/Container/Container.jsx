/** @jsxImportSource @emotion/react */
import * as s from "./style";

import React, { useState } from 'react';

function Container(props) {

    const [ content, setContent ] = useState();

    const handleDeleteClick = () => {

    }
    
    const handleUpdateClick = () => {

    }


    return (
        <div css={s.container}>
            <div>
                <input id="check" type="checkbox" name="" />
                <label for="check">할일</label>
                <button onClick={handleUpdateClick}>수정</button>
                <button onClick={handleDeleteClick}>삭제</button>
            </div>
        </div>
    );
}

export default Container;