package com.toyproject.todolist.service;

import com.toyproject.todolist.dto.ReqAddTodoDto;
import com.toyproject.todolist.dto.ReqGetTodoListDto;
import com.toyproject.todolist.dto.ReqUpdateTodoDto;
import com.toyproject.todolist.dto.RespGetTodoListDto;
import com.toyproject.todolist.entity.TodoList;
import com.toyproject.todolist.repository.TodoListMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoListimpl implements TodoListService {

    @Autowired
    private TodoListMapper todoListMapper;

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
    public List<RespGetTodoListDto.Info> getTodoList() {
        return RespGetTodoListDto.toList(todoListMapper.findTodoListByTodoDate());
    }

    @Override
    public int checkedTodo(int todoId) {
        return 0;
    }
}
