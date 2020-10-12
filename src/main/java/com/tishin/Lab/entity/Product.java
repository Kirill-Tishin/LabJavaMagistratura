package com.tishin.Lab.entity;
import javax.persistence.*;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Table(name = "Product")
public class Product {
    @Id
    @GeneratedValue(strategy = IDENTITY) //AUTO, SEQUENCE, TABLE
    @Column(name = "idProduct")
    private int idProduct;
    private double Price;
    private String Title;
    private String Description;
}
