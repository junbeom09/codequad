package kr.njs.service;

import kr.njs.entity.Subscription;
import kr.njs.repository.SubscriptionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SubscriptionService {

    private final SubscriptionRepository subscriptionRepository;

    public void subscribeToNewsAgency(String userId, Integer newsAgencyId) {
        if (subscriptionRepository.findByUserIdAndUcCate(userId, newsAgencyId) != null) {
            throw new RuntimeException("Already subscribed to this news agency");
        }

        Subscription subscription = new Subscription();
        subscription.setUser_id(userId);
        subscription.setUc_cate(newsAgencyId);
        subscriptionRepository.insert(subscription);
    }

    public void unsubscribeFromNewsAgency(String userId, Integer newsAgencyId) {
        Subscription subscription = subscriptionRepository.findByUserIdAndUcCate(userId, newsAgencyId);
        if (subscription == null) {
            throw new RuntimeException("Subscription not found");
        }
        subscriptionRepository.delete(subscription);
    }

    public List<Integer> getUserSubscriptions(String userId) {
        return subscriptionRepository.findByUserId(userId);
    }
}