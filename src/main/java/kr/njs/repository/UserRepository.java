package kr.njs.repository;

import kr.njs.entity.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;

@Repository
@Mapper
public interface UserRepository {

    void Joinuser(User user);

    void userUpdate(User user);

    User findByIdAndPassword(@Param("us_id") String us_id, @Param("us_password") String us_password);

    void updateLastLogoutTime(@Param("userId") String userId, @Param("logoutTime") LocalDateTime logoutTime);

    Boolean idIdExists(String id);
}




