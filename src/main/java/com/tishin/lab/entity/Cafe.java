package com.tishin.lab.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.Collection;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Table(name = "cafe", schema = "public", catalog = "Cafe")
@Data
public class Cafe {
    @Id
    @GeneratedValue(strategy = IDENTITY) //AUTO, SEQUENCE, TABLE
    @Column(name = "idCafe")
    private Long idCafe;
    @Column(name = "Title")
    private String Title;
    @Column(name = "Address")
    private String Address;
    @Column(name = "Telephone")
    private long Telephone;

    @OneToMany(mappedBy = "cafe")
    private Collection<Employee> employees;
}