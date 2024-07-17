package kr.njs.repository;

import kr.njs.entity.Articles;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Mapper
public interface ArcRepository {
    List<Articles> Arclist();
}
