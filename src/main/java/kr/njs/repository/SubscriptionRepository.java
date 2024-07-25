package kr.njs.repository;

import kr.njs.entity.Subscription;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface SubscriptionRepository {

    Subscription findByUserIdAndUcCate(@Param("userId") String userId, @Param("ucCate") Integer ucCate);

    void insert(Subscription subscription);

    void delete(Subscription subscription);

    List<Integer> findByUserId(@Param("userId") String userId);
}