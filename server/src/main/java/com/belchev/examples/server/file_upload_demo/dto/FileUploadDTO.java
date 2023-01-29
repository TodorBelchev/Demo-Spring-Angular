package com.belchev.examples.server.file_upload_demo.dto;

import org.springframework.web.multipart.MultipartFile;

public class FileUploadDTO {

    private MultipartFile file;

    private String text;

    private Long number;

    public MultipartFile getFile() {
        return file;
    }

    public void setFile(MultipartFile file) {
        this.file = file;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Long getNumber() {
        return number;
    }

    public void setNumber(Long number) {
        this.number = number;
    }
}
