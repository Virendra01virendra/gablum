package com.gablum.usermanagement.user.repository;


import com.gablum.usermanagement.user.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User,String> {
    User findUserByEmail(String email);
}