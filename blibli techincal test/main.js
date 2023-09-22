document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the card container
    const cardContainer = document.getElementById("card-container");

    // Get references to the scroll buttons
    const scrollLeftButton = document.getElementById("scroll-left");
    const scrollRightButton = document.getElementById("scroll-right");

    // Set the initial scroll position to 0
    let scrollPosition = 0;

    // Fungsi untuk menggulir ke kiri
    const scrollLeft = () => {
        if (scrollPosition > 0) {
            scrollPosition -= 200; // Anda dapat menyesuaikan jumlah scroll sesuai kebutuhan
            cardContainer.scrollLeft = scrollPosition;
            scrollRightButton.removeAttribute("disabled");
        }
    };

    // Fungsi untuk menggulir ke kanan
    const scrollRight = () => {
        if (scrollPosition < cardContainer.scrollWidth - cardContainer.clientWidth) {
            scrollPosition += 200; // Anda dapat menyesuaikan jumlah scroll sesuai kebutuhan
            cardContainer.scrollLeft = scrollPosition;
        } else {
            scrollRightButton.setAttribute("disabled", "true");
        }
    };

    // Tambahkan event listener untuk tombol arah kiri dan kanan
    scrollLeftButton.addEventListener("click", scrollLeft);
    scrollRightButton.addEventListener("click", scrollRight);

    // Tambahkan event listener untuk tombol arah kiri dan kanan
    scrollLeftButton.addEventListener("click", scrollLeft);
    scrollRightButton.addEventListener("click", scrollRight);

    // Menyembunyikan tombol arah kanan saat halaman dimuat
    scrollLeftButton.setAttribute("disabled", "true");

    // Disable scroll buttons initially if not needed
    updateScrollButtons();

    // Function to update scroll button states
    function updateScrollButtons() {
        scrollLeftButton.disabled = scrollPosition === 0;
    }

    // Listen for scroll events on the card container to update button states
    cardContainer.addEventListener("scroll", updateScrollButtons);

    // Loop 20 times to create and append the card sections
    for (let i = 1; i <= 20; i++) {
        // Create a new section element for the card
        const cardSection = document.createElement('section');
        cardSection.className = 'item-5';

        // Create the card HTML structure
        cardSection.innerHTML = `
        <div class="card">
          <img src="assets/jordan1.webp" alt="Nike Air Jordan 1 Retro High">
          <div class="konten">
            <h3>Nike AJ1 Retro High White University Blue Black</h3>
            <h4>Rp3.550.000</h4>
            <div class="discount">
              <h5>1.000.000</h5>
              <p>99%</p>
            </div>
            <button>Add to bag</button>
          </div>
        </div>
      `;

        // Append the card section to the card container
        cardContainer.appendChild(cardSection);
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const footer = document.getElementById("myFooter");
    const footerContent = document.getElementById("footerContent");
    const toggleButton = document.getElementById("toggleButton");

    let isCollapsed = true;

    toggleButton.addEventListener("click", function () {
        if (isCollapsed) {
            footer.style.maxHeight = "100%";
        } else {
            footer.style.maxHeight = "0";
        }
        isCollapsed = !isCollapsed;
    });
});