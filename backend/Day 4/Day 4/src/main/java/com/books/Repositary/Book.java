package com.books.Repositary;

import org.springframework.data.jpa.repository.JpaRepository;

import com.books.Entity.Bookorder;

public interface Book extends JpaRepository<Bookorder, Integer> {

}
