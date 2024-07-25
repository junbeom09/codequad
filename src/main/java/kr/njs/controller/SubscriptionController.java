package kr.njs.controller;

import kr.njs.entity.Articles;
import kr.njs.entity.Subscription;
import kr.njs.service.ArcService;
import kr.njs.service.SubscriptionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class SubscriptionController {

    private final SubscriptionService subscriptionService;
    private final ArcService arcservice;

    @PostMapping("/subscribe")
    public ResponseEntity<?> subscribeToNewsAgency(@RequestBody Subscription subscription) {
        try {
            subscriptionService.subscribeToNewsAgency(subscription.getUser_id(), subscription.getUc_cate());
            return ResponseEntity.ok("Successfully subscribed to news agency " + subscription.getUc_cate());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Failed to subscribe: " + e.getMessage());
        }
    }

    @PostMapping("/unsubscribe")
    public ResponseEntity<?> unsubscribeFromNewsAgency(@RequestBody Subscription subscription) {
        try {
            subscriptionService.unsubscribeFromNewsAgency(subscription.getUser_id(), subscription.getUc_cate());
            return ResponseEntity.ok("Successfully unsubscribed from news agency " + subscription.getUc_cate());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Failed to unsubscribe: " + e.getMessage());
        }
    }

    @GetMapping("/user-subscribed-news/{user_id}")
    public ResponseEntity<?> getUserSubscribedNews(@PathVariable String user_id) {
        try {
            List<Integer> subscribedNewsAgencies = subscriptionService.getUserSubscriptions(user_id);
            List<Articles> articles = arcservice.getNewsByNewsAgencies(subscribedNewsAgencies);
            return ResponseEntity.ok(articles);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Failed to get subscribed news: " + e.getMessage());
        }
    }
}