package com.tishin.lab.entity;
import lombok.Data;

import javax.persistence.*;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Table(name = "order", schema = "public", catalog = "Cafe")
@Data
public class Order {
    @Id
    @GeneratedValue(strategy = IDENTITY) //AUTO, SEQUENCE, TABLE
    @Column(name = "idOrder")
    private Long idOrder;
    @Column(name = "Sum")
    private double Sum;
    @Column(name = "Title")
    private String Title;
    @Column(name = "NumberTable")
    private int NumberTable;

    @ManyToOne
    @JoinColumn(name = "employee",referencedColumnName = "idEmployee",nullable = true, insertable = false, updatable = false)
    private Employee employee;

    @ManyToOne
    @JoinColumn(name = "product",referencedColumnName = "idProduct",nullable = false, insertable = false, updatable = false)
    private Product product;

    @ManyToOne
    @JoinColumn(name = "userTable",referencedColumnName = "idUser",nullable = true, insertable = false, updatable = false)
    private User userTable;
}