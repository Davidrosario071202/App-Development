package com.books;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.books.Entity.Role;
import com.books.Entity.User;
import com.books.Repositary.UserRepositary;

@SpringBootApplication
public class BookstoreApplication 
{
	@Autowired
	private  UserRepositary userRepository;

	public static void main(String[] args) 
	{
		SpringApplication.run(BookstoreApplication.class, args);
		
	}
 
	public void run(String... args) throws Exception {
		User adminAccount=userRepository.findByRole(Role.ADMIN);
		if(null==adminAccount) {
			User user=new User();
			user.setEmail("admin@gmail.com");
			user.setName("admin");
			user.setRole(Role.ADMIN);
			user.setPassword(new BCryptPasswordEncoder().encode("admin"));
			userRepository.save(user);
		}
		
	}

}




