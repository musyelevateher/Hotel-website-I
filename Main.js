// Get the hamburger icon and the navigation menu
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

// Add an event listener to the hamburger icon to toggle the menu
hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
// Array of data for each item
const items = [
    {
      imgSrc: "pictures/payment.svg",
      title: "Payment methods",
      description: "We have a lot of them, from cryptocurrencies to barter for potatoes"
    },
    {
      imgSrc: "pictures/search.svg",
      title: "Simple search process",
      description: "We checked it out, even the kid did it, but it was my mom's friend's son"
    },
    {
      imgSrc: "pictures/support.svg",
      title: "24/7 Support",
      description: "Is there something you don't understand? Feel free to call us. Phone number in the footer"
    },
    {
      imgSrc: "pictures/mice.svg",
      title: "We are nice",
      description: "Fantasy is over, there will be something really convincing here"
    }
  ];
  
  // Function to render items dynamically
  function renderItems() {
    const container = document.getElementById("chooseusContainer");
  
    // Clear container before appending
    container.innerHTML = '';
  
    items.forEach(item => {
      // Create elements for each part
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("chooseus-item");
  
      const img = document.createElement("img");
      img.src = item.imgSrc;
      img.alt = item.title;
  
      const title = document.createElement("h3");
      title.classList.add("method");
      title.textContent = item.title;
  
      const description = document.createElement("p");
      description.classList.add("barter");
      description.textContent = item.description;
  
      // Append elements to the itemDiv
      itemDiv.appendChild(img);
      itemDiv.appendChild(title);
      itemDiv.appendChild(description);
  
      // Append itemDiv to the main container
      container.appendChild(itemDiv);
    });
  }
  
  // Call the render function
  renderItems();

  // Data array for special offers
const specialOffers = [
    {
      imgSrc: "pictures/couch.svg",
      ratingSrc: "pictures/rating.svg",
      favoriteSrc: "pictures/favorite.png",
      title: "Wilderness Club at Big Ceddar",
      date: "28 October — 1 November",
      price: "$2016",
      nights: "6 nights"
    },
    {
      imgSrc: "pictures/kip.svg",
      ratingSrc: "pictures/rating.svg",
      favoriteSrc: "pictures/favorite.png",
      title: "Wilderness Club at Big Ceddar",
      date: "28 October — 1 November",
      price: "$2016",
      nights: "6 nights"
    }
  ];
  
  // Function to render special offers dynamically
  function renderSpecialOffers() {
    const container = document.getElementById("specialofferContainer");
  
    // Clear the container before appending new items
    container.innerHTML = '';
  
    specialOffers.forEach(offer => {
      // Create a div for each offer item
      const offerDiv = document.createElement("div");
      offerDiv.classList.add("offer-item");
  
      // Create image elements
      const mainImg = document.createElement("img");
      mainImg.src = offer.imgSrc;
      mainImg.alt = offer.title;
  
      const ratingImg = document.createElement("img");
      ratingImg.src = offer.ratingSrc;
      ratingImg.alt = "Rating";
      ratingImg.classList.add("rate");
  
      const favoriteImg = document.createElement("img");
      favoriteImg.src = offer.favoriteSrc;
      favoriteImg.alt = "Favorite";
      favoriteImg.classList.add("fav");
  
      // Create text elements
      const title = document.createElement("h2");
      title.classList.add("club");
      title.textContent = offer.title;
  
      const date = document.createElement("h3");
      date.classList.add("date");
      date.textContent = offer.date;
  
      const priceInfo = document.createElement("div");
      priceInfo.classList.add("nite");
  
      const price = document.createElement("h4");
      price.classList.add("span-1");
      price.innerHTML = `${offer.price} <span class="span-3">/${offer.nights}</span>`;
  
      // Append elements to the offer div
      offerDiv.appendChild(mainImg);
      offerDiv.appendChild(ratingImg);
      offerDiv.appendChild(favoriteImg);
      offerDiv.appendChild(title);
      offerDiv.appendChild(date);
      priceInfo.appendChild(price);
      offerDiv.appendChild(priceInfo);
  
      // Append the offer div to the main container
      container.appendChild(offerDiv);
    });
  }
  
  // Call the render function
  renderSpecialOffers();

  // Array of data for each recent post
