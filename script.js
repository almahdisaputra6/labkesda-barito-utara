db.collection("berita").get().then(res => {
  let html = "";

  res.forEach(doc => {
    let d = doc.data();

    html += `
    <div class="col-md-4">
      <div class="card">
        <img src="${d.gambar}" class="card-img-top">
        <div class="card-body">
          <h5>${d.judul}</h5>
          <p>${d.deskripsi}</p>
        </div>
      </div>
    </div>`;
  });

  document.getElementById("berita-list").innerHTML = html;
});

function login() {
  auth.signInWithEmailAndPassword(
    email.value,
    password.value
  ).then(() => {
    alert("Login berhasil");
    window.location.href = "dashboard.html";
  }).catch(err => {
    alert("Error: " + err.message);
    console.log(err);
  });
}

function simpan() {
  db.collection("berita").add({
    judul: document.getElementById("judul").value,
    deskripsi: document.getElementById("deskripsi").value,
    gambar: document.getElementById("gambar").value,
    tanggal: new Date()
  });

  alert("Berhasil disimpan");
}

function uploadFile(file) {
  const storageRef = firebase.storage().ref(file.name);

  storageRef.put(file).then(snapshot => {
    snapshot.ref.getDownloadURL().then(url => {
      console.log("URL:", url);
    });
  });
}