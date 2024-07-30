/** @jsxImportSource @emotion/react */
import ReactModal from "react-modal";
import * as s from "./style";

import React, { useState } from 'react';
import { getTodoListApi } from "../../apis/todoListApi";

function Container({ todoL }) {

    const [ isModalOpen, setModalOpen ] = useState(false);

    const [ todo, setTodo ] = useState({
        todoId: "",
        content: "",
        status: "",
        date: ""
    });

    const [ content, setContent ] = useState();

    const handleInputChange = (e) => {
        setContent(e.target.value);
    }

    //삭제 버튼 눌렀을 때
    const handleDeleteClick = () => {
        console.log(todoL);
    }
    
    //수정 버튼 눌렀을 때
    const handleUpdateClick = () => {
        setModalOpen(true);
    }

    const handleCancelClick = () => {
        closeModal();
    }

    const handleSubmitClick = () => {

    } 

    const closeModal = () => {
        setModalOpen(false);

    }

    return (
        <div css={s.container}>
            <ReactModal
                style={{
                    content: {
                        boxSizing: 'border-box',
                        transform: 'translate(-50%, -50%)',
                        top: '50%',
                        left: '50%',
                        padding: '20px',
                        width: '300px',
                        height: '300px',
                        backgroundColor: '#fafafa',
                    }
                }}
                isOpen={isModalOpen}
                onRequestClose={closeModal}
            >
                <div css={s.modalLayout}>
                    <h2>ToDo 수정</h2>
                    <input type="text" name="content" value={content} onChange={handleInputChange}/>
                    <div>
                        <button onClick={handleSubmitClick}>완료</button>
                        <button onClick={handleCancelClick}>취소</button>
                    </div>
                </div>
            </ReactModal>
            <div>

                <input id="check" type="checkbox" name="" />
                <label for="check ">할일</label>
                <button onClick={handleUpdateClick}>수정</button>
                <button onClick={handleDeleteClick}>삭제</button>
            </div>
        </div>
    );
}

export default Container;