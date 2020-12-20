package com.tishin.lab.controllers;
import com.tishin.lab.entity.Order;
import com.tishin.lab.sersices.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class OrderController {
     private OrderService orderService;

     @Autowired
     public OrderController(OrderService orderService){
          this.orderService = orderService;
     }

     @RequestMapping(value = "/order", method = RequestMethod.POST)
     public Order createOrder(@RequestBody Order order){
          return orderService.saveOrder(order);
     }

     @RequestMapping(value = "/order/{id}", method = RequestMethod.DELETE)
     public ResponseEntity<Object> deleteOrder(@PathVariable long id) {
          orderService.deleteById(id);
          return new ResponseEntity<>(HttpStatus.NO_CONTENT);
     }

     @RequestMapping(value = "/order", method = RequestMethod.PUT)
     public Order updateOrder(@RequestBody Order order) {
          return orderService.saveOrder(order);
     }

     @RequestMapping(value = "/order/{id}", method = RequestMethod.GET)
     public Order getOrder(@PathVariable long id) {
          return orderService.getOrder(id);
     }

     @RequestMapping(value = "/order", method = RequestMethod.GET)
     public List<Order> getOrderAll() {
          return orderService.getAllOrder();
     }
}