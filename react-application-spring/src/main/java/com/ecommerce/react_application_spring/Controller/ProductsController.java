package com.ecommerce.react_application_spring.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import com.ecommerce.react_application_spring.Model.Products;
import com.ecommerce.react_application_spring.Repository.ProductsRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;



@RestController
public class ProductsController {
    @Autowired
    private ProductsRepository productsRepository;
    
    @PostMapping("/product")
    public Products createProduct(@RequestBody Products newProduct) {
        return productsRepository.save(newProduct);
    }

    @GetMapping("/products")
    public List<Products> getProducts() {
        return productsRepository.findAll();
    }
    
    
}
