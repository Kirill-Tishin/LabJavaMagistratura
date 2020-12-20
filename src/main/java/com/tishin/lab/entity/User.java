package com.tishin.lab.entity;
import lombok.Data;

import javax.persistence.*;

import java.util.Collection;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Table(name = "userTable", schema = "public", catalog = "Cafe")
@Data
public class User {
    @Id
    @GeneratedValue(strategy = IDENTITY) //AUTO, SEQUENCE, TABLE
    @Column(name = "idUser")
    private Long idUser;
    @Column(name = "Name")
    private String Name;
    @Column(name = "Password")
    private String Password;

    @OneToMany(mappedBy = "userTable")
    private Collection<Order> orders;
}