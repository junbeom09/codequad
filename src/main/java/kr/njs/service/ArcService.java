package kr.njs.service;

import kr.njs.entity.Articles;
import kr.njs.repository.ArcRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ArcService {

    @Autowired
    private final ArcRepository arcRepository;

    public List<Articles> Arclist() {
        List<Articles> articles = arcRepository.Arclist();
        return articles;
    }

    public List<Articles> getArticlesByCategory(int categoryId) {
        return arcRepository.findByCategory(categoryId);
    }

    public List<Articles> getArticlesByPublisher(String publisher) {
        return arcRepository.findByPublisher(publisher);
    }

    public List<Articles> searchArticlesByCategoryAndKeyword(String keyword) {
        return arcRepository.searchByKeyword(keyword);
    }
}
