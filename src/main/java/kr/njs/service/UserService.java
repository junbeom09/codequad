package kr.njs.service;


import kr.njs.entity.User;
import kr.njs.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public void saveUser(User user) {

        userRepository.Joinuser(user);
        System.out.println("User saved: " + user);
    }
}
