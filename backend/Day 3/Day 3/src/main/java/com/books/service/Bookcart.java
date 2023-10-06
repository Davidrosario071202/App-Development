package com.books.service;

import java.util.List;

import com.books.Entity.Bookorder;

public interface Bookcart
{
public List< Bookorder>getMarriage();
public  Bookorder postMarriage(Bookorder edm);
public  Bookorder putMarriage(Bookorder edm);
public void deleteMarriage(int id);
}
