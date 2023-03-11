export function intToRupiah(hargaBaru) {
   if (!hargaBaru) {
      return "";
    }
   let rupiah = "";
   const balikAngka = hargaBaru.toString().split("").reverse().join("");
 
   for (let i = 0; i < balikAngka.length; i++) {
     //jika i mod 3 = 0, maka tambahkan tanda koma
     if (i % 3 == 0) rupiah += balikAngka.substring(i, i + 3) + ".";
   }
 
   return rupiah
     .split("", rupiah.length - 1)
     .reverse()
     .join("");
 }