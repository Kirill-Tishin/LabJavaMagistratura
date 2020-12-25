package com.tishin.lab.repository;

import com.tishin.lab.entity.Cafe;
import com.tishin.lab.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Long> {
    @Query("select employee from Employee employee where employee.cafe = (:cafe)")
    Employee getEmployeeForCafe(@Param("cafe") Cafe cafe);
}
