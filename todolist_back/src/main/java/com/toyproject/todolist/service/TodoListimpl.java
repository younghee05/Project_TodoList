package com.toyproject.todolist.service;

import com.toyproject.todolist.dto.ReqAddTodoDto;
import com.toyproject.todolist.dto.ReqUpdateTodoDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoListimpl implements TodoListService {

    @Override
    public int addTodo(ReqAddTodoDto reqAddTodoDto) {
        return 0;
    }

    @Override
    public int updateTodo(ReqUpdateTodoDto reqUpdateTodoDto) {
        return 0;
    }

    @Override
    public int deleteTodo(int todoId) {
        return 0;
    }

    @Override
    public List<?> getTodoList(String todoDate) {
        return List.of();
    }

    @Override
    public int checkedTodo(int todoId) {
        return 0;
    }
}
