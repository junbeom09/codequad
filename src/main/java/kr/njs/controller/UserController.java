package kr.njs.controller;

import jakarta.servlet.http.HttpSession;
import kr.njs.entity.User;
import kr.njs.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    private final UserService userService;

    @PostMapping("/userAdd")// 회원가입
    public ResponseEntity<?> userAdd(@RequestBody User user) {
        try {
            System.out.println(user);
            userService.saveUser(user);
            return ResponseEntity.ok("회원가입 완료.");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("회원가입 실패: " + e.getMessage());
        }
    }

    @PutMapping("/userUpdate/{us_id}") //회원정보 수정 기능
    public String userUpdate(@PathVariable String us_id, @RequestBody User user){
        user.setUs_id(us_id);
        userService.userUpdate(user);
        return "put 요청 : " + " id : " + user.getUs_id() +  "사용자비밀번호 : " + user.getUs_password();
    }
    //테스트

    @PostMapping("/userLogin") // 로그인 기능
    public String userLogin(@RequestBody User user) {
        User loginUser = userService.login(user.getUs_id(), user.getUs_password());
        if (loginUser != null) {
            return "로그인 성공! " + loginUser.getUs_id();
        } else {
            return "로그인 실패 : 잘못된 비밀번호 또는 아이디";
        }
    }

    @PostMapping("/userLogout") // 로그아웃 기능
    public ResponseEntity<String> logout(HttpSession session) {
        userService.logout(session);
        return ResponseEntity.ok("Successfully logged out");
    }

}