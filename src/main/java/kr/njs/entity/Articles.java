    package kr.njs.entity;
    import lombok.AllArgsConstructor;
    import lombok.Data;
    import lombok.NoArgsConstructor;

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public class Articles {
    
        private int arti_id; // 기사 아이디
        private String arti_title; // 기사 제목
        private String arti_content; //  기사 내용
        private String arti_pic; // 기사 사진 경로
        private int arti_cate; // 카테고리
        private String arti_created; // 기사 작성일
        private String publisher; // 언론사
        private String arti_url; // 기사 원문 링크
        

    }
