/* =========================================
   ALL BLOG POSTS DATABASE
========================================= */

const allPosts = [

/* ===== STORIES ===== */

{
title:"சிங்கமும் எலியும்",
category:"stories", 
image:"../images/poster/the-lion-story-in-tamil.webp",
link:"01lion-story.html"
},

{
title:"முயலும் ஆமையும்",
category:"stories",
image:"../images/poster/the-rabbit-story-in-tamil.webp",
link:"01rabbit-story.html"
},

{
title:"அதிசய மரம்",
category:"stories",
image:"../images/poster/the-voice-tree.webp",
link:"tree-tamil-story-1.html"
},

{
title:"சிங்கத்தின் குணம்",
category:"stories",
image:"../images/poster/the-lion-birds.webp",
link:"lion-character.html"
},


/* ===== motivational ===== */

{
title:"வாழ்வில் வெற்றி பெற உதவும் பேச்சுத் திறமை",
category:"motivational",
image:"../images/poster/the-motivational-essay-in-tamil.webp",
link:"motivational-essay-in-tamil.html"
},


];


/* =========================================
   RELATED POSTS FUNCTION
========================================= */

function loadRelatedPosts(category, currentPostTitle){

const relatedContainer =
document.getElementById("relatedPosts");

if(!relatedContainer) return;


/* ===== FILTER CATEGORY ===== */

let filteredPosts = allPosts.filter(post =>

post.category === category &&
post.title !== currentPostTitle

);


/* ===== RANDOM SHUFFLE ===== */

filteredPosts.sort(() => 0.5 - Math.random());


/* ===== GET ONLY 5 POSTS ===== */

let randomPosts = filteredPosts.slice(0, 5);


/* ===== SHOW POSTS ===== */

randomPosts.forEach(post => {

const card = document.createElement("a");

card.href = post.link;

card.classList.add("related-card");

card.innerHTML = `

<img src="${post.image}" alt="${post.title}">

<div class="related-card-content">

<h4>${post.title}</h4>

<p>Read More →</p>

</div>

`;

relatedContainer.appendChild(card);

});

}