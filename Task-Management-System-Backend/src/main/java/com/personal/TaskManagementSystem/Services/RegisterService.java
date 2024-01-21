package com.personal.TaskManagementSystem.Services;

import com.personal.TaskManagementSystem.Entities.Login;
import com.personal.TaskManagementSystem.Entities.Register;
import com.personal.TaskManagementSystem.Repository.LoginRepository;
import com.personal.TaskManagementSystem.Repository.RegisterRepository;
import com.personal.TaskManagementSystem.Requests.RegisterRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RegisterService {
    @Autowired
    private RegisterRepository registerRepository;

    @Autowired
    private LoginRepository loginRepository;
    public String registerUser(RegisterRequest registerRequest){
        Optional<Login> user=loginRepository.findById(registerRequest.getEmailId());
        if(user.isEmpty()){
            Login login=Login.builder().emailId(registerRequest.getEmailId())
                    .password(registerRequest.getPassword()).build();

            Register register =Register.builder().fullName(registerRequest.getFullName())
                    .phoneNumber(registerRequest.getPhoneNumber())
                    .dob(registerRequest.getDob())
                    .login(login)
                    .build();

            login.setRegister(register);
            registerRepository.save(register);
            return "success";
        }
        return "failure";
    }
}
