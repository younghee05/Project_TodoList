package com.toyproject.todolist.repository;

import com.toyproject.todolist.entity.TodoList;
import org.apache.ibatis.annotations.Mapper;
import org.w3c.dom.stylesheets.LinkStyle;

import java.util.List;

@Mapper
public interface TodoListMapper {
    int save(TodoList todoList);
    int update(TodoList todoList);
    int delete(int id);
    List<TodoList> findTodoListByTodoDate(String date);
    int updateStatus(int id);
}
