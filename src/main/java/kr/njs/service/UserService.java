package kr.njs.service;


import jakarta.transaction.Transactional;
import kr.njs.entity.User;
import kr.njs.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    @Autowired
    private final UserRepository userRepository;

    public void saveUser(User user) {

        userRepository.Joinuser(user);
        System.out.println("User saved: " + user);
    }

    @Transactional
    public void userUpdate(User user){
        userRepository.userUpdate(user);
    }

    @Transactional
    public User login(String us_id, String us_password) {
        us_id = us_id.trim();
        us_password = us_password.trim();
        User user = userRepository.findByIdAndPassword(us_id, us_password);
        System.out.println("Returned user: " + (user != null ? user.toString() : "null"));
        return user;
    }
}
