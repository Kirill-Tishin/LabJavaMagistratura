package com.tishin.lab.sersices;

import com.tishin.lab.entity.Cafe;
import com.tishin.lab.repository.CafeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CafeService {
    private CafeRepository cafeRepository;

    @Autowired
    public CafeService(CafeRepository cafeRepository){
        this.cafeRepository = cafeRepository;
    }

    public Cafe saveCafe(Cafe cafe){
        return cafeRepository.save(cafe);
    }

    public void deleteCafe(Cafe cafe){
        cafeRepository.delete(cafe);
    }

    public void deleteById(long id){
        cafeRepository.deleteById(id);
    }

    public Cafe getCafe(long id){
        return cafeRepository.getOne(id);
    }

    public List<Cafe> getAllCafe(){
        return cafeRepository.findAll();
    }
}