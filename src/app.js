//typescript -> tip güvenli --> JavaScript'e çevriliyor ve js'yi tip güvenli yapar
//Single Page Application için kullanılır -> React - vue - angular
//State managment'ı daha etkili bir hale getirebilmek için state pattern kullanırız -> Redux mesela

//Kullanabileceğimiz değişkenler var -> temel JS de sadece bu var, let , const -> let ve const type safe

let student = {id:1,name:"Eren"}
console.log(student)

function save(parameter,puan=12) { //puan=12 default değerdir ve default parametreler sona yazılır
   console.log(parameter.name + " : " + puan) // Eren : 12 
}
save(student)
// !! undefined -> ortada yok , null -> referansı yok


let students = ["Engin Demiroğ","Eren Nokta","Ahmet Yeşil"] //array tanımı

console.log(students)

let students2 = [student,{id:2,name:"Mehmet"},"Ankara",{city:"Istanbul"},564]

console.log(students2)

// -- Rest -- 

let showProducts = function (id,...products){ //...  demek ---> varargs demek aslında --> ...products bir array olarak düşünülebilir
    console.log(id)
    console.log(products) // products[1] gibi bir şey de yazabilirsin sonuçta array sayılıyor
}
showProducts(10,"Elma","Mahmut","Hareket")

// -- Spread --

let points = [1,2,15,21,51,72]
console.log(...points) // Bu hamle ile bir array'i ayrıştırabiliriz --> 1 2 15 21 51 72 şeklinde yazdırdık
console.log(Math.max(...points)) //normalde math.max bir array istemez fakat ...points ile bu array'i oraya ayrıştırdık ve çalıştı

console.log(..."ABC","D",..."EFG","H",..."STRING") //Stringler de bir charArray sayıldığından ... ile ayrıştırabildik

// -- Destructuring -- -->React hooks'ta sıklıkla kullanılır --> Elimizdeki array'in değerlerini değişkenlere atama yöntemidir

let populations = [10000,20000,30000,[40000,100000]]
let [small,medium,high,[veryHigh,maximum]] = populations // populations array'ini sırasıyla small medium high'a ata demek // Eğer array varsa burda da array kullanman lazım ki doğru atasın
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunc([small1],number) { // bize gelen array'in ilk elemanının small1 e atadık
    console.log(small1)
}
someFunc(populations)

//Obje Destructuring
let category = {id:1,name:"İçecek"}

console.log(category.id);
console.log(category["name"]); //category.name demek aynı şey

let {id,name} = category  //Bu sayede destructuring yaptık
console.log(id)
console.log(name)


