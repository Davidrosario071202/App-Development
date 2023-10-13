package com.books.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor
public class UserController {
	
	  @Autowired
	  private BookService ms;
	  
	  @GetMapping("/getbook")
	  public List<Bookorder>getbook()
	  {
		  return ms.getBook();
		  
	  }
	  @PostMapping("/postuser")
	  public Bookorder postbook(@RequestBody Bookorder ee)
	  {
		  return ms.postBook(ee);
	  }
	  @PutMapping("/putbook")
	  public Bookorder putbook(@RequestBody Bookorder ee,@RequestParam int id)
	  {
	  ee.setId(id);
	  return ms.putBook(ee);
	}
	  @DeleteMapping("/deletebook")
	  public void deletebook(@RequestParam int id)
	  {
		  System.out.print("Deleted Succcessfully");
		  ms.deleteBook(id);
	  }
	@GetMapping
	public ResponseEntity<String> sayHello(){
		return ResponseEntity.ok("Hi User");
	}
}