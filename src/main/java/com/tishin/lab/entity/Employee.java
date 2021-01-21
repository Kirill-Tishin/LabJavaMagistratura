package com.tishin.lab.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;

import javax.persistence.*;

import java.util.Collection;

import static javax.persistence.GenerationType.*;

@Entity
@Table(name = "employees")
@Data
public class Employee {
    @Id
    @GeneratedValue(strategy = SEQUENCE) //AUTO, SEQUENCE, TABLE
    @Column(name = "idEmployee")
    private Long idEmployee;
    @Column(name = "name")
    private String name;
    @Column(name = "firstName")
    private String firstName;
    @Column(name = "telephone")
    private String telephone;

    @ManyToOne(cascade = CascadeType.REFRESH)
    @JoinColumn(name = "idCafe")
    private Cafe cafe;

    @OneToMany(mappedBy = "employee")
    @JsonIgnore
    private Collection<Order> orders;
}