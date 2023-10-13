package com.books.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.books.Entity.Bookorder;
import com.books.Repositary.Book;
import com.books.service.Bookcart;
@Service
public class BookService implements Bookcart {
    @Autowired
    private Book m;
	@Override
	public List<Bookorder> getBook() {
		// TODO Auto-generated method stub
		return m.findAll();
	}

	@Override
	public Bookorder postBook(Bookorder edm) {
		// TODO Auto-generated method stub
		return m.save(edm);
	}

	@Override
	public Bookorder putBook(Bookorder edm) {
		// TODO Auto-generated method stub
		return m.save(edm);
	}

	@Override
	public void deleteBook(int id) {
		// TODO Auto-generated method stub
         m.deleteById(id);
	}

}
