package com.toyproject.todolist.dto;

import com.toyproject.todolist.entity.TodoList;
import lombok.Data;

@Data
public class ReqAddTodoDto {

    private String content;
    private int status;
    private String date;



}
