package com.personal.TaskManagementSystem.Controllers;

import com.personal.TaskManagementSystem.Requests.RegisterRequest;
import com.personal.TaskManagementSystem.Services.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/register")
@CrossOrigin(origins = "*", methods = {RequestMethod.POST})
public class RegisterController {
    @Autowired
    private RegisterService registerService;

    @PostMapping(path = "/registerUser")
    public ResponseEntity<String> registerUser(@RequestBody RegisterRequest registerRequest) {
        String result=registerService.registerUser(registerRequest);
        if(result.equals("success")){
            return new ResponseEntity<>("Registered Successfully", HttpStatus.CREATED);
        }else{
            return new ResponseEntity<>("User is already registered", HttpStatus.CONFLICT);
        }
    }
}
