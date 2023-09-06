import me from '../images/me.jpeg';

function About() {
  return (
    <section className="aboutMe" id="about">
      <main>
        <figure>
          <img src={me} alt="Bosele Seretsi" width={350} />
        </figure>
        <div>
          <h2>ABOUT ME</h2>
          <h1 id="who-am-i">WHO AM I</h1>
          <p> A fullstack developer, A Front-end and Back-end developer aiming to design and develop experiences that make people's  lives simple.</p>
          <div>
            <button className="cta black-filled">Hire Me</button>
            <button className="cta-outline black">See My Resume</button>
          </div>
        </div>

      </main>
    </section>
  )
}

export default About