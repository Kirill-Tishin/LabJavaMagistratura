package com.tishin.lab.entity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;

import javax.persistence.*;

import java.util.Collection;

import static javax.persistence.GenerationType.*;

@Entity
@Table(name = "products")
@Data
public class Product {
    @Id
    @GeneratedValue(strategy = SEQUENCE) //AUTO, SEQUENCE, TABLE
    @Column(name = "idProduct")
    private Long idProduct;
    @Column(name = "price")
    private double price;
    @Column(name = "title")
    private String title;
    @Column(name = "description")
    private String description;

    @OneToMany(mappedBy = "product")
    @JsonIgnore
    private Collection<Order> orders;
}
