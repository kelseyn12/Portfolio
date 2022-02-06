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
        <div id="about" style={{height: 900}}>
            <h1 className="h1_about">Hello, I'm Kelsey! </h1>
            <h2 className="h2_about"> Designer & Developer.</h2>
            <img src="https://i.ibb.co/SmNH9DH/000159590019.jpg" alt="Kelsey's face" className="kelseyFace" />
            
        </div>
        <div id="projects" style={{height: 600}}>
            <h1>This is the projects section</h1>
            oooolala
        </div>
        <div id="holla" style={{height:600}}>
            <h1>This is the contact section</h1>
            Ooo lala
        </div>

        </>
    )
}

export default MiddleSection;