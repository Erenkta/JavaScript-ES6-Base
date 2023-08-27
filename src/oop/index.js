class Customer{
    //Değer atamak için prototip dediğimiz bir yapıyı kullanacağız
    constructor(id,customerNumber){
        this.id = id  // customer.id = id demek
        this.customerNumber = customerNumber
    }
}

let customer = new Customer();
console.log(customer.customerNumber) // Bu şekilde müşteri numarasını okuduk

class IndividualCustomer extends Customer{
    constructor(firstName,id,customerNumber){
        super(id,customerNumber)
        this.firstName = firstName
    }
}

class CorporateCustomer extends Customer{
    constructor(companyName,id,customerNumber){
        super(id,customerNumber)
        this.companyName = companyName
    }
}


// -- Map -- Filter -- Reduce --

let products = [
    {id:1,name:"Acer Laptop",unitPrice:15000},
    {id:2,name:"Asus Laptop",unitPrice:16000},
    {id:3,name:"Hp Laptop",unitPrice:13000},
    {id:4,name:"Dell Laptop",unitPrice:12000},
    {id:5,name:"Casper Laptop",unitPrice:17000},
]

//Map !! --> For each görevi görür
console.log("<ul>");
products.map(product => console.log(`<li>${product.name}</li>`)) // bu şekilde for each gibi hepsini dolaşıyoruz,
console.log("</ul>");

//Filter --> elimizdeki array'i filtreleyip yeni bir array döndürür !! referans değiştirmeye yarıyor ve referans değişirse ekran yeniden yüklenir ! bundan sık kullanılır
let filteredProducts = products.filter(product => product.unitPrice > 14000)
console.log(filteredProducts);

//Reduce
let cartTotal = products.reduce((acc,product) => acc + product.unitPrice,0) //işlem yapıp bir şeye atadık 
console.log(cartTotal)