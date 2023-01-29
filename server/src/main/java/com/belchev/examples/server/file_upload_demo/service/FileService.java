package com.belchev.examples.server.file_upload_demo.service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
public class FileService {

    public void saveFile(MultipartFile file) {
        try {
            if (!file.isEmpty()) {
                byte[] bytes = file.getBytes();
                Path path = Paths.get("./uploaded/" + file.getOriginalFilename());
                Files.write(path, bytes);
            }
        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }

}
