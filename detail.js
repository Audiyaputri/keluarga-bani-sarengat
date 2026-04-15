fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const item = data.find((d) => d.id == id);
    if (!item) {
      document.getElementById("detailData").innerHTML =
        "<h2>Data tidak ditemukan</h2>";
      return;
    }

    document.getElementById("detailData").innerHTML = `
      <img src="img/${item.foto}" class="detail-img">

      <h2>${item.nama}</h2>

      <p><b>Anak ke:</b> ${item.anak_ke}</p>
      <p><b>Jumlah Anak:</b> ${item.jumlah_anak}</p>
      <p><b>Nama Anak:</b> ${item.nama_anak}</p>
      <p><b>Alamat:</b> ${item.alamat}</p>
      <p><b>No HP:</b> ${item.no_hp}</p>

      <iframe 
        src="${item.lokasi}"
        class="map">
      </iframe>
    `;
  });
