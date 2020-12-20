package com.tishin.lab.controllers;

import com.tishin.lab.entity.Cafe;
import com.tishin.lab.sersices.CafeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class CafeController {
    private CafeService cafeService;

    @Autowired
    public CafeController(CafeService cafeService){
        this.cafeService = cafeService;
    }

    @RequestMapping(value = "/cafe", method = RequestMethod.POST)
    public Cafe createCafe(@RequestBody Cafe cafe){
        return cafeService.saveCafe(cafe);
    }

    @RequestMapping(value = "cafe/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Object> deleteCafe(@PathVariable long id) {
        cafeService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @RequestMapping(value = "/cafe", method = RequestMethod.PUT)
    public Cafe updateCafe(@RequestBody Cafe cafe) {
        return cafeService.saveCafe(cafe);
    }

    @RequestMapping(value = "/cafe/{id}", method = RequestMethod.GET)
    public Cafe getCafe(@PathVariable long id) {
        return cafeService.getCafe(id);
    }

    @RequestMapping(value = "/cafe", method = RequestMethod.GET)
    public List<Cafe> getCafeAll() {
        return cafeService.getAllCafe();
    }
}