// // append header and footer element of if can convent html to text

// // find the filepaths using js
// // alert(window.location.href);
// // window.location.hostname
// // window.location.pathname
// // window.location.protocol
// // window.location.assign("some url");
// // alert(window.location.pathname);

header.append(
    Object.assign(
        document.createElement('nav'),
        {
            className:"container d-flex",
            innerHTML: `
            <a href="#"><img src="https://www.logologo.com/logos/abstract-isometric-logo-design-free-logo.jpg" width="100" alt="logo"></a>
            <div class="menu-container">
               <a data-bs-toggle="offcanvas" class="menu-icon" href="#offcanvasExample">Click</a>
               <div class="offcanvas-end menu"  id="offcanvasExample">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                        <button type="button" class="close-btn" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <a href="/">home</a>
                        <a href="/about/about-us.html">about</a>
                        <a href="/contact/contact-us.html">contact</a>
                    </div>
               </div>
            </div>
            `,
            function: addEventListener("load",()=>{
                // alert('hello world');
                    const media = window.matchMedia("(max-width: 700px)");
                    const offcanva = document.getElementById("offcanvasExample");
                    // console.log(offcanva);
                    function mediaQuery(media){
                            if(media.matches){
                                 offcanva.classList.add("offcanvas");
                            }
                            else {
                                 offcanva.classList.remove("offcanvas");
                            }
                        }
                    mediaQuery(media);
                    media.addEventListener("change",function(){
                        mediaQuery(media);
                    })
            })
        }
    )
)