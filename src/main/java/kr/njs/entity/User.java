package kr.njs.entity;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Column(name = "user_id")
    private String us_id; // 유저 아이디

    @Column(name = "user_password")
    private String us_password; // 유저 비밀번호

    private String us_name; // 유저 이름
    private String us_email; // 유저 이메일
    private String us_birthdate; // 유저 생년월일
    private String create_At; // 유저 가입 날짜
}
