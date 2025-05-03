package com.Onkar.ECommarce.Project.service;


import com.Onkar.ECommarce.Project.model.Product;
import com.Onkar.ECommarce.Project.repo.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepo repo;

    public Product addProduct(Product product) {
        repo.save(product);
        return product;
    }

    public List<Product> getAllProdcut() {
        return repo.findAll();
    }

    public Product getProdcutById(Integer id) {
        return repo.findById(id).get();
    }
}
