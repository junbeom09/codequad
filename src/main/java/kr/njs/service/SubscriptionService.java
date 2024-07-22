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

    public void subscribeToCategory(String user_id, int uc_cate) {
        Subscription subscription = new Subscription();
        subscription.setUser_id(user_id);
        subscription.setUc_cate(uc_cate);
        subscriptionRepository.insert(subscription);
    }

    public void unsubscribeFromCategory(String user_id, int uc_cate) {
        subscriptionRepository.deleteByUserIdAndUcCate(user_id, uc_cate);
    }

    public List<Integer> getUserSubscriptions(String user_id) {
        return subscriptionRepository.findCategoriesByUserId(user_id);
    }
}