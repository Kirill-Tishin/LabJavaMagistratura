package com.tishin.Lab.entity;
import javax.persistence.*;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Table(name = "Employee")
public class Employee {
    @Id
    @GeneratedValue(strategy = IDENTITY) //AUTO, SEQUENCE, TABLE
    @Column(name = "idEmployee")
    private int idEmployee;
    private String Name;
    private String FirstName;
    private long Telephone;
}