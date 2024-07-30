/** @jsxImportSource @emotion/react */
import ReactModal from "react-modal";
import * as s from "./style";

import React, { useState } from 'react';
import axios from "axios";
import api from "../../apis/instance";

function Container(props) {

    const [ isModalOpen, setModalOpen ] = useState(false);

    const [ content, setContent ] = useState();

    const handleInputChange = (e) => {
        setContent(e.target.value);
    }

    //삭제 버튼 눌렀을 때
    const handleDeleteClick = async (todoId) => {
        if(window.confirm("삭제하시겠습니까?")) {
            await requestDeleteTodo(todoId);
            alert("삭제완료");
        }
    }

    const requestDeleteTodo = async (todoId) => {
        let responseData = null;

        try {
            const response = await api.delete(`/todo/${todoId}`);
            responseData = response.data;
        } catch (e) {
            console.error(e);
        }
        return responseData;
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

            <div css={s.titleBox}>
                <h2 css={s.h2Title}>제목</h2>
            </div>
            <div css={s.listLayout}>
                <input id="check" type="checkbox" name="" />
                <label css={s.checkList} for="check">할일</label>
                <button css={s.updateButton} onClick={handleUpdateClick}>수정</button>
                <button css={s.deleteButton} onClick={handleDeleteClick}>삭제</button>
            </div>
        </div>
    );
}

export default Container;