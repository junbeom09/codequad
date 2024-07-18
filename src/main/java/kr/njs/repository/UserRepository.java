package kr.njs.repository;

import kr.njs.entity.User;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface UserRepository {

    void Joinuser(User user);

    void userUpdate(User user);
}


