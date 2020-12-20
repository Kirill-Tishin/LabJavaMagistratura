package com.tishin.lab.controllers;
import com.tishin.lab.entity.Employee;
import com.tishin.lab.sersices.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class EmployeeController {
    private EmployeeService employeeService;

    @Autowired
    public EmployeeController(EmployeeService employeeService){
        this.employeeService = employeeService;
    }

    @RequestMapping(value = "/employee", method = RequestMethod.POST)
    public Employee createEmployee(@RequestBody Employee employee){
        return employeeService.saveEmployee(employee);
    }

    @RequestMapping(value = "employee/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Object> deleteEmployee(@PathVariable long id) {
        employeeService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @RequestMapping(value = "/employee", method = RequestMethod.PUT)
    public Employee updateEmployee(@RequestBody Employee employee) {
        return employeeService.saveEmployee(employee);
    }

    @RequestMapping(value = "/employee/{id}", method = RequestMethod.GET)
    public Employee getEmployee(@PathVariable long id) {
        return employeeService.getEmployee(id);
    }

    @RequestMapping(value = "/employee", method = RequestMethod.GET)
    public List<Employee> getEmployeeAll() {
        return employeeService.getAllEmployee();
    }
}
