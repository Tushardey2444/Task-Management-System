package com.personal.TaskManagementSystem.Requests;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginRequest {
    private String emailId;

    private String password;
}
