package com.tishin.lab.entity;
import lombok.Data;

import javax.persistence.*;

import java.util.Collection;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Table(name = "product", schema = "public", catalog = "Cafe")
@Data
public class Product {
    @Id
    @GeneratedValue(strategy = IDENTITY) //AUTO, SEQUENCE, TABLE
    @Column(name = "idProduct")
    private Long idProduct;
    @Column(name = "Price")
    private double Price;
    @Column(name = "Title")
    private String Title;
    @Column(name = "Description")
    private String Description;

    @OneToMany(mappedBy = "product")
    private Collection<Order> orders;
}