const recentPosts = [
    {
      imgSrc: "pictures/mountain.svg",
      date: "May 23, 2022",
      vectorSrc: "pictures/vector.svg",
      time: "5 minutes",
      title: "My trip to Athens",
      description: "It would seem that in a city where Theseus, Plato and Epicurus once walked, the very idea of the subway is alien to the city, but already..."
    },
    {
      imgSrc: "pictures/spring.svg",
      date: "May 22, 2022",
      vectorSrc: "pictures/vector.svg",
      time: "1 minute",
      title: "Vilnius resorts",
      description: "I haven't seen any resorts in Vilnius, but there are wonderful people and pubs"
    },
    {
      imgSrc: "pictures/aeroplane.svg",
      date: "May 20, 2022",
      vectorSrc: "pictures/vector.svg",
      time: "15 minutes",
      title: "Tips for flying on a plane",
      description: "If you have a fear of flying, here's a helpful tip: bring your co-pilot so you can take a nap while he steers the plane for you"
    }
  ];
  
  // Function to render posts dynamically
  function renderRecentPosts() {
    const container = document.getElementById("recentpostsContainer");
  
    // Clear container before appending new items
    container.innerHTML = '';
  
    recentPosts.forEach(post => {
      // Create a div for each post
      const postDiv = document.createElement("div");
      postDiv.classList.add("post-item");
  
      // Create elements for post content
      const mainImg = document.createElement("img");
      mainImg.src = post.imgSrc;
      mainImg.alt = post.title;
  
      const date = document.createElement("h1");
      date.classList.add("may");
      date.textContent = post.date;
  
      const vectorImg = document.createElement("img");
      vectorImg.src = post.vectorSrc;
      vectorImg.alt = "Vector Icon";
      vectorImg.classList.add("vec");
  
      const time = document.createElement("h2");
      time.classList.add("min");
      time.textContent = post.time;
  
      const title = document.createElement("h3");
      title.classList.add("to");
      title.textContent = post.title;
  
      const description = document.createElement("h4");
      description.classList.add("epi");
      description.textContent = post.description;
  
      // Append elements to the post div
      postDiv.appendChild(mainImg);
      postDiv.appendChild(date);
      postDiv.appendChild(vectorImg);
      postDiv.appendChild(time);
      postDiv.appendChild(title);
      postDiv.appendChild(description);
  
      // Append the post div to the main container
      container.appendChild(postDiv);
    });
  }
  
  // Call the render function
  renderRecentPosts();

  
  const reviews = [
    {
      img: 'pictures/woman.svg',
      text: 'I quickly found the right tour for me, but I had a few questions about the hotel. Tech support answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.',
      name: 'Jannike Borg',
      job: 'Publisher'
    },
    {
      img: 'pictures/lebron.svg',
      text: 'I quickly found the right tour for me, but I had a few questions about the hotel. Tech support answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.',
      name: 'LeBron Durant',
      job: 'Flight attendant'
    },
    {
      img: 'pictures/piha.svg',
      text: 'I quickly found the right tour for me, but I had a few questions about the hotel. Tech support answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.',
      name: 'Kaarel Piho',
      job: 'Chiropodist'
    }
  ];

  // Function to render reviews dynamically
  function renderReviews() {
    const container = document.getElementById('reviewsContainer');

    reviews.forEach((review) => {
      // Create elements
      const reviewDiv = document.createElement('div');
      const img = document.createElement('img');
      const text = document.createElement('p');
      const name = document.createElement('h2');
      const job = document.createElement('h3');

      // Set attributes and text content
      img.src = review.img;
      img.alt = review.name;
      img.className = 'wom';
      text.className = 'hotel';
      text.textContent = review.text;
      name.innerHTML = `<span class="pub">${review.name},</span>`;
      job.className = 'hot';
      job.textContent = review.job;

      // Append elements to reviewDiv
      reviewDiv.appendChild(img);
      reviewDiv.appendChild(text);
      reviewDiv.appendChild(name);
      reviewDiv.appendChild(job);

      // Append reviewDiv to container
      container.appendChild(reviewDiv);
    });
  }

  // Call the function to render reviews
  renderReviews();
