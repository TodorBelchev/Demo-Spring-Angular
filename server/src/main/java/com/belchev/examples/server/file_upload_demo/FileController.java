package com.belchev.examples.server.file_upload_demo;

import com.belchev.examples.server.file_upload_demo.dto.TestDTO;
import com.belchev.examples.server.file_upload_demo.service.FileService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping(path = "/file")
public class FileController {

    private final FileService fileService;

    public FileController(FileService fileService) {
        this.fileService = fileService;
    }

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public void createFilePart(
            @RequestPart("json") TestDTO jsonDTO,
            @RequestPart("file") MultipartFile file) {
        System.out.println(jsonDTO.getText());
        System.out.println(jsonDTO.getNumber());
        this.fileService.saveFile(file);
    }
}
