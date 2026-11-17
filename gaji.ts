const inputNama = document.getElementById("nama") as HTMLInputElement;
const inputGajiPokok = document.getElementById("gajiPokok") as HTMLInputElement;
const inputJamLembur = document.getElementById("jamLembur") as HTMLInputElement;
const inputHariAbsen = document.getElementById("hariAbsen") as HTMLInputElement;
const btnHitung = document.getElementById("btnHitung") as HTMLButtonElement;
const hasilGaji = document.getElementById("hasilGaji") as HTMLParagraphElement;

function hitungGaji(): void {
    const nama: string = inputNama.value;
    const gajiPokok: number = Number(inputGajiPokok.value);
    const jamLembur: number = Number(inputJamLembur.value);
    const hariAbsen: number = Number(inputHariAbsen.value);

    const UPAH_LEMBUR: number = 25000;
    const POTONGAN_ABSEN: number = 100000;

    if (gajiPokok <= 0 || jamLembur <= 0 || hariAbsen <= 0) {
        hasilGaji.innerHTML = "Error: Data tidak valid.";
        return;
    }

    const gajiBersih: number = gajiPokok + (jamLembur * UPAH_LEMBUR) - (hariAbsen * POTONGAN_ABSEN);

    let status: string;
    if (hariAbsen === 0) {
        status = "Sangat Disiplin";
    } else if (hariAbsen <= 2) {
        status = "Disiplin";
    } else if (hariAbsen <= 4) {
        status = "Cukup Disiplin";
    } else if (hariAbsen <= 6) {
        status = "Kurang Disiplin";
    } else {
        status = "Perlu Pembinaan";
    }

    hasilGaji.innerHTML =
        "Nama: " + nama + "<br>" +
        "Gaji bersih: Rp" + gajiBersih + "<br>" +
        "Kedisiplinan: " + status;
}

btnHitung.addEventListener("click", hitungGaji);
