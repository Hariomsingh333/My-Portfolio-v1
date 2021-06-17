import React from "react";
import img1 from "../components/ProjectImg/GuessMyNumber.jpg";
import img2 from "../components/ProjectImg/YtDemo.jpg";
import img3 from "../components/ProjectImg/band.jpg";
import img4 from "../components/ProjectImg/colorChange.png";

const Project = () => {
  return (
    <div>
      <h1> this my project</h1>
      <div className="project">
        {/* bootstrap  */}

        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
         
            <div class="carousel-item active">
              <div className="pro-img1">
                <a
                  href="https://hariomsingh333.github.io/Guess-my-Number---Game/"
                  target="_blank"
                >
                  {" "}
                  <img
                    src={img1}
                    class="d-block w-100"
                    alt="guess my number project"
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <h2>Guess My Number</h2>
                    <p>
                      this is a game were you find a number and when you find
                      the number you win
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div class="carousel-item">
              <a
                href="https://hariomsingh333.github.io/yt-demo/"
                target="_blank"
              >
                <img
                  src={img2}
                  class="d-block w-100"
                  alt="YouTube Demo Website"
                />
                <div class="carousel-caption d-none d-md-block text-dark">
                  <h2>YouTube Demo</h2>
                  <p>
                    This website is look like yt and it is. i made this website
                    for fun
                  </p>
                </div>
              </a>
            </div>
            <div class="carousel-item">
              <a
                href="https://hariomsingh333.github.io/musical-band/"
                target="_blank"
              >
                <img src={img3} class="d-block w-100" alt="Musical Band game" />
                <div class="carousel-caption d-none d-md-block text-dark">
                  <h2>This is a Musical Band game</h2>
                  <p>
                    in this game you can play the game with sound effect, i hope
                    you like it
                  </p>
                </div>
              </a>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
