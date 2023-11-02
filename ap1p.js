// ödev , vize , final

function gecerliGirdi(not) {

    return not >= 0 && not <= 100 && !isNaN(not)
}
let odev = Number(prompt("Ödev Notunuzu Giriniz."));
let vize = Number(prompt("Vize Notunuzu Giriniz."));
let final = Number(prompt("Final Notunuzu Giriniz"));


if (gecerliGirdi(odev) && (gecerliGirdi(vize)) && (gecerliGirdi(final))) {
    let average = (odev * 0.15) + (vize * 0.35) + (final * 0.50);

    if (average >= 85) {
        alert("Harf Notunuz AA");
    } else if (average >= 75) {
        alert("Harf Notunuz BA");
    } else if (average >= 70) {
        alert("Harf Notunuz BB");
    } else {
        alert("Harf Notunuz BB altinda kaldi");
    }
} else {
    alert("Lütfen 1-100 arasinda geçerli bir sayi giriniz.");
}



