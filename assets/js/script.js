let tahmin = document.querySelector("#tahmin");
let test = document.querySelector("#test");
let tahminEtti = document.querySelector("#tahmin-etti");
let tahminInfo = document.querySelector("#tahmin-info");
let tahminKalan = document.querySelector("#tahmin-kalan");
let newGame = document.querySelector("#new-game");

newGame.addEventListener("click", () => {
    test.disabled = false;
    tahmin.disabled = false;
     kalan = 10;
    tahminInfo.innerHTML = 'Bir sayı Tahmin Et!';
    tahminKalan.innerHTML = kalan; 
    tahminEtti.innerHTML = '';
    tahmin.value = '';
    let sayi = Math.floor(Math.random() * 100) + 1;
    console.log(sayi);

})

let kalan = 10;
tahminKalan.innerHTML = kalan;
let sayi = Math.floor(Math.random() * 100) + 1;
test.addEventListener("click", ()=>{

    if (tahmin.value >100) {
        alert("100'den küçük bir sayı girin")
    }
    else{

        if (tahmin.value > sayi) {
            tahminEtti.innerHTML = tahmin.value;
            tahminInfo.innerHTML = 'Daha küçük bir sayı girin!';
            kalan -=1;
            tahminKalan.innerHTML = kalan;
        }
        else if(tahmin.value == sayi){
            tahminEtti.innerHTML = tahmin.value;
            tahminInfo.innerHTML = 'Tebrikler Doğru Tahmin!!!';
            tahminKalan.innerHTML = kalan;
            
        }
        else{
            tahminEtti.innerHTML = tahmin.value;
            tahminInfo.innerHTML = 'Daha büyük bir sayı girin!';
            kalan -=1;
            tahminKalan.innerHTML = kalan;
        }
        
    }


if (kalan <= 0) {
    test.disabled = true;
    tahmin.disabled = true;
    tahminInfo.innerHTML = ' HİÇ TAHMİN HAKKIN KALMADI KAYBETTİN!!!';
}


})

