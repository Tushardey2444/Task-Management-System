package com.personal.TaskManagementSystem.Repository;

import com.personal.TaskManagementSystem.Entities.Register;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegisterRepository extends JpaRepository<Register,Integer> {

}
