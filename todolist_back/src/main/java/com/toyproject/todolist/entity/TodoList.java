package com.toyproject.todolist.entity;

import com.toyproject.todolist.dto.RespGetTodoListDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Builder
@AllArgsConstructor
@Data
@NoArgsConstructor
public class TodoList {
    private int todoId;
    private String content;
    private int status;
    private String date;
}
