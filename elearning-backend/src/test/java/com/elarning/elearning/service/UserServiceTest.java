package com.elarning.elearning.service;

import com.elarning.elearning.model.User;
import com.elarning.elearning.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

public class UserServiceTest {
    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private Userservice userService;

    @Test
    public void testRegisterUser() {
        MockitoAnnotations.openMocks(this);

        User user = new User();
        user.setUsername("testuser");
        user.setPassword("password123");
        user.setEmail("test@example.com");

        userService.registerUser(user);

        verify(userRepository).save(user);
    }
}
