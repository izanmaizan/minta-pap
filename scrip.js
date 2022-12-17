
  async function menuju(){await swals.fire('OK!', 'Kirim pesan ke WhatsApp aku, ya!', 'success');window.location = "https://api.whatsapp.com/send?phone=082288379878&text=" + pesanwhatsapp;Tombol.style="margin-top:15px;opacity:1;transform: scale(1);";}

  const swalst = Swal.mixin({timer: 2777, allowOutsideClick: false, showConfirmButton: false, timerProgressBar: true, imageHeight: 100,}); const swals = Swal.mixin({allowOutsideClick: false, cancelButtonColor: '#FF0040', imageWidth: 100, imageHeight: 100,}); const body = document.querySelector("body");function createHeart() {const heart = document.createElement("div"); heart.className = "fas fa-heart"; heart.style.left = (Math.random() * 90)+"vw"; heart.style.animationDuration = (Math.random()*3)+2+"s"; body.appendChild(heart);} setInterval(function name(params) {var heartArr = document.querySelectorAll(".fa-heart"); if (heartArr.length > 100) {heartArr[0].remove()}},100); ftom=0;jikatom=0;ftganti=0;fungsi=0;
  
  function mulaikonten() {
    setTimeout(fmketik1,50);setTimeout(mketik1,50);
    setTimeout(fmketik2,1800);setTimeout(mketik2,1800);
    setTimeout(fmketik3,3250);setTimeout(mketik3,3250);
    setTimeout(fmketik4,5000);setTimeout(mketik4,5000);
    setTimeout(fmketik5,5900);setTimeout(mketik5,5900);
    setTimeout(fmketik6,6750);setTimeout(mketik6,6750);
  }
  
  async function jawab(){
  var { value: jawaban } = await swals.fire({
    title: 'Tulis Pesan &#128073;&#128072;', input: 'text', allowOutsideClick: false, showCancelButton: false,
  });
  if(jawaban && jawaban.length < 19){
    window.jawaban = jawaban;
    pesanwhatsapp = jawaban;
    balasan = jawaban;
    otomatis3();setTimeout(stakhir,1000);
  } else {
    await swals.fire('Ups!', 'Jawaban tidak boleh kosong atau lebih dari 18 karakter, ya!');jawab();
  }
}
