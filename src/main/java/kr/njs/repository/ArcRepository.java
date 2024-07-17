package kr.njs.repository;

import kr.njs.entity.Articles;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface ArcRepository {
    void Arclist(Articles articles);
}
