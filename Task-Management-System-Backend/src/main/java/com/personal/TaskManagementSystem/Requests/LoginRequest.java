package com.personal.TaskManagementSystem.Requests;

import lombok.Getter;

@Getter
public class LoginRequest {
    private String emailId;

    private String password;
}
