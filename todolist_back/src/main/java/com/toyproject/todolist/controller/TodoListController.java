package com.toyproject.todolist.controller;

import com.toyproject.todolist.dto.ReqAddTodoDto;
import com.toyproject.todolist.dto.ReqGetTodoListDto;
import com.toyproject.todolist.dto.ReqUpdateTodoDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@CrossOrigin
@RequestMapping("/api/v1")
public class TodoListController {


    @PostMapping("/todo")
    public ResponseEntity<?> todoListAdd(@RequestBody ReqAddTodoDto reqAddToDoDto) {
        return ResponseEntity.ok().body(null);
    }

    @PutMapping("/todo/{todoId}")
    public ResponseEntity<?> todoListUpdate(@RequestBody ReqUpdateTodoDto reqUpdateTodoDto) {
        return ResponseEntity.ok().body(null);
    }

    @DeleteMapping("/todo/{todoId}")
    public ResponseEntity<?> todoListDelete(@PathVariable int todoId) {
        return ResponseEntity.ok().body(null);
    }

    @GetMapping("/todolist/{todoDate}")
    public ResponseEntity<?> getTodoListAll(@PathVariable String todoDate) {
        return ResponseEntity.ok().body(null);
    }

    @PutMapping("/todo/{todoId}/status")
    public ResponseEntity<?> todoChecked(@PathVariable int todoId) {
        return ResponseEntity.ok().body(null);
    }





}

