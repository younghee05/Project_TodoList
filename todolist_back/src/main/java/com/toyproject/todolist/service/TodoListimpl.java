package com.toyproject.todolist.service;

import com.toyproject.todolist.dto.ReqAddTodoDto;
import com.toyproject.todolist.dto.ReqUpdateTodoDto;
import com.toyproject.todolist.repository.TodoListMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoListimpl implements TodoListService {

    @Autowired
    TodoListMapper todoListMapper;

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
        return todoListMapper.delete(todoId);
    }

    @Override
    public List<?> getTodoList(String todoDate) {
        return List.of();
    }

    @Override
    public int checkedTodo(int todoId) {
        return todoListMapper.updateStatus(todoId);
    }
}
