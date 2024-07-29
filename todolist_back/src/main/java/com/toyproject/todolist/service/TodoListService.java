package com.toyproject.todolist.service;

import com.toyproject.todolist.dto.ReqAddTodoDto;
import com.toyproject.todolist.dto.ReqUpdateTodoDto;

import java.util.List;

public interface TodoListService {
    int addTodo(ReqAddTodoDto reqAddTodoDto);
    int updateTodo(ReqUpdateTodoDto reqUpdateTodoDto);
    int deleteTodo(int todoId);
    List<?> getTodoList(String todoDate);
    int checkedTodo(int todoId);

}
