package com.tishin.lab.controllers;

import com.tishin.lab.entity.Order;
import com.tishin.lab.entity.Product;
import com.tishin.lab.sersices.OrderService;
import com.tishin.lab.sersices.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ProductController {
    private ProductService productService;
    private OrderService orderService;

    @Autowired
    public ProductController(ProductService productService, OrderService orderService) {
        this.productService = productService;
        this.orderService = orderService;
    }

    @RequestMapping(value = "/product", method = RequestMethod.POST)
    public Product createProduct(@RequestBody Product product) {
        return productService.saveProduct(product);
    }

    @RequestMapping(value = "/product/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Object> deleteProduct(@PathVariable long id) {
        List<Order> orders = orderService.getAllOrder();
        Product product = productService.getProduct(id);
        for (Order order : orders) {
            if (order.getProduct().equals(product)) {
                orderService.deleteById(order.getIdOrder());
            }
        }
        productService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @RequestMapping(value = "/product", method = RequestMethod.PUT)
    public Product updateProduct(@RequestBody Product product) {
        return productService.saveProduct(product);
    }

    @RequestMapping(value = "/product/{id}", method = RequestMethod.GET)
    public Product getProduct(@PathVariable long id) {
        return productService.getProduct(id);
    }

    @RequestMapping(value = "/product", method = RequestMethod.GET)
    public List<Product> getProductAll() {
        return productService.getAllProduct();
    }
}