package com.tishin.lab.controllers;
import com.tishin.lab.entity.User;
import com.tishin.lab.sersices.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UserController {
    private UserService userService;

    @Autowired
    public UserController(UserService userService){
        this.userService = userService;
    }

    @RequestMapping(value = "/user", method = RequestMethod.POST)
    public User createUser(@RequestBody User user){
        return userService.saveUser(user);
    }

    @RequestMapping(value = "/user/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Object> deleteUser(@PathVariable long id) {
        userService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @RequestMapping(value = "/user", method = RequestMethod.PUT)
    public User updateUser(@RequestBody User user) {
        return userService.saveUser(user);
    }

    @RequestMapping(value = "/user/{id}", method = RequestMethod.GET)
    public User getUser(@PathVariable long id) {
        return userService.getUser(id);
    }

    @RequestMapping(value = "/user", method = RequestMethod.GET)
    public List<User> getUserAll() {
        return userService.getAllUser();
    }
}
