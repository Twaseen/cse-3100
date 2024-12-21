import './AboutUs.css';

export default function AboutUs() {
  return (
    <section className="about-us-container">
      <h2>About Us</h2>
      <section className="about-section">
        <h3>Our Mission</h3>
        <p>
          At Purrfect Adoption, our mission is to connect loving families with their ideal feline companions. We are committed to providing a second chance to cats in need and creating lifelong bonds
          between humans and their pets.
        </p>
      </section>
      <section className="about-section">
        <h3>Our History</h3>
        <p>
          Purrfect Adoption was founded in 2015 by a group of passionate animal lovers. Over the years, we have rehomed thousands of cats and provided resources to support responsible pet ownership.
        </p>
      </section>
      <section className="about-section-team-section">
        <h3>Our Team</h3>
        <div className="team-grid">
          <div className="team-member">
            <img src="/src/assets/director1.webp" alt="Director 1" className="team-photo" />
            <h4>Person 1</h4>
            <p>Director</p>
          </div>
          <div className="team-member">
            <img src="/src/assets/director2.jpeg" alt="Director 2" className="team-photo" />
            <h4>Person 2</h4>
            <p>Director</p>
          </div>
          <div className="team-member">
            <img src="/src/assets/director3.jpg" alt="Director 3" className="team-photo" />
            <h4>Person 3</h4>
            <p>Director</p>
          </div>
          <div className="team-member">
            <img src="/src/assets/director4.jpg" alt="Director 4" className="team-photo" />
            <h4>Person 4</h4>
            <p>Director</p>
          </div>
        </div>
      </section>
    </section>
  );
}
