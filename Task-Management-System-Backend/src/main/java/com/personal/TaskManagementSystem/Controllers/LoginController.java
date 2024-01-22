package com.personal.TaskManagementSystem.Controllers;

import com.personal.TaskManagementSystem.Entities.Register;
import com.personal.TaskManagementSystem.Requests.LoginRequest;
import com.personal.TaskManagementSystem.Services.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/login")
@CrossOrigin(origins = "*", methods = {RequestMethod.POST})
public class LoginController {
    @Autowired
    private LoginService loginService;
    @PostMapping(path = "/verifyLogin")
    public ResponseEntity<String> verifyLogin(@RequestBody LoginRequest loginRequest){
        String result=loginService.verifyLogin(loginRequest);
        if(result.equals("success")){
            return new ResponseEntity<>(result, HttpStatus.OK);
        }else{
            return new ResponseEntity<>("Invalid EmailId Or Password",HttpStatus.BAD_REQUEST);
        }
    }
    @PostMapping(path = "/registrationDetails")
    public ResponseEntity<Register> registrationDetails(@RequestBody LoginRequest loginRequest){
        Register register=loginService.registrationDetails(loginRequest);
//        System.out.println(register.getRegisterId()+" "+register.getFullName()+" "+register.getPhoneNumber()+" "+register.getDob());
        if(register==null){
            return new ResponseEntity<>(null,HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(register,HttpStatus.OK);
    }
}
