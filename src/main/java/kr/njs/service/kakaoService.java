package kr.njs.service;

import com.google.gson.JsonElement;
import com.google.gson.JsonParser;
import kr.njs.repository.kakaoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

@Service
@RequiredArgsConstructor
public class kakaoService {
    private final RestTemplate restTemplate;
    private final kakaoRepository kakaorepository;

    @Value("${kakao.client-id}")
    private String clientId;

    @Value("${kakao.redirect-uri}")
    private String redirectUri;

    public String getAccessToken(String code) {
        String accessTokenUrl = "https://kauth.kakao.com/oauth/token";

        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("grant_type", "authorization_code");
        params.add("client_id", clientId);
        params.add("redirect_uri", redirectUri);
        params.add("code", code);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        HttpEntity<MultiValueMap<String, String>> kakaoTokenRequest =
                new HttpEntity<>(params, headers);

        ResponseEntity<String> response = restTemplate.exchange(
                accessTokenUrl,
                HttpMethod.POST,
                kakaoTokenRequest,
                String.class
        );

        JsonElement element = JsonParser.parseString(response.getBody());
        return element.getAsJsonObject().get("access_token").getAsString();
    }

    public String getNicknameAndSave(String accessToken) {
        String userInfoUrl = "https://kapi.kakao.com/v2/user/me";

        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Bearer " + accessToken);
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        HttpEntity<MultiValueMap<String, String>> kakaoUserInfoRequest = new HttpEntity<>(headers);

        ResponseEntity<String> response = restTemplate.exchange(
                userInfoUrl,
                HttpMethod.POST,
                kakaoUserInfoRequest,
                String.class
        );

        JsonElement element = JsonParser.parseString(response.getBody());
        Long id = element.getAsJsonObject().get("id").getAsLong();
        JsonElement kakaoAccount = element.getAsJsonObject().get("kakao_account");
        JsonElement profile = kakaoAccount.getAsJsonObject().get("profile");
        String profile_nickname = profile.getAsJsonObject().get("nickname").getAsString();

        kakaorepository.saveUser(id, profile_nickname);

        return profile_nickname;
    }
}