package com.tishin.lab.sersices;

import com.tishin.lab.entity.Product;
import com.tishin.lab.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    private ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository){
        this.productRepository = productRepository;
    }

    public Product saveProduct(Product product){
        return productRepository.save(product);
    }

    public void deleteProduct(Product product){
        productRepository.delete(product);
    }

    public void deleteById(long id){
        productRepository.deleteById(id);
    }

    public Product getProduct(long id){
        return productRepository.getOne(id);
    }

    public List<Product> getAllProduct(){
        return productRepository.findAll();
    }
}
