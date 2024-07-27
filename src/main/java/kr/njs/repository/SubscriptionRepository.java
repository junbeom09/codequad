package kr.njs.repository;

import kr.njs.entity.Subscription;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface SubscriptionRepository {

    Subscription findByUserIdAndUcPublisher(@Param("userId") String userId, @Param("ucPublisher") String ucPublisher);

    void insert(Subscription subscription);

    void delete(Subscription subscription);

    List<String> findByUserId(@Param("userId") String userId);
}
