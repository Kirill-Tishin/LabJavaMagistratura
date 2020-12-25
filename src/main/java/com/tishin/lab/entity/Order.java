package com.tishin.lab.entity;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;

import static javax.persistence.GenerationType.*;

@Entity
@Table(name = "orders")
@Data
public class Order {
    @Id
    @GeneratedValue(strategy = SEQUENCE) //AUTO, SEQUENCE, TABLE
    @Column(name = "idOrder")
    private Long idOrder;
    @Column(name = "sum")
    private double sum;
    @Column(name = "title")
    private String title;
    @Column(name = "numberTable")
    private int numberTable;

    @ManyToOne(cascade = CascadeType.REFRESH)
    @JoinColumn(name = "idEmployee")
    private Employee employee;

    @ManyToOne(cascade = CascadeType.REFRESH)
    @JoinColumn(name = "idProduct")
    private Product product;

    @ManyToOne(cascade = CascadeType.REFRESH)
    @JoinColumn(name = "idUser")
    private User userTable;
}