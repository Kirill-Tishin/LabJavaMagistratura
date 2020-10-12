package com.tishin.Lab.entity;
import javax.persistence.*;

import java.util.Collection;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Table(name = "User", schema = "public", catalog = "Cafe")
public class User {
    @Id
    @GeneratedValue(strategy = IDENTITY) //AUTO, SEQUENCE, TABLE
    @Column(name = "idUser")
    private int idUser;
    @Column(name = "Name")
    private String Name;

    @OneToMany(mappedBy = "user")
    private Collection<Order> orders;
}
