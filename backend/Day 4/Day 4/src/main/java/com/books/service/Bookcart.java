package com.books.service;

import java.util.List;

import com.books.Entity.Bookorder;

public interface Bookcart
{
public List< Bookorder>getBook();
public  Bookorder postBook(Bookorder edm);
public  Bookorder putBook(Bookorder edm);
public void deleteBook(int id);
}
