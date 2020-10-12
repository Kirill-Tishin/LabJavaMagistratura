package com.tishin.Lab.entity;
import javax.persistence.*;

import java.util.Collection;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Table(name = "Product", schema = "public", catalog = "Cafe")
public class Product {
    @Id
    @GeneratedValue(strategy = IDENTITY) //AUTO, SEQUENCE, TABLE
    @Column(name = "idProduct")
    private int idProduct;
    @Column(name = "Price")
    private double Price;
    @Column(name = "Title")
    private String Title;
    @Column(name = "Description")
    private String Description;

    @OneToMany(mappedBy = "product")
    private Collection<Order> orders;
}
