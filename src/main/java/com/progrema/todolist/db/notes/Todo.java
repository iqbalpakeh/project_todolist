package com.progrema.todolist.db.notes;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter
@Setter
public class Todo {

    @Id
    @GeneratedValue
    private Long id;

    private String content;
    private String timestamp;
    private String status;

    public Todo() {
    }

    public Todo(String content, String timestamp, String status) {
        this.content = content;
        this.timestamp = timestamp;
        this.status = status;
    }

    @Override
    public String toString() {
        return "Todo{" +
                "id=" + id +
                ", content='" + content + '\'' +
                ", timestamp='" + timestamp + '\'' +
                ", status='" + status + '\'' +
                '}';
    }

}
