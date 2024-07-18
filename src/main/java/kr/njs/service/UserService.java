package kr.njs.service;


import jakarta.transaction.Transactional;
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
    @Transactional
    public void userUpdate(User user){
        userRepository.userUpdate(user);
    }
}
