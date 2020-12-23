package com.tishin.lab.repository;

import com.tishin.lab.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
    //User getUserByNameUser(String nameUser);
    Optional<User> findByName(String s);
}