// Get the hamburger icon and the navigation menu
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

// Add an event listener to the hamburger icon to toggle the menu
hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
const chooseusContainer = [
{  
    Image: "pictures/payment.svg",
    title: "Payment methods",
    description: "We have a lot of them, from cryptocurrencies to barter for potatoes",
 }
 {
    Image: "pictures/search.svg" ,
    title: "Simple search process" ,
    description: "We checked it out, even the kid did it, but it was my mom's friend's son" ,
}
{
    Image: "pictures/support.svg" ,
    title: "24/7 Support" ,
    description: "Is there something you don't understand? Feel free to call us. Phone number in the footer" ,
}
{
    Image: "pictures/mice.svg" ,
    title: "We are nice" ,
    description: "Fantasy is over, there will be something really convincing here" ,
}
]

const chooseusContainer = [
        {  Image:"pictures/payment.svg", title: "Payment methods" , description: "We have a lot of them, from cryptocurrencies to barter for potatoes" },
        {  Image: "pictures/search.svg", title: "Simple search process", description: "We checked it out, even the kid did it, but it was my mom's friend's son" },
        {  Image: "pictures/support.svg" , title: "24/7 Support" , description: "Is there something you don't understand? Feel free to call us. Phone number in the footer" },
    {   Image: "pictures/mice.svg" , title: "We are nice" , description: "Fantasy is over, there will be something really convincing here" },
    ];
    
    const renderContainer = why choose us => {
        const Container = document.getElementById('chooseusContainer');
        chooseusContainer.forEach(chooseusContainer => {
            container.innerHTML += `
                <div>
                    <img src=" ${chooseusContainer.Image} " 
                    <h3>${chooseusContainer.title}</h3>
                    <p>${chooseusContainer.description}</p>
                </div>
            `;
        });
    }
    
    renderchooseusContainer(chooseusContainer);