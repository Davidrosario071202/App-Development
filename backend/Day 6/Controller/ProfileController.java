package com.books.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.books.Entity.User;
import com.books.Repositary.UserRepositary.UserRepository;

@RestController
@RequestMapping("/api/user-profile")  // Update the base mapping
public class ProfileController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/{id}")
    public User getUserProfile(@PathVariable Long id) {
        return userRepository.findById(id).orElse(null);
    }

    @PutMapping("/{id}")
    public User updateUserProfile(@PathVariable Long id, @RequestBody User updatedUser) {
        User user = userRepository.findById(id).orElse(null);
        if (user != null) {
            // Update the user profile fields with the data from the request
            if (updatedUser.getFirstName() != null) {
                user.setFirstName(updatedUser.getFirstName());
            }
            if (updatedUser.getLastName() != null) {
                user.setLastName(updatedUser.getLastName());
            }
            if (updatedUser.getEmail() != null) {
                user.setEmail(updatedUser.getEmail());
            }
            if (updatedUser.getLocation() != null) {
                user.setLocation(updatedUser.getLocation());
            }
            if (updatedUser.getBio() != null) {
                user.setBio(updatedUser.getBio());
            }
            userRepository.save(user);
        }
        return user;
    }
}
