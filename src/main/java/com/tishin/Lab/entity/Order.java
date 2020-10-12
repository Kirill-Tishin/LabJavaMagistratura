package com.tishin.Lab.entity;
import javax.persistence.*;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Table(name = "Order")
public class Order {
    @Id
    @GeneratedValue(strategy = IDENTITY) //AUTO, SEQUENCE, TABLE
    @Column(name = "idOrder")
    private int idOrder;
    private double Summ;
    private String Title;
    private int NumberTable;
}
