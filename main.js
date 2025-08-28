/*  Swal.fire({
    title: "Masukkan nama kamu",
    input: "text",
    inputAttributes: {
      autocapitalize: "off"
    },
    showCancelButton: true,
    confirmButtonText: "OK",
    preConfirm: (nama) => {
      if (!nama) {
        Swal.showValidationMessage("Nama tidak boleh kosong!");
      }
      return nama;
    }
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: `Halo, ${result.value}! 👋`,
        text: "Selamat datang di website ini 🎉",
        icon: "success"
      });
    }
  });
  */


  Swal.fire({
    title: "Masukkan nama kamu",
    input: "text",
    inputAttributes: {
      autocapitalize: "off"
    },
    showCancelButton: true,
    confirmButtonText: "OK",
    preConfirm: (nama) => {
      if (!nama) {
        Swal.showValidationMessage("Nama tidak boleh kosong!");
      }
      return nama;
    }
  }).then((result) => {
    if (result.isConfirmed) {
      // Ganti isi span dengan nama user
      document.getElementById("namaUser").innerText = result.value;
    }
  });

  // alert pengembangan 
  document.querySelectorAll(".alertShow").forEach((el) => {
    el.addEventListener("click", () => {
      Swal.fire({
        title: "Informasi",
        text: "Bab ini sedang dalam perbaikan dan pengembangan.",
        icon: "info"
      });
    });
  });