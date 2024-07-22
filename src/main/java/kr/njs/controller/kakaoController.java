package kr.njs.controller;
import kr.njs.service.kakaoService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class kakaoController {

    private final kakaoService kakaoservice;

    @GetMapping("/userLogin/kakao")
    public String kakaologin(@RequestParam String code) {
        String accessToken = kakaoservice.getAccessToken(code);
        String nickname = kakaoservice.getNicknameAndSave(accessToken);

        return "Logged in user: " + nickname;
    }


}