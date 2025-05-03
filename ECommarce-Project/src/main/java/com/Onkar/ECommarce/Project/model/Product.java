package com.Onkar.ECommarce.Project.model;

import jakarta.persistence.*;

@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String description;
    private Float price;
    private String brand;
    @Enumerated(EnumType.STRING) // Store Enum as a readable string, not ordinal number
    private ProductType anEnum;
    private String image;

    public Product(Integer id, String name, String description, Float price, String brand, ProductType anEnum, String image) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.brand = brand;
        this.anEnum = anEnum;
        this.image = image;
    }

    public Product() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Float getPrice() {
        return price;
    }

    public void setPrice(Float price) {
        this.price = price;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public ProductType getAnEnum() {
        return anEnum;
    }

    public void setAnEnum(ProductType anEnum) {
        this.anEnum = anEnum;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
