// DOMContentLoaded for Quotes Section
document.addEventListener("DOMContentLoaded", () => {
    const carouselInner = document.querySelector(".carousel-inner");
    const loader = document.querySelector(".loader");
    const carousel = document.querySelector("#carouselControls");

    // Show loader/hide carousel
    loader.style.display = "block";
    carousel.style.display = "none";

    // Fetch quotes from API
    fetch("https://smileschool-api.hbtn.info/quotes")
      .then((response) => response.json())
      .then((quotes) => {
        // Loop through quotes/create carousel items
        quotes.forEach((quote, index) => {
          const isActive = index === 0 ? "active" : "";
          const carouselItem = `
            <div class="carousel-item ${isActive}">
              <div class="row mx-auto align-items-center">
                <div class="col-12 col-sm-2 col-lg-2 offset-lg-1 text-center">
                  <img
                    src="${quote.pic_url}"
                    class="d-block align-self-center rounded-circle"
                    alt="${quote.name}'s Picture"
                  />
                </div>
                <div class="col-12 col-sm-7 offset-sm-2 col-lg-9 offset-lg-0">
                  <div class="quote-text">
                    <p class="text-white">« ${quote.text} »</p>
                    <h4 class="text-white font-weight-bold">${quote.name}</h4>
                    <span class="text-white">${quote.title}</span>
                  </div>
                </div>
              </div>
            </div>
          `;
          carouselInner.innerHTML += carouselItem;
        });

        // Hide loader/show carousel
        loader.style.display = "none";
        carousel.style.display = "block";
      })
      .catch((error) => {
        console.error("Error fetching quotes:", error);
        loader.style.display = "none";
      });
  });