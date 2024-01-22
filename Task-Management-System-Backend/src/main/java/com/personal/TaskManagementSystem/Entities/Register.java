package com.personal.TaskManagementSystem.Entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "register")
@Data
//Getter, Setter, RequiredArgsConstructor, ToString, EqualsAndHashCode, Value
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Register {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer registerId;

    @Column(nullable = false)
    private String fullName;

    @Column(nullable = false)
    private String phoneNumber;

    @Column(nullable = false)
    private String dob;

    @OneToOne(mappedBy = "register",cascade = CascadeType.ALL)
    private Login login;
}
