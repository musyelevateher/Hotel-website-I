# Hotel-website-I
**Description**: This project is a web page designed using HTML, CSS and Javascript featuring a responsive layout and modern design elements which include mobile view. It include javascript to render Contents dynamically and making the Harmburger-menu interactive.

## Table of Contents

1. [Project Name](#project-name)
2. [Table of Contents](#table-of-contents)
3. [Introduction](#Overview)
4. [Live Demo](#live-demo)
5. [Features](#features)
6. [Technologies Used](#technologies-used)
7. [Setup and Installation](#setup-and-installation)
8. [Usage](#usage)
9. [Media Queries](#Media-Queries)
10.[Screenshots](#screenshots)
11. [License](#license)
12. [Author(s)](#authors)

## Overview
This project is built using HTML, CSS and Javascript.It provides a visually appealing,responsive layout, interactive for a web page. It includes sections such as:
- A header with navigation.
- A hero section with large headings and background images.
- A "why choose us" section wih cards and descriptions.
- A "Review" section highlighting features.
- A "recent post" section with images and content.
- A footer with additional links and information.

## Live-demo
- Check out the live Demo of the project: [Live Demo]https://
-  A live video using loom: link to loom 

## Technologies Used

-HTML5
-CSS3
-ES6

## Features
- **Responsive Design**: The layout adjusts to various screen sizes using media queries.
- **Custom properties**: Utilizes CSS variables for theme colors, making it easy to adjust the overall color scheme.
- **Modern Typography**: Uses "Montserrat" fonts for a modern and clean look.
- All repetitive content of the webpage had been rendered dynamically using JavaScript (Why Choose Us, Special Offers, Reviews abd Recent Posts)
- Users would be able to press the hamburger menu to display the main_mobile_menu. The menu should slide in and out when pressed respectively.

## Setup Instructions

1. **Clone the Repository**:
```sh
git clone https://github.com/musyelevateher/Hotel-website-I.git
```
2. **Navigate to the project Directory**:
```sh
cd Hotel-website-I
```
3. **Open the HTML Files**:
 Open `index.html` in your preffered web browser to view the project.

 ##Usage 

 -The CSS file (`styles.css`) includes various sections with classes that define the layout and styles for the web page.
 -To make any adjustments,edit the `styles.css` file, and the changes will reflect on the web page upon refreshing the browser.
 - All repititive contents in html had been cleared leaving parent container for each section and it will be rendered dynamically using Javascript "Main.js".

 ## KEY HTML Structure

 Here is a quick of the key HTML Structure:
 ```html
 <!-- Header Section -->
  <div>
  <header> 
       <div class="navbar">
          <!-- Hamburger icon -->
          <div class="hamburger" id="hamburger">
            <img src="pictures/hamburger.svg" alt="" class="burger">
              
          </div>
        <!-- Navigation Menu -->
      </header>
  <!... Hero images and content..>
  <<section class="globe">
       <!.. globe card and contents..>
  </section>
<<section class="main">>
     <!..features section>
</section>
<section class="offer">
  <!.. special offer and contents..>
</section>
<section class="review">
  <!..  review and contents..>
</section>
<section class="post">
   <!.. Recent posts and images..>
</section>
<footer>
     <!.. footer content..>
</footer>
...

### Key CSS Styles
- The CSS code starts with defining root variables for consistent theming.
- media queries provide responsive design adjustments at various breakpoints.
##  Key Javascript structure
-Get the hamburger icon and the navigation menu
-Add an event listener to the hamburger icon to toggle the menu
-Array of data for each item
-Function to render items dynamically
-Clear container before appending
-Call the render function


## Screenshots

Include screenshots or GIFs of your project in action. This helps users understand what your project looks like and how it functions.

![Screenshot 1]


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Authors
- **Name:** Musayyiba Shu'aibu
- **Email:** musayyiba@gmail.com
- **GitHub:** [musyelevateher](https://github.com/musyelevateher)

