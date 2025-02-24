// append header and footer element of if can convent html to text
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
                    <a href="/">home</a>
                    <a href="/about/about-us.html">about</a>
                    <a href="/contact/contact-us.html">contact</a>
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
                    const activePage = window.location.pathname;
                    // console.log(activePage);
                    const navLink = document.querySelectorAll('.menu-lists a').forEach(link=>{
                        // console.log(link.href)
                        if(link.href.includes(`${activePage}`)){
                            console.log(`${activePage}`);
                            // link.classList.add('active');
                        }
                    })
                    // console.log(navLink);
                    
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
