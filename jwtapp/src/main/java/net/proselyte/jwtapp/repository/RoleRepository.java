package net.proselyte.jwtapp.repository;
import net.proselyte.jwtapp.model.Role;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Integer>{
    Role findByName(String name);
}
