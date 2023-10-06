package com.books.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.books.Entity.Bookorder;
import com.books.service.impl.BookService;

@RestController
@RequestMapping("/api/v1/auth")

@CrossOrigin(origins = "http://localhost:3000")


public class BookController
{
	
	
  @Autowired
  private BookService ms;
  
  @GetMapping("/getbook")
  public List<Bookorder>getMarriage()
  {
	  return ms.getMarriage();
	  
  }
  @PostMapping("/postbook")
  public Bookorder postmarriage(@RequestBody Bookorder ee)
  {
	  return ms.postMarriage(ee);
  }
  @PutMapping("/putbook")
  public Bookorder putmarriage(@RequestBody Bookorder ee,@RequestParam int id)
  {
  ee.setId(id);
  return ms.putMarriage(ee);
}
  @DeleteMapping("/deletebook")
  public void deletemarriage(@RequestParam int id)
  {
	  System.out.print("Deleted Succcessfully");
	  ms.deleteMarriage(id);
  }
  
}
