// ================================
//        OSON MASALALAR (7 ta)
// ================================

// 1-masala
// Berilgan arrayga bitta qiymat qo‘shing.
// Foydalanish: push()
//   // Qani yozingchi bu qiymatni oxiriga 👀
// function addToEnd(arr, value) {
//   arr.push(value)
//   return arr
// }
// console.log(addToEnd([1,2,3,4,5],9));


// 2-masala
// Arrayning oxirgi elementini olib tashlang.
// Foydalanish: pop()
//   // Kim oxirgi? Yozmayman, siz toping 😉
// function removeLast(arr) {

//   arr.pop();
//   return arr
// }
// console.log(removeLast([1,2,3,4]));

// 3-masala
// Array boshiga yangi element qo‘shing.
// Foydalanish: unshift()
// function addToStart(arr, value) {
//   // Boshidan boshlab yuramiz, yozingchi 👀
//   arr.unshift(value);
//   return arr
// }
// console.log(addToStart(["Yahshi!"],"Qale?"));

// 4-masala
// Arrayning birinchi elementini olib tashlang.
// Foydalanish: shift()
// function removeFirst(arr) {
//   // Peshqadamni haydamoqchimisiz? Kod bilan bajaring 💨
//   arr.shift();
//   return arr
// }
// console.log(removeFirst([1,2,3,4,5],));

// 5-masala
// Stringdagi bo‘sh joylarni olib tashlang.
// Foydalanish: trim()
// function cleanString(str) {
//     // Tarash-tarash, tozalab tashlang ✂️
//   return str.trim();
// }

// console.log(cleanString("botirjon          "));


// 6-masala
// Berilgan string katta harflarga o‘tkazilsin.
// Foydalanish: toUpperCase()
// function shout(str) {
//   // Qichqiring! Lekin faqat kod bilan 🙃
//    return str.toUpperCase();
// }

// console.log(shout("qalesiz?"));
   

// 7-masala
// Massivda qiymat bor-yo‘qligini tekshirish — includes()
// function hasValue(arr,value) {
//   // Bor yo‘q, tekshiring... lekin kod bilan 🔍
//   return arr.includes(value);
// }
// console.log(hasValue([1,2,3,4],3));


// // ================================
// //     O‘RTACHA DARAJADAGI MASALALAR (7 ta)
// // ================================

// 8-masala
// Berilgan so‘z "a" harfi bilan boshlanishini tekshiring.
// Foydalanish: startsWith()
// function startsWithA(str) {
//   // Harflarning sardori kimligini aniqlang 👑
//   return str.startsWith("a")
  

// }
// console.log(startsWithA("Hello-Privetovich"));

// 9-masala
// Berilgan array ichida "apple" borligini aniqlang.
// Foydalanish: includes()
// function containsApple(arr) {
//   // Meva ichidan olmani toping 🍎
//   return arr.includes("apple");
// }
// console.log(containsApple("apple","ananas","olcha  "));


// 10-masala
// Object ichidagi barcha kalitlarni arrayga aylantiring.
// Foydalanish: Object.keys()
// function getKeys(obj) {
//   // Kalitni toping, eshikni oching! 🗝️
//   return Object.keys(obj)
// }
// const ishi = {name:"Qarshibek",job:"Nonchi"};
// console.log(getKeys(ishi));

// 11-masala
// Object ichidagi barcha qiymatlarni arrayga o‘tkazing.
// Foydalanish: Object.values()
// function getValues(obj) {
//   // Qiymat izlaymiz 💸
//     return Object.values(obj)
// }
// const ishi = {job:"Nonchi",name:"Qarshibek"};
// console.log(getValues(ishi));


//  12-masala
//  String ichidagi barcha bo‘sh joylarni olib tashlang.
//  Foydalanish: replaceAll(" ", "")
// function removeSpaces(str) {
//     // Joy yo‘q, harf ko‘p! 🔡
//   return str.replaceAll(" ", "");
// }
// console.log(removeSpaces("Zubayr Yomon bola, lekin chidasa boladi"));

// // 13-masala
// // Arrayning teskari ko‘rinishini qaytaring.
// // Foydalanish: reverse()
// function reverseArray(arr) {
//   // Orqaga buriling, orqagaaa! ↩️
// return arr.reverse()
// }
// console.log(reverseArray([1,2,3,4,5,6,7]));

// // 14-masala 
// // Object.entries orqali objectni key-value arrayga aylantiring.
// // Foydalanish: Object.entries()
// function objectToEntries(obj) {
//   // Har bir kalit-qiymatni juftlab oling 👯
//     return Object.entries(obj);
// };
// console.log(objectToEntries({ name: "Ali", age: 25 }));

// // ================================
// //         QIYIN MASALALAR (7 ta)
// // ================================

// 15-masala
// Object ichida "admin" degan key bormi?
// Foydalanish: hasOwnProperty()
// function hasAdmin(obj) {

//   // Hali ham yashirinib yurgan adminni toping 🔐
//     return obj.hasOwnProperty("admin");
// };
// console.log(hasAdmin({ name: "Ali", admin: true }));


// // 16-masala
// // Stringning oxirgi 3 ta harfini ajrating.
// // Foydalanish: slice()
// function lastThree(str) {
//   // Oxirgi uchlikni e'tiborsiz qoldirmang 🎯
// return str.slice(0 , 4)
// }
// console.log(lastThree("Sasiq"));

// // // 18-masala
// // // Stringni ichidagi har bir bo‘shliqdan keyin vergul qo‘shing.
// // Masalan: "salom dunyo" => "salom, dunyo"
// function addComma(str) {
//   // Gaplar orasiga chiroyli nuqta-vergullar qo‘shamiz ✒️
// return str.replace("salom dunyo","salom,dunyo")
// }
// console.log(addComma("salom,dunyo"));

// // 19-masala
// // Massivda oxirgi bolib qayerda "banana" turganini toping.
// // Foydalanish: lastIndexOf()
// function lastBananaIndex(arr) {
//   // Oxirgisi qayerda? Bananalardan shubhalanamiz 🍌
//   return arr.lastIndexOf("banana");
// };
// console.log(lastBananaIndex(["apple", "manga", "orange", ,"banana"]));



// // 20-masala
// // Massivda 2-dan 5-gacha bo‘lgan elementlarni kesib oling.
// // Foydalanish: slice()
// function sliceMiddle(arr) {
//   // O‘rtadagi bo‘limni ajratib oling 📦
// return arr.slice(1,5)
// };
// console.log(sliceMiddle([1,2,3,4,5,6,7,8,9,10]));


// // 21-masala
// // String ichida "javascript" so‘zini "JS" bilan almashtiring.
// // Foydalanish: replaceAll()
// function shortenJS(str) {
//   // Uzun so‘zlardan qutulamiz, qisqacha ayting 🧠
//   return str.replaceAll("javascript", "JS");
// };
// console.log(shortenJS("Man javascriptni organayapman, javascript juda zor til"));

