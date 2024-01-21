package com.personal.TaskManagementSystem.Repository;

import com.personal.TaskManagementSystem.Entities.Login;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginRepository extends JpaRepository<Login,String> {

}
