package kr.njs.request;

import lombok.Data;

@Data
public class PublisherRequest {
    private String publisher;

    public String getPublisher() {
        return publisher;
    }

    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }
}

