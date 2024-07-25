package kr.njs.service;

import kr.njs.entity.Articles;
import kr.njs.repository.ArcRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor

public class ArcService {

    @Autowired
    private ArcRepository arcRepository;

    public List<Articles> Arclist() {
        List<Articles> articles = arcRepository.Arclist();
//        System.out.println("Articles: " + articles); // 디버깅 용도
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

    public List<Articles> getNewsByNewsAgencies(List<Integer> newsAgencyIds) {
        return newsAgencyIds.stream()
                .flatMap(id -> arcRepository.findByPublisher(String.valueOf(id)).stream())
                .collect(Collectors.toList());
    }



}
