let keranjang = [];
let totalHarga = 0;

document.querySelectorAll(".tambah-ke-keranjang").forEach((button) => {
  button.addEventListener("click", () => {
    const produk = button.getAttribute("data-produk");
    const harga = parseInt(button.getAttribute("data-harga"));
    keranjang.push({ produk, harga });
    totalHarga += harga;
    updateKeranjang();
  });
});

function updateKeranjang() {
  const keranjangList = document.querySelector(".keranjang-list");
  keranjangList.innerHTML = "";
  keranjang.forEach((item) => {
    const keranjangItem = document.createElement("div");
    keranjangItem.innerHTML = `${item.produk} - Rp ${item.harga}`;
    keranjangList.appendChild(keranjangItem);
  });
  document.getElementById("total-harga").innerHTML = `Rp ${totalHarga}`;
}
