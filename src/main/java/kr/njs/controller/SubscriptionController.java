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

    @PostMapping("/subscribe")
    public ResponseEntity<?> subscribeToNewsAgency(@RequestBody Subscription subscription) {
        if (subscription.getUser_id() == null || subscription.getUc_publisher() == null) {
            return ResponseEntity.badRequest().body("UserId and ucPublisher must not be null");
        }
        try {
            System.out.println("Subscribing user: " + subscription.getUser_id() + " to publisher: " + subscription.getUc_publisher());
            subscriptionService.subscribeToNewsAgency(subscription.getUser_id(), subscription.getUc_publisher());
            return ResponseEntity.ok("Successfully subscribed to news agency " + subscription.getUc_publisher());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Failed to subscribe: " + e.getMessage());
        }
    }

    @PostMapping("/unsubscribe")
    public ResponseEntity<?> unsubscribeFromNewsAgency(@RequestBody Subscription subscription) {
        if (subscription.getUser_id() == null || subscription.getUc_publisher() == null) {
            return ResponseEntity.badRequest().body("UserId and ucPublisher must not be null");
        }
        try {
            System.out.println("Unsubscribing user: " + subscription.getUser_id() + " from publisher: " + subscription.getUc_publisher());
            subscriptionService.unsubscribeFromNewsAgency(subscription.getUser_id(), subscription.getUc_publisher());
            return ResponseEntity.ok("Successfully unsubscribed from news agency " + subscription.getUc_publisher());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Failed to unsubscribe: " + e.getMessage());
        }
    }

    @GetMapping("/user-subscribed-news/{user_id}")
    public ResponseEntity<?> getUserSubscribedNews(@PathVariable String user_id) {
        if (user_id == null) {
            return ResponseEntity.badRequest().body("UserId must not be null");
        }
        try {
            List<String> subscribedNewsAgencies = subscriptionService.getUserSubscriptions(user_id);
            return ResponseEntity.ok(subscribedNewsAgencies);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Failed to get subscribed news: " + e.getMessage());
        }
    }
}
