package net.proselyte.jwtapp.service;

import java.util.List;

import net.proselyte.jwtapp.model.User;

public interface UserService {

    User register(User user);

    List<User> getAll();

    User findByUsername(String username);

    User findById(Integer id);

    Void delete(Long id);
}
