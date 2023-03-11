export function fullDate(dateStr) {
  const date = new Date(dateStr);
  const tahun = date.getFullYear();
  let bulan = date.getMonth();
  let tanggal = date.getDate();
  let hari = date.getDay();
  switch (hari) {
    case 0:
      hari = "Minggu";
      break;
    case 1:
      hari = "Senin";
      break;
    case 2:
      hari = "Selasa";
      break;
    case 3:
      hari = "Rabu";
      break;
    case 4:
      hari = "Kamis";
      break;
    case 5:
      hari = "Jum'at";
      break;
    case 6:
      hari = "Sabtu";
      break;
  }
  switch (bulan) {
    case 0:
      bulan = "Januari";
      break;
    case 1:
      bulan = "Februari";
      break;
    case 2:
      bulan = "Maret";
      break;
    case 3:
      bulan = "April";
      break;
    case 4:
      bulan = "Mei";
      break;
    case 5:
      bulan = "Juni";
      break;
    case 6:
      bulan = "Juli";
      break;
    case 7:
      bulan = "Agustus";
      break;
    case 8:
      bulan = "September";
      break;
    case 9:
      bulan = "Oktober";
      break;
    case 10:
      bulan = "November";
      break;
    case 11:
      bulan = "Desember";
      break;
  }

  return hari + ", " + tanggal + " " + bulan + " " + tahun;
}

export function isExppired(startDate, inputTimer) {
  const dateExpired = new Date(startDate.getTime() + inputTimer * 60000);
  const now = new Date();
  const difference = dateExpired - now;

  return difference < 120000; // jika lebih kecil satu menit maka expired
}

export function remainingTimer(startDate, inputTimer) {
  const dateExpired = new Date(startDate.getTime() + inputTimer * 60000);
  const difference = dateExpired - new Date();
  const diffInSec = Math.ceil(difference / 1000);
  const diffInMinute = Math.ceil(diffInSec / 60);

  return diffInMinute - 1;
}
