package com.tishin.Lab.entity;

import javax.persistence.*;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Table(name = "Cafe")
public class Cafe {
    @Id
    @GeneratedValue(strategy = IDENTITY) //AUTO, SEQUENCE, TABLE
    @Column(name = "idCafe")
    private int idCafe;
    private String Title;
    private String Address;
    private long Telephone;
}