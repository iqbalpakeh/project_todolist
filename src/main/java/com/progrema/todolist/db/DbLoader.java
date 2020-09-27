package com.progrema.todolist.db;

import com.progrema.todolist.db.notes.Todo;
import com.progrema.todolist.db.notes.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DbLoader implements CommandLineRunner {

    private final TodoRepository todoRepository;

    @Autowired
    public DbLoader(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        this.todoRepository.save(new Todo("This is todo item A", "2020/09/17", "incompleted"));
        this.todoRepository.save(new Todo("This is todo item B", "2020/09/18", "incompleted"));
        this.todoRepository.save(new Todo("This is todo item C", "2020/09/19","incompleted"));
    }
}
