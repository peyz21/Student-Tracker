package com.studenttrackercurd.studenttrackerbackend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.studenttrackercurd.studenttrackerbackend.Model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    
}
