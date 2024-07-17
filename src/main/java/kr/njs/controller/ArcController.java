package kr.njs.controller;

import kr.njs.entity.Articles;

import kr.njs.service.ArcService;
import kr.njs.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/api")
@Controller
@RequiredArgsConstructor

public class ArcController {

    private final ArcService arcservice;

}
