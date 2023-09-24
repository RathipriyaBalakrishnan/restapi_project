package com.example.demo.repo;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Eventdetails;

public interface EventRepo extends JpaRepository<Eventdetails, Long> {

}