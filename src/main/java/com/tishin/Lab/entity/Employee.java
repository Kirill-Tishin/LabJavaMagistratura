package com.tishin.Lab.entity;

import lombok.Data;

import javax.persistence.*;

import java.util.Collection;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Table(name = "Employee", schema = "public", catalog = "Cafe")
@Data
public class Employee {
    @Id
    @GeneratedValue(strategy = IDENTITY) //AUTO, SEQUENCE, TABLE
    @Column(name = "idEmployee")
    private int idEmployee;
    @Column(name = "Name")
    private String Name;
    @Column(name = "FirstName")
    private String FirstName;
    @Column(name = "Telephone")
    private long Telephone;

    @Column(name = "idCafe")
    private int idCafe;
    @ManyToOne
    @JoinColumn(name = "idCafe", referencedColumnName = "idCafe", nullable = false, insertable = false, updatable = false)
    private Cafe cafe;

    @OneToMany(mappedBy = "Order")
    private Collection<Order> orders;
}