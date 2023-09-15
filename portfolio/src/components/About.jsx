import me from '../images/me.jpeg';
import Testimonial from './Testimonial';

function About() {
  return (
    <section className="aboutMe" id="about">
      <main>
        <figure>
          <img src={me} alt="Bosele Seretsi" width={350} />
        </figure>
        <div>
          {/* <h2>ABOUT ME</h2> */}
          <h1 id="who-am-i">WHO AM I</h1>
          <h1 id="bosele seretsi">BOSELE SERETSI</h1>
          <p> A passionate fullstack, web developer, in Front-end and Back-end aiming to design and develop experiences that make people's  lives simple. Have a look at my work and get in touch!</p>
          <div>
            <button className="cta black-filled">Hire Me</button>
            {/* <button className="cta-outline black">See My Resume</button> */}
          </div>
        </div>
      </main>
      <Testimonial/>

    </section>


  )
}
export default About