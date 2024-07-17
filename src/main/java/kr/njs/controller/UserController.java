package kr.njs.controller;

import kr.njs.entity.User;

import kr.njs.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/api")
@Controller
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping("/userAdd")
    public String userAdd(@RequestBody User user){
        userService.saveUser(user);
        return "회원가입 완료.";
    }
}