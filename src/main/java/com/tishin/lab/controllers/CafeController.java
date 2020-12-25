package com.tishin.lab.controllers;

import com.tishin.lab.entity.Cafe;
import com.tishin.lab.entity.Employee;
import com.tishin.lab.entity.Order;
import com.tishin.lab.entity.Product;
import com.tishin.lab.sersices.CafeService;
import com.tishin.lab.sersices.EmployeeService;
import com.tishin.lab.sersices.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class CafeController {
    private CafeService cafeService;
    private EmployeeService employeeService;
    private OrderService orderService;

    @Autowired
    public CafeController(CafeService cafeService, EmployeeService employeeService,OrderService orderService){
        this.cafeService = cafeService;
        this.employeeService = employeeService;
        this.orderService = orderService;
    }

    @RequestMapping(value = "/cafe", method = RequestMethod.POST)
    public Cafe createCafe(@RequestBody Cafe cafe){
        return cafeService.saveCafe(cafe);
    }

    @DeleteMapping(value = "cafe/{id}")
    public void deleteCafe(@PathVariable long id) {
        Cafe cafe = getCafe(id);
        EmployeeController employeeController = new EmployeeController(employeeService,orderService);
        List<Employee> employees = employeeService.getAllEmployee();
        for (Employee employee : employees) {
            if (employee.getCafe().equals(cafe)) {
                //employeeService.deleteById(employee.getIdEmployee());
                employeeController.deleteEmployee(employee.getIdEmployee());
            }
        }
        cafeService.deleteCafe(cafe);
    }

    @RequestMapping(value = "/cafe", method = RequestMethod.PUT)
    public Cafe updateCafe(@RequestBody Cafe cafe) {
        return cafeService.saveCafe(cafe);
    }

    @RequestMapping(value = "/cafe/{id}", method = RequestMethod.GET)
    public Cafe getCafe(@PathVariable long id) {
        return cafeService.getCafe(id);
    }

    @RequestMapping(value = "/cafe", method = RequestMethod.GET)
    public List<Cafe> getCafeAll() {
        return cafeService.getAllCafe();
    }
}