
import "../MiddleSection.css";
import "../styles.css";

function MiddleSection() {
  return (
    <>
      <div id="homeIntro" style={{ height: 600 }}>
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
      <div id="about" style={{ height: 1000 }}>
        <h1 id="h1_about">Hello, I'm Kelsey! </h1>
        <h2 id="h2_about"> Designer & Developer.</h2>
        <img
          src="https://i.ibb.co/ZLJ3718/000036570019.jpg"
          alt="Kelsey's face"
          className="kelseysFace"
        />
        <p id="p_aboutme">
          I am a full stack engineer based in Duluth, Minnesota. From
          playing tunes on a stage to lines of code on a web page, creating
          brings me joy. By combining logic and design, I make functional,
          eye-catching, and user-friendly digital products.
        </p>
      </div>
      <div id="projects_page" style={{ height: 900 }}>
        <h1 className="projects-h1">Projects</h1>
        
  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" data-interval="false" >
  <div class="carousel-inner">
    <div class="carousel-item active">
    <a href="https://www.duluthgearexchange.com/" rel="noreferrer" target="_blank">
      <img class="d-block w-100 carousel-image" src="https://i.ibb.co/pntzY62/Screen-Shot-2022-09-15-at-4-10-41-PM.png" alt="First slide" />
      </a>
    </div>
    <div class="carousel-item">
    <a href="https://kelseyn12.github.io/Surf-App-Project/" rel="noreferrer" target="_blank">
      <img class="d-block w-100 carousel-image" src="https://i.ibb.co/TgWSStz/146481246-8b9ca05b-70ff-49d6-a894-45e378c92fad.png" alt="Second slide" />
    </a>
    </div>
    <div class="carousel-item">
    <a href="https://hello-project.netlify.app/" rel="noreferrer" target="_blank">
      <img class="d-block w-100 carousel-image" src="https://i.ibb.co/tZbSwfT/Screen-Shot-2022-02-06-at-6-37-13-PM.png" alt="Third slide" />
    </a>
    </div>
    <div class="carousel-item">
    <a href="https://midwest-bikepacking.herokuapp.com/" rel="noreferrer" target="_blank">
      <img class="d-block w-100 carousel-image" src="https://i.ibb.co/Zm4z2qY/Screen-Shot-2022-03-10-at-3-12-50-PM.png" alt="Third slide" />
    </a>
    </div>
    <div class="carousel-item">
    <a href="https://pokedex-kn-1.herokuapp.com/pokemon" rel="noreferrer" target="_blank">
      <img class="d-block w-100 carousel-image" src="https://i.ibb.co/d2w6jHS/Screen-Shot-2022-03-14-at-6-25-45-PM.png" alt="Fourth slide" />
    </a>
    </div>
    <div class="carousel-item">
    <a href="https://musicology-kn.herokuapp.com/" rel="noreferrer" target="_blank">
      <img class="d-block w-100 carousel-image" src="https://i.ibb.co/cgyMgZg/Screen-Shot-2022-03-21-at-5-05-50-PM.png" alt="Fifth slide" />
    </a>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev" >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next" >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
            
          
        <h2 className="more"> More to come!</h2>
      </div>
      <div id="holla" style={{ height: 600 }}>
        <h2 className="contact">Get in touch!</h2>
        <p className="contact_p">Oh, and checkout my
         <a className="resume" href="https://docs.google.com/document/d/10PjIl6TBP_3h2w1BrzfwpjyTflCpFXafTDuLycx-PZ8/export?format=pdf"> resume </a>
         if you'd like!</p>
      </div>
    </>
  );
}

export default MiddleSection;
