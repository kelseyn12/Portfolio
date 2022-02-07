import "../styles.css";
import "../MiddleSection.css"

function MiddleSection () {
    return (
        <>
        <div id="homeIntro" style={{height: 600}}>
            <div className="homeInner">
            <div className="homeBuzzwords">
        <div className="firstLine">
        <div className="nature"> 
        <span>N</span>
        <span>a</span>
        <span>t</span>
        <span>u</span>
        <span>r</span>
        <span>e</span>
        <span>.</span>
        </div> 
        <div className="design">
        <span>D</span>
        <span>e</span>
        <span>s</span>
        <span>i</span>
        <span>g</span>
        <span>n</span>
        <span>.</span>
        </div>
        </div>
        <div className="middleBuzzwords">
            <span>C</span>
            <span>o</span>
            <span>d</span>
            <span>e</span>
            <span>.</span>
            <span>M</span> 
            <span>u</span>
            <span>s</span>
            <span>i</span>
            <span>c</span>
            <span>.</span>
            </div>
        <div className="laughter">
            <span>L</span>
            <span>a</span>
            <span>u</span>
            <span>g</span>
            <span>h</span>
            <span>t</span>
            <span>e</span>
            <span>r</span>
            <span>.</span>
            </div>
        
        </div> 
        </div>
        
            
           
        </div>
        <div id="about" style={{height: 1000}}>
            <h1 className="h1_about">Hello, I'm Kelsey! </h1>
            <h2 className="h2_about"> Designer & Developer.</h2>
            <img src="https://i.ibb.co/DgjpY3G/000066010028.jpg" alt="Kelsey's face" className="kelseysFace" />
            <p className="p_aboutme">I am a full stack engineer based out of Duluth, Minnesota.
                From playing tunes on a stage to lines of code on a web page,
                creating brings me joy.
                By combining logic and design, I make functional, 
                eye-catching, and user-friendly digital products.
                   </p>
            
        </div>
        <div id="projects" style={{height: 900}}>
            <h1 className="projects-h1">Projects</h1>
            <div className="container">
                <div className="projects">
              <img src="https://i.ibb.co/TgWSStz/146481246-8b9ca05b-70ff-49d6-a894-45e378c92fad.png" alt="Surf application" className="image-1"/>
              <img src="https://i.ibb.co/tZbSwfT/Screen-Shot-2022-02-06-at-6-37-13-PM.png" alt="Project idea application" className="image-2" />
              <img src="https://i.ibb.co/Q8hkJXw/149541560-63144e6f-70c0-4fbd-86f5-5cb94a62243b.png" alt="Bikepacker Board Website" className="image-3" />
              
              

              </div>
        </div>
        </div>
        <div id="holla" style={{height:600}}>
            <h1>This is the contact section</h1>
            Ooo lala
        </div>

        </>
    )
}

export default MiddleSection;