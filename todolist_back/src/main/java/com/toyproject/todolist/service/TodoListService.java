package com.toyproject.todolist.service;

import com.toyproject.todolist.dto.ReqAddTodoDto;
import com.toyproject.todolist.dto.ReqGetTodoListDto;
import com.toyproject.todolist.dto.ReqUpdateTodoDto;
import com.toyproject.todolist.dto.RespGetTodoListDto;

import java.util.List;

public interface TodoListService {
    int addTodo(ReqAddTodoDto reqAddTodoDto);
    int updateTodo(ReqUpdateTodoDto reqUpdateTodoDto);
    int deleteTodo(int todoId);
    List<RespGetTodoListDto.Info> getTodoList();
    int checkedTodo(int todoId);

}
