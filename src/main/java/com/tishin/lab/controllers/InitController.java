package com.tishin.lab.controllers;

import com.tishin.lab.entity.*;
import com.tishin.lab.sersices.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/init")
public class InitController {
    private final BCryptPasswordEncoder passwordEncoder;
    private UserService userService;
    private CafeService cafeService;
    private OrderService orderService;
    private EmployeeService employeeService;
    private ProductService productService;


    public InitController(BCryptPasswordEncoder passwordEncoder,UserService userService,
                          CafeService cafeService,
                          OrderService orderService,
                          EmployeeService employeeService,
                          ProductService productService){
        this.passwordEncoder=passwordEncoder;
        this.userService=userService;
        this.cafeService=cafeService;
        this.orderService=orderService;
        this.employeeService=employeeService;
        this.productService=productService;
    }

    @GetMapping("/init1")
    public void initCafe(){
        User user = new User();
        user.setName("name1");
        user.setRole("Admin");
        user.setPassword(passwordEncoder.encode("111"));
        userService.saveUser(user);

        Cafe cafe1 = new Cafe();
        cafe1.setAddress("TestAdres1");
        cafe1.setTitle("Cafe1");
        cafe1.setTelephone("89000000000");
        cafeService.saveCafe(cafe1);

        Employee employee1 = new Employee();
        employee1.setFirstName("FirstNameEmployee1");
        employee1.setName("NameEmployee1");
        employee1.setTelephone("89270000000");
        employeeService.saveEmployee(employee1);

        Product product1 = new Product();
        product1.setDescription("Beloe");
        product1.setTitle("Moloko");
        product1.setPrice(123);
        productService.saveProduct(product1);

        Order order1 = new Order();
        order1.setNumberTable(1);
        order1.setProduct(product1);
        order1.setSum(product1.getPrice());
        order1.setUserTable(user);
        orderService.saveOrder(order1);
    }

    @GetMapping("/init2")
    public void initCafe2(){
        Cafe cafeGet = cafeService.getCafe(7);

        Employee employee1 = new Employee();
        employee1.setCafe(cafeGet);
        employee1.setFirstName("FirstNameEmployee2");
        employee1.setName("NameEmployee2");
        employee1.setTelephone("89270000000");
        employeeService.saveEmployee(employee1);

        /*Order order1 = new Order();
        // order1.setEmployee(employee1);
        order1.setNumberTable(1);
        order1.setProduct(product1);
        order1.setSum(product1.getPrice());
        order1.setUserTable(user);
        orderService.saveOrder(order1);*/

    }

    @GetMapping("/deleteCafe")
    public void deleteCafe(){
       // cafeService.deleteCafe(cafeService.getCafe(17));
    }

    @GetMapping("/init3")
    public void initCafe3() {
        User user = new User();
        user.setName("name1");
        user.setRole("Admin");
        user.setPassword(passwordEncoder.encode("111"));
        userService.saveUser(user);
    }

    @GetMapping("/init4")
    public void initCafe4() {
        User user = (User) userService.loadUserByUsername("name1");
        System.out.println(user.getIdUser());
        System.out.println(user.getName());
        System.out.println(user.getPassword());
    }
}
