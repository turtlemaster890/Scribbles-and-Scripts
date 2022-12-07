const template = document.createElement('template');

template.innerHTML = `
    <div class="topnav">
    <a href="/Scribbles-and-Scripts/index.html">Home</a>
    <a href="#news">Articles</a>
    <a href="/Scribbles-and-Scripts/contact.html">Contact us!</a>
    <a href="#about">About</a>
    <a href="/Scribbles-and-Scripts/signup.html">Sign Up</a>
    <a href="/Scribbles-and-Scripts/login.html">Log In</a>
    </div>
`;

document.body.appendChild(template.content);