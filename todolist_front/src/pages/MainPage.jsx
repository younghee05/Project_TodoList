import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import Container from '../components/Container/Container';
import { mainlayout } from './style';
import axios from 'axios';
import { postTodoApi } from '../apis/todoListApi';

function MainPage({children}) {

    const [ todo, setTodo ] = useState({
        content: "",
        status: 0,
        date: ""
    });

    const handleInputChange = (e) => {

        setTodo(todo => {
            return {
                ...todo,
                [e.target.name]: e.target.value,
            }
        });
    }

    const handleAddClick = async() => {
        console.log(todo);
        const response = await postTodoApi(todo);
        // try {
           
        //     // const data = await axios.post("http://localhost:8080/api/v1/todo", todo);
        //     console.log(response);
        // } catch (error) {
        //     console.error(error);
        // }

        console.log(response)
        
       
        setTodo({
            content: "",
            status: 0,
            date: ""
        });
        
    }

    return (
        <div css={s.mainlayout}>
            <h1>TODOLIST</h1>
            <div css={s.mainPageInput}>
                <input type="text" css={s.input} name='content' value={todo.content} onChange={handleInputChange} />
                <button css={s.mainPageButton} onClick={handleAddClick}>추가</button>
                <input type='date' name='date' onChange={handleInputChange}/>
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