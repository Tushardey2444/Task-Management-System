package com.personal.TaskManagementSystem.Entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "login")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Login {
    @Id
    private String emailId;

    @Column(nullable = false)
    private String password;

    @JoinColumn
    @OneToOne
    private Register register;
}
