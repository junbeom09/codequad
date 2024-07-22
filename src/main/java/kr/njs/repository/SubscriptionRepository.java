package kr.njs.repository;

import kr.njs.entity.Subscription;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface SubscriptionRepository {

    List<Integer> findCategoriesByUserId(@Param("user_id") String user_id);

    void deleteByUserIdAndUcCate(@Param("user_id") String user_id, @Param("uc_cate") int uc_cate);

    void insert(Subscription subscription);
}