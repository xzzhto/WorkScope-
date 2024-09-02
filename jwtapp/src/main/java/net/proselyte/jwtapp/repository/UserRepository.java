package net.proselyte.jwtapp.repository;

import net.proselyte.jwtapp.model.User;
import org.springframework.data.jpa.repository.JpaRepository;;

public interface UserRepository extends JpaRepository<User, Integer>{
    User findByUsername(String name);
}
