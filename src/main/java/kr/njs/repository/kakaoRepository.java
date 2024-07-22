package kr.njs.repository;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface kakaoRepository {

    void saveUser(@Param("id") Long id, @Param("nickname") String nickname);
    String getNicknameById(Long id);

}


