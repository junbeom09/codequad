package kr.njs.controller;

import kr.njs.entity.Articles;
import kr.njs.request.PublisherRequest;
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

    @GetMapping("/newsArticles")
    public ResponseEntity<List<Articles>> Arclist() {
        try {
            List<Articles> articles = arcservice.Arclist();
            return ResponseEntity.ok(articles);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    @GetMapping("/category/{categoryId}")
    public List<Articles> getArticlesByCategory(@PathVariable int categoryId) {
        return arcservice.getArticlesByCategory(categoryId);
    }

    @GetMapping("/publisher/{company}")
    public ResponseEntity<List<Articles>> getArticlesByPublisher(@PathVariable String company) {
        String publisher = company;
        try {
            List<Articles> articles = arcservice.getArticlesByPublisher(publisher);
            return ResponseEntity.ok(articles);
        } catch (Exception e) {
            e.printStackTrace(); // 디버깅 로그 추가
            return ResponseEntity.badRequest().body(null);
        }
    }

    @PostMapping("/publisher")
    public ResponseEntity<List<Articles>> getArticlesByPublisher(@RequestBody PublisherRequest request) {
        System.out.println("Received JSON request: " + request); // 디버깅 로그 추가
        String publisher = request.getPublisher();
        System.out.println("Received publisher: " + publisher); // 디버깅 로그 추가
        try {
            List<Articles> articles = arcservice.getArticlesByPublisher(publisher);
            return ResponseEntity.ok(articles);
        } catch (Exception e) {
            e.printStackTrace(); // 디버깅 로그 추가
            return ResponseEntity.badRequest().body(null);
        }
    }


    @GetMapping("/keywordsearch")
    public ResponseEntity<List<Articles>> searchArticles(@RequestParam String keyword) {
        try {
            List<Articles> articles = arcservice.searchArticlesByCategoryAndKeyword(keyword);
            return ResponseEntity.ok(articles);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }
}
