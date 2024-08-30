package net.proselyte.jwtapp.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "users")
@Data
public class  User extends BaseEntity {

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "username")
    private String telegram;

    @ManyToMany(fetch = FeatchType.EAGER)
    @JoinTable(name = "user_roles",
            joinColumns = {@joinColumn(name = "user_id", referencedColumnName = "id")},
            inverseJoinColumns = {@joinColumn(name = "role_id", referencedColumnName = "id")})
    private List<Role> roles;
}