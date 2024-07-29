package kr.njs.repository;

import kr.njs.entity.Articles;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Mapper
public interface ArcRepository {

    List<Articles> Arclist();

    List<Articles> findByCategory(@Param("categoryId") int categoryId);

    List<Articles> findByPublisher(@Param("publisher") String publisher);

    List<Articles> searchByKeyword(@Param("keyword") String keyword);
}
