package kr.njs;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan(basePackages = "kr.njs.repository")
public class NjsApplication {
    public static void main(String[] args) {
        SpringApplication.run(NjsApplication.class, args);
    }
}