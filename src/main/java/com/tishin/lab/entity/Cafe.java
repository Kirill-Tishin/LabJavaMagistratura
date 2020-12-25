package com.tishin.lab.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.Collection;

import static javax.persistence.GenerationType.*;

@Entity
@Table(name = "cafes")
@Data
public class Cafe {

    @Id
    @GeneratedValue(strategy = SEQUENCE) //AUTO, SEQUENCE, TABLE
    @Column(name = "idCafe")
    private Long idCafe;
    @Column(name = "title")
    private String title;
    @Column(name = "address")
    private String address;
    @Column(name = "telephone")
    private String telephone;

    @OneToMany(mappedBy = "cafe")
    @JsonIgnore
    private Collection<Employee> employees;
}