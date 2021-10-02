export default function Hero() {
  return (
    <section className="home-section">
      <div className="home-section-flex-top">
        <img className="home-section-logo-img" src="/images/netflix-logo.jpg" />
        <button className="home-section-btn">Sign In</button>
      </div>
      <div className="home-section-flex-bottom">
        <h2 className="home-section-heading">
          Unlimited movies, TV shows, and more.
        </h2>
        <h3 className="home-section-subheading">
          Watch anywhere. Cancel anytime.
        </h3>
      </div>
      <form className="home-section-form">
        <input
          className="home-section-input"
          placeholder="Enter movies to search..."
          type="text"
        />
        <button className="home-section-search">Search</button>
      </form>
    </section>
  );
}
