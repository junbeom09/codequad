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

    @GetMapping("/category/{categoryId}") // 카테고리별 검색 기능
    public List<Articles> getArticlesByCategory(@PathVariable int categoryId) {
        return arcservice.getArticlesByCategory(categoryId);
    }

    @GetMapping("/publisher/{publisher}") // 언론사 별 검색 기능
    public List<Articles> getArticlesByPublisher(@PathVariable String publisher) {
        return arcservice.getArticlesByPublisher(publisher);
    }

    @GetMapping("/keywordsearch")
    public ResponseEntity<List<Articles>> searchArticles(@RequestParam String keyword) {
        try {
            List<Articles> articles = arcservice.searchArticlesByKeyword(keyword);
            return ResponseEntity.ok(articles);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }
}

