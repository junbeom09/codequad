    package kr.njs.entity;
    import lombok.AllArgsConstructor;
    import lombok.Data;
    import lombok.NoArgsConstructor;

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public class Articles {

        private String at_title; // 기사 제목
        private String at_content; //  기사 내용
        private String at_url; // 기사 경로
        private String at_created; // 기사 작성일
        private int at_cate; // 카테고리
        private String category_name; // 카테고리 이름
        private String publisher; // 언론사

    }
