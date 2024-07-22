package kr.njs.controller;

import kr.njs.entity.Subscription;
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

    @PostMapping("/subscribe") // 구독 기능
    public ResponseEntity<?> subscribeToCategory(@RequestBody Subscription subscription) {
        try {
            subscriptionService.subscribeToCategory(subscription.getUser_id(), subscription.getUc_cate());
            return ResponseEntity.ok("Successfully subscribed to category " + subscription.getUc_cate());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Failed to subscribe: " + e.getMessage());
        }
    }

    @PostMapping("/unsubscribe") // 구독 취소 기능
    public ResponseEntity<?> unsubscribeFromCategory(@RequestBody Subscription subscription) {
        try {
            subscriptionService.unsubscribeFromCategory(subscription.getUser_id(), subscription.getUc_cate());
            return ResponseEntity.ok("Successfully unsubscribed from category " + subscription.getUc_cate());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Failed to unsubscribe: " + e.getMessage());
        }
    }

    @GetMapping("/user-categories/{user_id}")
    public ResponseEntity<?> getUserSubscribedCategories(@PathVariable String user_id) {
        try {
            List<Integer> categories = subscriptionService.getUserSubscriptions(user_id);
            return ResponseEntity.ok(categories);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Failed to get subscribed categories: " + e.getMessage());
        }
    }
}