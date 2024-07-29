package kr.njs.service;

import kr.njs.entity.Articles;
import kr.njs.entity.Subscription;
import kr.njs.repository.SubscriptionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class SubscriptionService {

    private final SubscriptionRepository subscriptionRepository;

    public void subscribeToNewsAgency(String userId, String newsAgencyId) {
        if (userId == null || newsAgencyId == null) {
            throw new IllegalArgumentException("UserId and newsAgencyId must not be null");
        }
        System.out.println("Service - Subscribing user: " + userId + " to publisher: " + newsAgencyId);
        if (subscriptionRepository.findByUserIdAndUcPublisher(userId, newsAgencyId) != null) {
            throw new RuntimeException("Already subscribed to this news agency");
        }

        Subscription subscription = new Subscription();
        subscription.setUser_id(userId);
        subscription.setUc_publisher(newsAgencyId);
        subscriptionRepository.insert(subscription);
    }

    public void unsubscribeFromNewsAgency(String userId, String newsAgencyId) {
        if (userId == null || newsAgencyId == null) {
            throw new IllegalArgumentException("UserId and newsAgencyId must not be null");
        }
        System.out.println("Service - Unsubscribing user: " + userId + " from publisher: " + newsAgencyId);
        Subscription subscription = subscriptionRepository.findByUserIdAndUcPublisher(userId, newsAgencyId);
        if (subscription == null) {
            throw new RuntimeException("Subscription not found");
        }
        subscriptionRepository.delete(subscription);
    }

    public List<String> getUserSubscriptions(String userId) {
        if (userId == null) {
            throw new IllegalArgumentException("UserId must not be null");
        }
        System.out.println("Service - Getting subscriptions for user: " + userId);
        return subscriptionRepository.findByUserId(userId);
    }

    public List<Map<String, Object>> getUserSubscribedNewsWithArticles(String userId) {
        List<String> publishers = subscriptionRepository.findByUserId(userId);
        if (publishers.isEmpty()) {
            return Collections.emptyList();
        }

        List<Articles> articles = subscriptionRepository.findByPublishers(publishers);
        Map<String, List<Articles>> articlesByPublisher = articles.stream()
                .collect(Collectors.groupingBy(Articles::getPublisher));

        return publishers.stream()
                .map(publisher -> {
                    Map<String, Object> publisherMap = new HashMap<>();
                    publisherMap.put("publisherName", publisher);
                    publisherMap.put("articles", articlesByPublisher.getOrDefault(publisher, Collections.emptyList()));
                    return publisherMap;
                })
                .collect(Collectors.toList());
    }
}
