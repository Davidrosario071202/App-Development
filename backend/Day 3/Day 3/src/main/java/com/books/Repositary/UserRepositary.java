package com.books.Repositary;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.books.Entity.Role;
import com.books.Entity.User;


@Repository
public interface UserRepositary extends JpaRepository<User, Integer> {
Optional<User> findByEmail(String email);
User findByRole(Role role);
}
