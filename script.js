var products = [
  {
    id:0,
    name:"Apples",
    price:"2.99",
    image:"https://banner2.kisspng.com/20180310/jyw/kisspng-plum-tomato-apple-fuji-vector-two-apples-5aa49732abbf96.2950483615207360507035.jpg",
    color:"red"
  },
  {
    id:1,
    name:"Bananas",
    price:"2.50",
    image:"https://icon2.kisspng.com/20180125/cyq/kisspng-banana-powder-fruit-cavendish-banana-banana-5a6a705e555d06.3110857015169250223497.jpg",
    color:"gold"
  },
  {
    id:2,
    name:"oranges",
    price:"3.50",
    image: "https://icon2.kisspng.com/20180308/wlw/kisspng-south-africa-blood-orange-mandarin-orange-tangelo-south-africa-imports-of-oranges-5aa10d936cc6c7.6226563815205042114456.jpg",
    color:"orange"
  }
];

function popUp(id){
 this.productEle = document.createElement("div");
  this.popUpImageEle= document.createElement("img");
  this.popUpNameEle= document.createElement("div");
  this.popUpPriceEle= document.createElement("div");
  this.productEle.classList.add("popUp");
   var that = this;
  
  
  
    this.popUpImageEle.src = products[id].image;
  this.popUpNameEle.innerHTML= "Name: "+ products[id].name;
  this.popUpPriceEle.innerHTML= "Price: "+ products[id].price;
    this.productEle.addEventListener("click", function(){
    that.productEle.style.display ="none";
  });
  
  
  
  
    this.productEle.appendChild(this.popUpImageEle);
  this.productEle.appendChild(this.popUpNameEle);
  this.productEle.appendChild(this.popUpPriceEle);
  document.body.appendChild(this.productEle);
  
}

function fruits(){
  this.fruit =[];
  
  for(var i=0; i<products.length; i++){
    this.fruit.push(new product(products[i].name, products[i].price, products[i].image, i)); 
  }
  
}

function product(name, price, image, id){
  var that = this;
  
  this.price = price;
  this.name = name;
  this.wrapperEle = document.createElement("div");
  this.imageEle= document.createElement("img");
  this.nameEle= document.createElement("div");
  this.priceEle= document.createElement("div");
  this.wrapperEle.classList.add("product");
  
  
    this.wrapperEle.addEventListener("mouseout", function(){
    that.wrapperEle.style.borderColor= "black";
  });
  
  
   this.wrapperEle.addEventListener("mouseover", function(){
    that.wrapperEle.style.borderColor= products[id].color;
  });
  
   this.wrapperEle.addEventListener("click", function(){
    var pop = new popUp(id);
  });
  
    this.imageEle.src = image;
  this.nameEle.innerHTML= "Name: "+ name;
  this.priceEle.innerHTML= "Price: "+ price;
  
    this.wrapperEle.appendChild(this.imageEle);
  this.wrapperEle.appendChild(this.nameEle);
  this.wrapperEle.appendChild(this.priceEle);
  document.body.appendChild(this.wrapperEle);
  
}

  var display = new fruits();