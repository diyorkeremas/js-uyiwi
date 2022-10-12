let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
let btn3 = document.querySelector('.btn3')

btn1.addEventListener("click", function() {
    let yosh = prompt('Yoshingizni kiriting')
    if(18 < yosh){
        alert('HTML HAQIDAGI SAVOLLARGA JAVOB BERING')
        console.log(prompt('Html yorligi yoki html elementi nima'));
        console.log(prompt('Nega url lar kopincha slash bilan yakunlanadi'));
        console.log(prompt('Html joy yorligi bormi'));
        console.log(prompt('Index.html sahifasi nima'));
    }
    else {
        alert('yoshakansanu patsan')
    }
})
btn2.addEventListener("click", function() {
    let yosh = prompt('Yoshingizni kiriting')
    if(18 < yosh){
        alert('CSS HAQIDAGI SAVOLLARGA JAVOB BERING')
        console.log(prompt('CSS uslublar sahifasi faylini nima nomlash kerak'));
        console.log(prompt('Css tanlovchilari uchun vergul nima'));
        console.log(prompt('Css da umumiy shrift oilalari nima'));
        console.log(prompt('Css da nimani anglatadi'));
    }
    else {
        alert('yoshakansanu patsan')
    }
})
btn3.addEventListener("click", function() {
    let yosh = prompt('Yoshingizni kiriting')
    if(18 < yosh){
        alert('JAVA SCRIPT HAQIDAGI SAVOLLARGA JAVOB BERING')
        console.log(prompt('Java script ozi nima'));
        console.log(prompt('Java script qanday til'));
        console.log(prompt('Java scrip kodlari orqali nima qb bomidi'));
        console.log(prompt('Bu til kodlari ishlash tezligi qandau'));
    }
    else {
        alert('yoshakansanu patsan')
    }
})