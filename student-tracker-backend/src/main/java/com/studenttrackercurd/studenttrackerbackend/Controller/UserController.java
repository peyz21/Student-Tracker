package com.studenttrackercurd.studenttrackerbackend.Controller;

import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.studenttrackercurd.studenttrackerbackend.Exception.UserNotFoundException;
import com.studenttrackercurd.studenttrackerbackend.Model.User;
import com.studenttrackercurd.studenttrackerbackend.Repository.UserRepository;

@RestController
public class UserController {
    
    @Autowired
    private UserRepository userRepo;

    @PostMapping("/student")
    User newUser(@RequestBody User newUser){
        return userRepo.save(newUser);
    }

    @GetMapping("/students")
    List<User> getAllUsers(){
        return userRepo.findAll();
    }

    @GetMapping("/student/{id}")
    User getUserById(@PathVariable Long id){
        return userRepo.findById(id).orElseThrow(() -> new UserNotFoundException(id));
    }

    @PutMapping("/student/{id}")
    User updateUser(@RequestBody User newUser, @PathVariable Long id){
        return userRepo.findById(id).map(user -> {
            user.setName(newUser.getName());
            user.setHairColor(newUser.getHairColor());
            user.setWeight(newUser.getWeight());
            user.setHeight(newUser.getHeight());
            user.setGpa(newUser.getGpa());
            user.setEmail(newUser.getEmail());
            user.setPassword(newUser.getPassword());
            return userRepo.save(user);
        }).orElseThrow(() -> {
            return new UserNotFoundException(id);
        });
    }

    @DeleteMapping("/student/{id}")
    String deleteUser(@PathVariable Long id){
        if(!userRepo.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepo.deleteById(id);
        return "User with id: " + id + " was deleted.";
    }


}
