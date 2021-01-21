package com.tishin.lab.sersices;

import com.tishin.lab.entity.User;
import com.tishin.lab.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public void deleteUser(User user) {
        userRepository.delete(user);
    }

    public void deleteById(long id) {
        userRepository.deleteById(String.valueOf(id));
    }

    public User getUser(long id) {
        return userRepository.getOne(String.valueOf(id));
    }

    public List<User> getAllUser() {
        return userRepository.findAll()
                .stream()
                .collect(Collectors.toList());
    }

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException, AuthenticationException {
        UserDetails userDetails = null;
        try {
            userDetails = userRepository.findByName(s).orElseThrow(() -> new UsernameNotFoundException("No user with such name " + s));
        } catch (AuthenticationException e) {
            System.out.println(e);
        }
        return userDetails;
    }
}
