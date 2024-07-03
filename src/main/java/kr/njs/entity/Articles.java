package kr.njs.entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Articles {

    private String at_title; // 기사 제목
    private String at_content; //  기사 내용
    private String at_pic; // 기사 사진 경로
    private String at_created; // 기사 작성일
    private String at_idname; // 기사 작성자 이름
}
