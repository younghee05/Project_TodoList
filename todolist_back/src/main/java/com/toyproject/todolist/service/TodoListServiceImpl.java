package com.toyproject.todolist.service;

import com.toyproject.todolist.dto.ReqAddTodoDto;
import com.toyproject.todolist.dto.ReqUpdateTodoDto;
import com.toyproject.todolist.dto.RespGetTodoListDto;
import com.toyproject.todolist.entity.TodoList;
import com.toyproject.todolist.repository.TodoListMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TodoListServiceImpl implements TodoListService {

    @Autowired
    private TodoListMapper todoListMapper;

    @Override
    public int addTodo(ReqAddTodoDto reqAddTodoDto) {
        TodoList todo = TodoList.builder()
                .content(reqAddTodoDto.getContent())
                .status(reqAddTodoDto.getStatus())
                .date(reqAddTodoDto.getDate())
                .build();
        return todoListMapper.save(todo);
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
    public List<RespGetTodoListDto> getTodoList(String date) {
        List<RespGetTodoListDto> list = new ArrayList<>();
        List<TodoList> tdl = todoListMapper.findTodoListByTodoDate(date);
        for(TodoList todo : tdl) {
            RespGetTodoListDto dto = RespGetTodoListDto.builder()
                    .todoId(todo.getTodoId())
                    .content(todo.getContent())
                    .status(todo.getStatus())
                    .date(todo.getDate())
                    .build();
            list.add(dto);
        }
        return list;
    }

    @Override
    public int checkedTodo(int todoId) {
        return todoListMapper.updateStatus(todoId);

    }
}
