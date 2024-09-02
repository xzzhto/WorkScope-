package net.proselyte.jwtapp.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;
import net.proselyte.jwtapp.model.User;
import net.proselyte.jwtapp.repository.RoleRepository;
import net.proselyte.jwtapp.repository.UserRepository;
import net.proselyte.jwtapp.service.UserService;
import net.proselyte.jwtapp.model.Role;
import net.proselyte.jwtapp.model.Status;

@Service
@Slf4j
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    @Autowired
    public UserServiceImpl(UserRepository userRepository, RoleRepository roleRepository, BCryptPasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public User register(User user) {
        Role roleUser = roleRepository.findByName("ROLE_USER");
        List<Role> userRoles = new ArrayList<>();
        userRoles.add(roleUser); 
        
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRoles(userRoles);
        user.setStatus(Status.ACTIVE);

        User registeredUser = userRepository.save(user);

        log.info("IN register - user: {} successfully registered", registeredUser);
        
        return registeredUser;
    }
    
    @Override
    public List<User> getAll() {
        // TODO Auto-generated method stub
        return null;
    }
    
    @Override
    public User findByUsername(String username) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public User findById(Integer id) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public Void delete(Long id) {
        // TODO Auto-generated method stub
        return null;
    }
}
