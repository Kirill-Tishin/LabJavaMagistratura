package com.tishin.lab.sersices;

import com.tishin.lab.entity.Employee;
import com.tishin.lab.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {
    private EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeService(EmployeeRepository employeeRepository){
        this.employeeRepository = employeeRepository;
    }

    public Employee saveEmployee(Employee employee){
        return employeeRepository.save(employee);
    }

    public void deleteEmployee(Employee employee){
        employeeRepository.delete(employee);
    }

    public void deleteById(long id){
        employeeRepository.deleteById(id);
    }

    public Employee getEmployee(long id){
        return employeeRepository.getOne(id);
    }

    public List<Employee> getAllEmployee(){
        return employeeRepository.findAll();
    }
}
