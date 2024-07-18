package kr.njs.repository;

import kr.njs.entity.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface UserRepository {

    void Joinuser(User user);

    void userUpdate(User user);

    User findByIdAndPassword(@Param("us_id") String us_id, @Param("us_password") String us_password);
}


