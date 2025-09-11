import './styles/style.scss'
import './styles/phone.scss'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `

    <!--flex sasa -->
    <header class="card">
    <nav class="name">Lokmene <br><b>araar</b></nav>
    <a href="" className="project">Projects</a>

</header>
<div class="swat">
    
    <div class="one">
        <div id="one" class="card">
            <img src="/square-root.svg" alt="" />
            <p>
            Programmer Redefining <br />Web-dev with<br />ease of access
            </p>
            
            </div>
        <div id= "two" class="card">
            <p>I'll tell you about myself. 
            I am a web developer with a passion for creating beautiful and functional websites. with math background.
            An ex student in algeirs USTHB university.
            I have a strong understanding of HTML, CSS, and JavaScript, and I am always looking to learn new technologies and techniques.
            </p>
        
        </div>
    </div>
    <div class= "two">
        <div id="three" class="card"><img src="/loklok.jpg" alt="" /></div>
        <div id="four" class="card">
        <div>
            <p>Have some questions ?</p><div></div>
            </div>
            <a href="lokmamen@gmail.com">Contact me</a>
        </div>
    </div>
    <div class= "three">
        <div id="five" class="card" >
            <div>
            <p>Musea</p>
            </div>
            <img src="/computer-program-coding-screen_53876-138060.jpg" alt="" />
            <div>create</div>
            <div>host</div>
            <div>maintain</div>     
        </div>
        <div id="six" class="card">
        <i class="fa-brands fa-instagram"></i>
        <i class="fab fa-facebook-messenger"></i>
        <i class="fab fa-whatsapp"></i>
         
        
        
        </div>
    </div>

</div>


`



