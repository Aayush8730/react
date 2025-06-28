import express from "express"

const app = express()

const port  =  process.env.PORT || 3000

const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    price: 799,
    category: "Electronics",
    image: "https://example.com/images/mouse.jpg",
    stock: 25,
    description: "Ergonomic wireless mouse with 2.4GHz connectivity."
  },
  {
    id: 2,
    name: "Bluetooth Speaker",
    price: 1499,
    category: "Electronics",
    image: "https://example.com/images/speaker.jpg",
    stock: 15,
    description: "Compact speaker with deep bass and Bluetooth 5.0."
  },
  {
    id: 3,
    name: "Smartwatch",
    price: 2999,
    category: "Wearables",
    image: "https://example.com/images/smartwatch.jpg",
    stock: 10,
    description: "Track your fitness with this stylish smartwatch."
  },
  {
    id: 4,
    name: "Laptop Stand",
    price: 999,
    category: "Accessories",
    image: "https://example.com/images/stand.jpg",
    stock: 30,
    description: "Aluminum laptop stand for better posture and cooling."
  },
  {
    id: 5,
    name: "Running Shoes",
    price: 2499,
    category: "Footwear",
    image: "https://example.com/images/shoes.jpg",
    stock: 20,
    description: "Breathable shoes for daily workouts and running."
  },
  {
    id: 6,
    name: "Graphic T-Shirt",
    price: 599,
    category: "Clothing",
    image: "https://example.com/images/tshirt.jpg",
    stock: 50,
    description: "Soft cotton t-shirt with unique graphic prints."
  },
  {
    id: 7,
    name: "Wired Earphones",
    price: 299,
    category: "Electronics",
    image: "https://example.com/images/earphones.jpg",
    stock: 60,
    description: "Tangle-free wired earphones with clear sound."
  },
  {
    id: 8,
    name: "Office Chair",
    price: 4999,
    category: "Furniture",
    image: "https://example.com/images/chair.jpg",
    stock: 5,
    description: "Comfortable ergonomic chair for long sitting hours."
  },
  {
    id: 9,
    name: "Notebook",
    price: 99,
    category: "Stationery",
    image: "https://example.com/images/notebook.jpg",
    stock: 200,
    description: "Ruled notebook with 200 pages for everyday writing."
  },
  {
    id: 10,
    name: "Pen Set",
    price: 149,
    category: "Stationery",
    image: "https://example.com/images/pens.jpg",
    stock: 300,
    description: "Set of 5 smooth-writing gel pens."
  },
  {
    id: 11,
    name: "Water Bottle",
    price: 299,
    category: "Home & Kitchen",
    image: "https://example.com/images/bottle.jpg",
    stock: 80,
    description: "Stainless steel bottle that keeps drinks cool for 12 hours."
  },
  {
    id: 12,
    name: "Wall Clock",
    price: 799,
    category: "Home Decor",
    image: "https://example.com/images/clock.jpg",
    stock: 18,
    description: "Minimalist wall clock with silent sweep mechanism."
  },
  {
    id: 13,
    name: "Sunglasses",
    price: 899,
    category: "Accessories",
    image: "https://example.com/images/sunglasses.jpg",
    stock: 40,
    description: "UV-protected stylish sunglasses for men and women."
  },
  {
    id: 14,
    name: "Backpack",
    price: 1599,
    category: "Bags",
    image: "https://example.com/images/backpack.jpg",
    stock: 25,
    description: "Durable and spacious backpack for travel or college."
  },
  {
    id: 15,
    name: "Portable Charger",
    price: 1299,
    category: "Electronics",
    image: "https://example.com/images/powerbank.jpg",
    stock: 22,
    description: "10000mAh power bank with fast charging support."
  },
  {
    id: 16,
    name: "Desk Lamp",
    price: 499,
    category: "Home Decor",
    image: "https://example.com/images/lamp.jpg",
    stock: 15,
    description: "LED desk lamp with adjustable brightness settings."
  },
  {
    id: 17,
    name: "Fitness Band",
    price: 1999,
    category: "Wearables",
    image: "https://example.com/images/band.jpg",
    stock: 13,
    description: "Track steps, calories, and heart rate with this band."
  },
  {
    id: 18,
    name: "Cooking Pan",
    price: 749,
    category: "Home & Kitchen",
    image: "https://example.com/images/pan.jpg",
    stock: 17,
    description: "Non-stick pan ideal for all types of cooking."
  },
  {
    id: 19,
    name: "LED Strip Lights",
    price: 699,
    category: "Electronics",
    image: "https://example.com/images/led.jpg",
    stock: 14,
    description: "Color-changing LED lights with remote control."
  },
  {
    id: 20,
    name: "Face Wash",
    price: 199,
    category: "Personal Care",
    image: "https://example.com/images/facewash.jpg",
    stock: 90,
    description: "Refreshing face wash for all skin types."
  }
];

app.get("/products" , function(req,res){
    const search = req.query.search;
    if(search){
       const filteredProducts = products.filter((product)=>{
          return product.category.toLowerCase().includes(search) || product.description.toLowerCase().includes(search)
       })
       if(filteredProducts.length === 0){
          res.send("product not found..try search with different keyword")
       }
       res.json(filteredProducts)
    }
    else{
      res.send("product not found..try search with different keyword")
    }
})
app.listen(port , ()=>{
  console.log(`Server running on port ${port}`)
})
