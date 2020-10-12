package com.tishin.Lab.entity;
import lombok.Data;

import javax.persistence.*;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Table(name = "Order", schema = "public", catalog = "Cafe")
@Data
public class Order {
    @Id
    @GeneratedValue(strategy = IDENTITY) //AUTO, SEQUENCE, TABLE
    @Column(name = "idOrder")
    private int idOrder;
    @Column(name = "Sum")
    private double Sum;
    @Column(name = "Title")
    private String Title;
    @Column(name = "NumberTable")
    private int NumberTable;

    @Column(name = "idEmployee")
    private int idEmployee;
    @ManyToOne
    @JoinColumn(name = "idEmployee",referencedColumnName = "idEmployee",nullable = true, insertable = false, updatable = false)
    private Employee employee;

    @Column(name = "idProduct")
    private int idProduct;
    @ManyToOne
    @JoinColumn(name = "idProduct",referencedColumnName = "idProduct",nullable = true, insertable = false, updatable = false)
    private Product product;

    @Column(name = "idUser")
    private int idUser;
    @ManyToOne
    @JoinColumn(name = "idUser",referencedColumnName = "idUser",nullable = true, insertable = false, updatable = false)
    private User user;
}
