package com.tishin.lab.controllers;

import com.tishin.lab.entity.User;
import com.tishin.lab.sersices.UserService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/init")
public class InitController {
    private final BCryptPasswordEncoder passwordEncoder;
    private final UserService userService;

    public InitController(BCryptPasswordEncoder passwordEncoder,UserService userService){
        this.passwordEncoder=passwordEncoder;
        this.userService=userService;
    }

    @GetMapping("/user")
    public void init(){
        User user = new User();
        user.setName("name4");
        user.setPassword(passwordEncoder.encode("444"));
        userService.saveUser(user);
    }
}
