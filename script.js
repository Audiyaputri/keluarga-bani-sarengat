let dataKeluarga = [];

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    dataKeluarga = data;
    tampilkanData(data);
  });

function tampilkanData(data) {
  const container = document.getElementById("keluargaContainer");
  container.innerHTML = "";

  data.forEach((item) => {
    container.innerHTML += `
    <div class="card" onclick="lihatDetail('${item.id}')">
      <img src="img/${item.foto}" class="card-img">
      <h3>${item.nama}</h3>
      <p>${item.alamat}</p>
    </div>
  `;
  });
}

function lihatDetail(id) {
  window.location.href = `detail.html?id=${id}`;
}

/* SEARCH */
document.getElementById("search").addEventListener("keyup", function () {
  const keyword = this.value.toLowerCase();

  const hasil = dataKeluarga.filter((item) =>
    item.nama.toLowerCase().includes(keyword),
  );

  tampilkanData(hasil);
});
