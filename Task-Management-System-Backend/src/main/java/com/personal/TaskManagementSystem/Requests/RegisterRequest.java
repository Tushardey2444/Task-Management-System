package com.personal.TaskManagementSystem.Requests;

import jakarta.persistence.Column;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RegisterRequest {
    private String fullName;

    private String phoneNumber;

    private String dob;

    private String emailId;

    private String password;
}
