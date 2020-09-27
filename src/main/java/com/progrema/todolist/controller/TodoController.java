package com.progrema.todolist.controller;

import com.progrema.todolist.db.notes.Todo;
import com.progrema.todolist.db.notes.TodoRepository;
import com.progrema.todolist.exception.EntryNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TodoController {

    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    private final TodoRepository repository;

    @Autowired
    TodoController(TodoRepository repository) {
        this.repository = repository;
    }

    // ------------------------------------------------
    // Aggregate Root
    // ------------------------------------------------

    @GetMapping("/api/todos")
    List<Todo> getTodos() {
        logger.info("getTodos");
        return repository.findAll();
    }

    @PostMapping("/api/todos")
    Todo createTodo(@RequestBody Todo newTodo) {
        newTodo.setStatus("incompleted");
        newTodo.setTimestamp("2020/09/27");
        logger.info("createTodo: " + newTodo);
        return repository.save(newTodo);
    }

    // ------------------------------------------------
    // Single item
    // ------------------------------------------------

    @GetMapping("/api/todos/{id}")
    Todo fetchTodoById(@PathVariable Long id) {
        logger.info("fetchTodoById: " + id);
        return repository.findById(id).orElseThrow((() -> new EntryNotFoundException(id)));
    }

    @DeleteMapping("/api/todos/{id}")
    void deleteTodoById(@PathVariable Long id) {
        logger.info("deleteTodoById: " + id);
        repository.deleteById(id);
    }

}
