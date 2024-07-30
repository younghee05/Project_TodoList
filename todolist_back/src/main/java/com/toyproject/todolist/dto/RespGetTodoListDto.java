package com.toyproject.todolist.dto;

import com.toyproject.todolist.entity.TodoList;
import lombok.Builder;
import lombok.Data;

import java.util.List;
import java.util.stream.Collectors;

public class RespGetTodoListDto {

    @Builder
    @Data
    public static class Info {
        private int todoId;
        private String content;
        private String date;
    }

    public static List<Info> toList(List<TodoList> todoList) {
        return todoList.stream().map(TodoList::toDto).collect(Collectors.toList());
    }
}
