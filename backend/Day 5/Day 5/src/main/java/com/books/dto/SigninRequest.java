package com.books.dto;

import lombok.Data;

@Data
public class SigninRequest {

	private String email;
	private String password;
}