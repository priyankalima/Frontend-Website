// append header and footer element of if can convent html to text
header.append(
    Object.assign(
        document.createElement('nav'),
        {
            className:"container d-flex",
            innerHTML: `
            <a href="#"><img src="https://www.logologo.com/logos/abstract-isometric-logo-design-free-logo.jpg" width="60" alt="logo"></a>
            <input type="checkbox" id="menu-toggle">
            <label for="menu-toggle" class="menu-toggle"></label>
            <div class="menu-lists">
                    <a class="link active section-one" href="#section-one">home</a>
                    <a class="link drop-down" href="#"><i class="icon"></i></a>
                    <div class="drop-down-container">
                        <a href="/about/about-us.html">another link</a>
                        <a href="/contact/contact-us.html">another link 2</a>
                    </div>
                    <a class="link section-two" href="#section-two">about</a>
                    <a class="link section-three" href="#section-three">contact</a>
            </div>
            `,
            function: addEventListener("load",()=>{
                // alert('hello world');
                    // const media = window.matchMedia("(max-width: 700px)");
                    // const offcanva = document.getElementById("offcanvasExample");
                    // // console.log(offcanva);
                    // function mediaQuery(media){
                    //         if(media.matches){
                    //              offcanva.classList.add("offcanvas");
                    //         }
                    //         else {
                    //              offcanva.classList.remove("offcanvas");
                    //         }
                    //     }
                    // mediaQuery(media);
                    // media.addEventListener("change",function(){
                    //     mediaQuery(media);
                    // })

                    // active links
                    // const activePage = window.location.pathname;
                    // // console.log(activePage);
                    // const navLink = document.querySelectorAll('.link');
                    // navLink.forEach(link=>{
                    //     console.log(link.pathname);
                    //     if(link.pathname == activePage){
                    //         link.classList.add('active');
                    //     }
                    // })
            })
        }
    )
)

// create a preloader
const preloader = document.createElement('div');
preloader.className="preloader";
document.body.appendChild(preloader);
// load page on window load
window.onload = function(){
    //hide the preloader
    setTimeout(function(){
        document.querySelector(".preloader").style.display = "none";
        document.querySelector(".preloader").classList.add('fade');
    },1000);
}

// active links while  on scroll
const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');
console.log(sections);

window.onscroll =()=>{
    sections.forEach(sec=>{
        // console.log(sec)
        let top = window.scrollY;
        let offset = sec.offsetTop;
        
        if(top >= offset - 60){
            let id = sec.getAttribute('id');
            console.log(id)
            links.forEach(link=>{
                console.log(link.getAttribute('href'))
                link.classList.remove('active');
                if(link.classList.contains(id)){
                    // console.log('yes')
                    link.classList.add('active');
                }
            })
        }
    })
}



{/* <div class="menu-container">
               <a data-bs-toggle="offcanvas" class="menu-icon" href="#offcanvasExample"></a>
               <div class="offcanvas-bottom menu"  id="offcanvasExample">
                    <div class="offcanvas-header">
                        <button type="button" class="close-btn" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <a href="/">home</a>
                        <a href="/about/about-us.html">about</a>
                        <a href="/contact/contact-us.html">contact</a>
                    </div>
               </div>
            </div> */}
            // <input type="checkbox" id="menu-toggle">
            // <label for="menu-toggle" class="menu-toggle"></label>
            // <div class="menu-lists">
            //         <a class="link" href="/">home</a>
            //         <a class="link" href="/about/about-us.html">about</a>
            //         <a class="link" href="/contact/contact-us.html">contact</a>
            //     </div>
