package com.tishin.lab.entity;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;

import java.util.Collection;
import java.util.Collections;

import static javax.persistence.GenerationType.IDENTITY;
import static javax.persistence.GenerationType.SEQUENCE;

@Entity
@Table(name = "userTable", schema = "public", catalog = "Cafe")
@Data
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = SEQUENCE) //AUTO, SEQUENCE, TABLE
    @Column(name = "idUser")
    private String idUser;
    @Column(name = "name")
    private String name;
    @Column(name = "Password")
    private String Password;
    @Column(name = "Role")
    private String Role;

    @OneToMany(mappedBy = "userTable")
    private Collection<Order> orders;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getUsername() {
        return String.valueOf(idUser);
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
