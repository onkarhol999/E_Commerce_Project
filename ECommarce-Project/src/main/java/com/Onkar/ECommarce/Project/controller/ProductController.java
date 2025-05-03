package com.Onkar.ECommarce.Project.controller;

import com.Onkar.ECommarce.Project.model.Product;
import com.Onkar.ECommarce.Project.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProductController {

    @Autowired
    private ProductService service;

    @PostMapping("/addProduct")
    public Product addProduct(@RequestBody Product product){
        return service.addProduct(product);
    }

    @GetMapping("/getProducts")
    public List<Product> getAllProduct(){
        return service.getAllProdcut();
    }

    @GetMapping("/product/{id}")
    public Product getProductById(@PathVariable Integer id){
        return service.getProdcutById(id);
    }
}
