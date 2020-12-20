package com.tishin.lab.sersices;

import com.tishin.lab.entity.Order;
import com.tishin.lab.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {
    private OrderRepository orderRepository;

    @Autowired
    public OrderService(OrderRepository orderRepository){
        this.orderRepository = orderRepository;
    }

    public Order saveOrder(Order order){
        return orderRepository.save(order);
    }

    public void deleteOrder(Order order){
        orderRepository.delete(order);
    }

    public void deleteById(long id){
        orderRepository.deleteById(id);
    }

    public Order getOrder(long id){
        return orderRepository.getOne(id);
    }

    public List<Order> getAllOrder(){
        return orderRepository.findAll();
    }
}
