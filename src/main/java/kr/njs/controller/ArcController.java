package kr.njs.controller;

import kr.njs.entity.Articles;

import kr.njs.service.ArcService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api")
@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class ArcController {

    @Autowired
    private final ArcService arcservice;

    @GetMapping("/newsArticles") // 뉴스 리스트 가져오는 기능
    public ResponseEntity<List<Articles>> Arclist() {
        try {
            List<Articles> articles = arcservice.Arclist();
            return ResponseEntity.ok(articles);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }
}

