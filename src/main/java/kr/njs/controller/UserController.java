package kr.njs.controller;

import jakarta.servlet.http.HttpSession;
import kr.njs.entity.User;
import kr.njs.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    private final UserService userService;

    @PostMapping("/userAdd") // 회원가입
    public ResponseEntity<?> userAdd(@RequestBody User user) {
        try {
            System.out.println(user.toString());
            userService.saveUser(user);
            return ResponseEntity.ok("회원가입 완료.");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("회원가입 실패: " + e.getMessage());
        }
    }

    @PutMapping("/userUpdate/{us_id}") //회원정보 수정 기능
    public String userUpdate(@PathVariable String us_id, @RequestBody User user) {
        user.setUs_id(us_id);
        userService.userUpdate(user);
        return "put 요청 : " + " id : " + user.getUs_id() + " 사용자비밀번호 : " + user.getUs_password();
    }

    @PostMapping("/userLogin") // 로그인 기능
    public ResponseEntity<?> userLogin(@RequestBody Map<String, String> credentials, HttpSession session) {
        String id = credentials.get("userId");
        String pw = credentials.get("password");
        User loginUser = userService.login(id, pw);
        if (loginUser != null) {
            session.setAttribute("user", loginUser); // 사용자 정보를 세션에 저장
            return ResponseEntity.ok(Map.of("message", "로그인 성공", "user", loginUser));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("로그인 실패: 잘못된 비밀번호 또는 아이디");
        }
    }

    @PostMapping("/userLogout") // 로그아웃 기능
    public ResponseEntity<String> logout(HttpSession session) {
        session.invalidate(); // 세션 무효화
        return ResponseEntity.ok("Successfully logged out");
    }

    @GetMapping("/isIdExists/{id}") // 아이디 중복 확인 기능
    public ResponseEntity<Boolean> isIdExists(@PathVariable String id) {
        boolean isIdExists = userService.isIdExists(id);
        System.out.println(isIdExists);
        return ResponseEntity.ok(isIdExists);
    }

    @GetMapping("/getUserSession")
    public ResponseEntity<?> getUserSession(HttpSession session) {
        User user = (User) session.getAttribute("user");
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("No user logged in");
        }
    }
}
