package kr.njs.controller;

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

    @PostMapping("/userAdd")
    public ResponseEntity<?> userAdd(@RequestBody User user) {
        try {
            userService.saveUser(user);
            return ResponseEntity.ok("회원가입 완료.");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("회원가입 실패: " + e.getMessage());
        }
    }

    @PostMapping("/endpoint")
    public ResponseEntity<String> receiveData(@RequestBody String data) {
        try {
            if(data.equals("경제")){
                System.out.println("Received data: " + data);
            }
            return ResponseEntity.ok("데이터 '" + data + "'가 처리되었습니다");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("데이터 처리 실패: " + e.getMessage());
        }
    }
}