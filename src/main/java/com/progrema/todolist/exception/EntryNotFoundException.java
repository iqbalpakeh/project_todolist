package com.progrema.todolist.exception;

public class EntryNotFoundException extends RuntimeException {

    public EntryNotFoundException(Long id) {
        super("Could not find entry" + id);
    }

}
