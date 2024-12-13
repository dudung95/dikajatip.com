// Inisialisasi EmailJS dengan Public Key Anda
(function() {
    emailjs.init("EJRFx0hm15A-wbErF");
})();

// Ambil form element
const contactForm = document.getElementById('contact-form');

// Tambahkan event listener untuk submit form
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Tampilkan loading saat mengirim
    Swal.fire({
        title: 'Mengirim pesan...',
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading();
        }
    });

    // Ambil nilai dari form
    const formData = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        message: document.getElementById('message').value,
        to_name: "Dika Jati Purwowinoto"
    };

    // Kirim email menggunakan EmailJS
    emailjs.send('service_ksivbk2', 'template_zg6c8c2', formData)
        .then(function(response) {
            // Tampilkan pesan sukses
            Swal.fire({
                icon: 'success',
                title: 'Berhasil!',
                text: 'Pesan Anda telah berhasil dikirim.',
                confirmButtonColor: '#18BC9C'
            });
            contactForm.reset(); // Reset form
        }, function(error) {
            // Tampilkan pesan error
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Gagal mengirim pesan. Silakan coba lagi.',
                confirmButtonColor: '#2C3E50'
            });
            console.error('Error:', error);
        });
});