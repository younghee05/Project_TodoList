package com.toyproject.todolist.controller;

import com.toyproject.todolist.dto.ReqAddTodoDto;
import com.toyproject.todolist.dto.ReqGetTodoListDto;
import com.toyproject.todolist.dto.ReqUpdateTodoDto;
import com.toyproject.todolist.service.TodoListService;
import com.toyproject.todolist.service.TodoListimpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@CrossOrigin
@RestController
@RequestMapping("/api/v1")
public class TodoListController {

    private TodoListService todoListService;

    @Autowired
    TodoListimpl todoListimpl;

    @PostMapping("/todo")
    public ResponseEntity<?> todoListAdd(@RequestBody ReqAddTodoDto reqAddToDoDto) {
        log.info(reqAddToDoDto.toString());
        return ResponseEntity.ok().body(todoListService.addTodo(reqAddToDoDto));
    }

    @PutMapping("/todo/{todoId}")
    public ResponseEntity<?> todoListUpdate(@RequestBody ReqUpdateTodoDto reqUpdateTodoDto) {
        return ResponseEntity.ok().body(null);
    }

    @DeleteMapping("/todo/{todoId}")
    public ResponseEntity<?> todoListDelete(@PathVariable int todoId) {
        return ResponseEntity.ok().body(todoListimpl.deleteTodo(todoId));
    }

    @GetMapping("/todolist/{todoDate}")
    public ResponseEntity<?> getTodoListAll(@PathVariable String todoDate) {
        return ResponseEntity.ok().body(todoListimpl.getTodoList());
    }

    @PutMapping("/todo/{todoId}/status")
    public ResponseEntity<?> todoChecked(@PathVariable int todoId) {
        return ResponseEntity.ok().body(todoListimpl.checkedTodo(todoId));
    }





}

