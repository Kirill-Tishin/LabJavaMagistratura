package com.tishin.Lab.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.Collection;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Table(name = "Cafe", schema = "public", catalog = "Cafe")
@Data
public class Cafe {
    @Id
    @GeneratedValue(strategy = IDENTITY) //AUTO, SEQUENCE, TABLE
    @Column(name = "idCafe")
    private int idCafe;
    @Column(name = "Title")
    private String Title;
    @Column(name = "Address")
    private String Address;
    @Column(name = "Telephone")
    private long Telephone;

    @OneToMany(mappedBy = "Employee")
    private Collection<Employee> employees;
}