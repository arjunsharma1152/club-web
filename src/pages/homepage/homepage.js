import React from "react";
import "../homepage/homepage.scss";
const HomePage = () => (
  <div className="container">
    <div className="main">
      <h1 className="heading">The Photography Club</h1>
      <p className="content">
        “Photography is the beauty of life captured.” The Photography Club is a
        crew of shutterbugs whose mission is to preach, practise and master the
        art of photography for the shared benefit of the self as well as the
        campus community.
      </p>
    </div>
    <div className="hr-line"></div>
    <div className="club-leads">
      <h2>Club Leads</h2>
    </div>
    <div className="members-card">
      <div class="card">
        <img
          src="https://captivators.vercel.app/images/HarshitKumarSingh.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h6 class="card-title">Harshit Kumar Singh</h6>

          <a href="#" class="btn btn-primary"></a>
        </div>
      </div>
      <div class="card">
        <img
          src="https://captivators.vercel.app/images/AvneeshKumar.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Avneesh Kumar</h5>

          <a href="#" class="btn btn-primary"></a>
        </div>
      </div>
      <div class="card">
        <img
          src="https://captivators.vercel.app/images/AditiMishra.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Aditi Mishra</h5>

          <a href="#" class="btn btn-primary"></a>
        </div>
      </div>
    </div>

    <div className="to-be-member">
      <h2>Become a member of the club.</h2>
     <a href="https://docs.google.com/forms/d/e/1FAIpQLSdxmCB39A7xFK-isDXkkhbxSbWGQh1SjDLXrC9N9BYqw-nHDg/viewform?usp=sf_link"> <button className="button" >
        <span>Register Now</span>
      </button></a>
    </div>
    <div className="uni-name">
      <a
        href="https://www.mjpru.ac.in/"
        target="_blank"
        className="uni-ref"
        rel="noreferrer"
      >
        M.J.P.R.U. Bareilly.
      </a>
    </div>
  </div>
);

export default HomePage;
