package com.personal.TaskManagementSystem.Services;

import com.personal.TaskManagementSystem.Entities.Login;
import com.personal.TaskManagementSystem.Entities.Register;
import com.personal.TaskManagementSystem.Repository.LoginRepository;
import com.personal.TaskManagementSystem.Repository.RegisterRepository;
import com.personal.TaskManagementSystem.Requests.LoginRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LoginService {
    @Autowired
    private LoginRepository loginRepository;

    @Autowired
    private RegisterRepository registerRepository;

    public String verifyLogin(LoginRequest loginRequest){
        Optional<Login> user=loginRepository.findById(loginRequest.getEmailId());
        if(user.isPresent()){
            Login login=user.get();
            if(login.getPassword().equals(loginRequest.getPassword())){
                return "success";
            }else{
                return "Incorrect Password";
            }
        }else {
            return "User not found";
        }
    }
    public Register registrationDetails(LoginRequest loginRequest){
        Optional<Login> user=loginRepository.findById(loginRequest.getEmailId());
        if(user.isPresent()){
            Login login= user.get();
            return login.getRegister();
        }
        return null;
    }
}
