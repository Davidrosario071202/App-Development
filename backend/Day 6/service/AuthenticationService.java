package com.books.service;

import com.books.Entity.User;
import com.books.dto.JwtAuthenticationResponse;
import com.books.dto.RefreshTokenRequest;
import com.books.dto.SigninRequest;
import com.books.dto.SignupRequest;

public interface AuthenticationService {
	User signup(SignupRequest signupRequest);
	JwtAuthenticationResponse signin(SigninRequest signinRequest);
	JwtAuthenticationResponse refreshToken(RefreshTokenRequest refreshTokenRequest);
}