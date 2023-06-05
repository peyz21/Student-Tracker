package com.studenttrackercurd.studenttrackerbackend.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.studenttrackercurd.studenttrackerbackend.Model.User;
import com.studenttrackercurd.studenttrackerbackend.Repository.UserRepository;

@RestController
public class UserController {
    
    @Autowired
    private UserRepository userRepo;

    @PostMapping("/user")
    User newUser(@RequestBody User newUser){
        return userRepo.save(newUser);
    }
}
