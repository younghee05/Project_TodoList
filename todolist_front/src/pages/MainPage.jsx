import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import Container from '../components/Container/Container';
import { mainlayout } from './style';
import axios from 'axios';
import { postTodoApi } from '../apis/todoListApi';
import { getTodoApi } from '../apis/computerApi';

function MainPage({children}) {

    const [ todo, setTodo ] = useState({
        content: "",
        status: 0,
        date: ""
    });

    const [ selectDate, setSelectDate ] = useState("");

    const [ todoList, setTodoList ] = useState([]);

    const requestTodoList = async (selectDate) => {

        try {
            const response = await axios.get(`http://localhost:8080/api/v1/todolist/${selectDate}`);
            setTodoList(response.data);
        } catch (error) {
            console.error(error);
        }
    }
 
    //조회
    const handleSelectClick = async () => {
        await requestTodoList(selectDate);
        console.log(selectDate)
    }

    const handleSelectInputChange = (e) => {
        const str = e.target.value.substr(0, 7);
        console.log(str);
        setSelectDate(str);
    }

    const handleInputChange = (e) => {
        const str = e.target.value.substr(0, 7);
        console.log(str);
        setTodo(todo => {
            return {
                ...todo,
                [e.target.name]: e.target.value
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
            <h1 css={s.h1Title}>TODOLIST</h1>
            <div css={s.mainPageInput}>
                <input css={s.dateInput} type='date' name='date' onChange={handleInputChange}/>
                <input type="text" css={s.input} name='content' value={todo.content} onChange={handleInputChange} />
                <button css={s.mainPageButton} onClick={handleAddClick}>추가</button>
                <button css={s.mainPageButton} onClick={handleSelectClick}>조회</button>
            </div>

            <div css={s.dateInputOrContainerLayout}>
                <div css={s.dateInputPosition}>
                        <input css={s.dateInput2} type='date' name='date' onChange={handleInputChange}/>
                </div>

                <div css={s.layout}>
                    <Container todoList={todoList}/>
                    <Container todoList={todoList}/>
                    <Container todoList={todoList} />
                </div>
            </div>
        </div>
            
    );
}

export default MainPage;