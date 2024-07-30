package com.toyproject.todolist.dto;

import lombok.Builder;
import lombok.Data;


@Builder
@Data
public class RespGetTodoListDto {
        private int todoId;
        private String content;
        private int status;
        private String date;
}
