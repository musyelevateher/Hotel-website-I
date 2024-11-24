document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.getElementById('menuToggle');
  const closeMenu = document.getElementById('closeMenu');
  const navMenu = document.getElementById('navMenu');
  
  if (menuToggle && navMenu && closeMenu) {
      menuToggle.addEventListener('click', () => {
          navMenu.classList.toggle('active');
      });
     closeMenu.addEventListener('click', () => {
          navMenu.classList.remove('active');
      });
  }
});


    // Data array
    const chooseusContainer = [
      {
        imgSrc: "pictures/payment.svg",
        title: "Payment methods",
        description: "We have a lot of them, from <br> cryptocurrencies to barter for potatoes"
      },
      {
        imgSrc: "pictures/search.svg",
        title: "Simple search process",
        description: "We checked it out, even the kid did it,<br> but it was my mom's friend's son"
      },
      {
        imgSrc: "pictures/support.svg",
        title: "24/7 Support",
        description: "Is there something you don't <br> understand? Feel free to call us. <br> Phone number in the footer"
      },
      {
        imgSrc: "pictures/mice.svg",
        title: "We are nice",
        description: "Fantasy is over, there will be something <br>really convincing here"
      }
    ];

    // Reference to the parent container
    const container = document.getElementById("chooseusContainer");

    // Dynamically create and append blocks
    chooseusContainer.forEach(item => {
      const div = document.createElement("div");
      div.className = "chooseusContainer"; // Class for child elements

      div.innerHTML = `
        <img src="${item.imgSrc}" alt="${item.title}">
        <h3 class="method">${item.title}</h3>
        <p class="barter">${item.description}</p>
      `;

      container.appendChild(div);
    });
    
    // Data array
    const specialOfferData = [
      {
        img1: "pictures/bed.svg",
        img2: "pictures/rating.svg",
        img3: "pictures/favorite.png",
        club: "Wilderness Club at Big Ceddar",
        date: "28 October — 1 November",
        price: "$2016",
        nights: "/6 night"
      },
      {
        img1: "pictures/couch.svg",
        img2: "pictures/rating.svg",
        img3: "pictures/favorite.png",
        club: "Wilderness Club at Big Ceddar",
        date: "28 October — 1 November",
        price: "$2016",
        nights: "/6 night"
      },
      {
        img1: "pictures/kip.svg",
        img2: "pictures/rating.svg",
        img3: "pictures/favorite.png",
        club: "Wilderness Club at Big Ceddar",
        date: "28 October — 1 November",
        price: "$2016",
        nights: "/6 night"
      }
    ];

    // Reference to the parent container
    const specialofferContainerElem = document.getElementById("specialofferContainer");

    // Ensure the container exists before attempting to append content
    if (specialofferContainerElem) {
      specialOfferData.forEach(item => {
        const div = document.createElement("div");

        div.innerHTML = `
          <img src="${item.img1}" alt="" class="bed">
          <img src="${item.img2}" alt="" class="rate">
          <img src="${item.img3}" alt="" class="fav">
          <h2 class="club">${item.club}</h2>
          <h3 class="date">${item.date}</h3>
          <div class="nite">
            <h4 class="span-1">${item.price} <span class="span-3">${item.nights}</span></h4>
          </div>
        `;

        specialofferContainerElem.appendChild(div);
      });
    } else {
      console.error('Container with id "specialofferContainer" not found!');
    }
    
        // Data array for reviewsData
        const reviewsData = [
          {
            img: "pictures/woman.svg",
            text: "I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.",
            name: "Jannike Borg",
            role: "Publisher"
          },
          {
            img: "pictures/lebron.svg",
            text: "I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.",
            name: "LeBron Durant",
            role: "Flight attendant"
          },
          {
            img: "pictures/piha.svg",
            text: "I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.",
            name: "Kaarel Piho",
            role: "Chiropodist"
          }
        ];
    
        // Wait for the DOM to be fully loaded
        document.addEventListener("DOMContentLoaded", function () {
          const reviewsContainer = document.getElementById("reviewsContainer");
    
          // Loop through the reviews data and append content
          reviewsData.forEach((review, index) => {
            const div = document.createElement("div");
    
            // Create the inner HTML content dynamically
            div.innerHTML = `
              <img src="${review.img}" alt="">
              <p class="hotel">${review.text}</p>
              <h2 class="pub">${review.name},<strong class="flight">${review.role}</strong></h2>
            `;
    
            // Append the "more review" image only for the last review
            if (index === reviewsData.length - 1) {
              const moreImg = document.createElement("img");
              moreImg.src = "pictures/more review.png";
              moreImg.alt = "More Reviews";
              moreImg.classList.add("more");
              div.appendChild(moreImg);
            }
    
            // Append the div to the reviews container
            reviewsContainer.appendChild(div);
          });
        });
       
    // Data array for the recent posts
    const postsData = [
      {
        img: "pictures/mountain.svg",
        date: "May 23, 2022",
        time: "5 minutes",
        title: "My trip to Athens",
        description: "It would seem that in a city where Theseus, Plato and Epicurus once walked, the very idea of the subway is alien to the city, but already..."
      },
      {
        img: "pictures/spring.svg",
        date: "May 22, 2022",
        time: "1 minute",
        title: "Vilnius resorts",
        description: "I haven't seen any resorts in Vilnius, but there are wonderful people and pubs"
      },
      {
        img: "pictures/aeroplane.svg",
        date: "May 20, 2022",
        time: "15 minutes",
        title: "Tips for flying on a plane",
        description: "If you have a fear of flying, here's a helpful tip: bring your co-pilot so you can take a nap while he steers the plane for you"
      }
    ];

    // Reference to the parent container
    const recentpostsContainer = document.getElementById("recentpostsContainer");

    // Loop through the posts data and append it dynamically
    postsData.forEach(post => {
      const div = document.createElement("div");

      // Create and append content dynamically using template literals
      div.innerHTML = `
        <img src="${post.img}" alt="" class="environ">
        <h1 class="may">${post.date}</h1>
        <img src="pictures/vector.svg" class="vec">
        <h2 class="min">${post.time}</h2>
        <h3 class="to">${post.title}</h3>
        <h4 class="epi">${post.description}</h4>
      `;

      // Append the div to the container
      recentpostsContainer.appendChild(div);
    });
  
      