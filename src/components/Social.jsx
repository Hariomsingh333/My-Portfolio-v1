import React from "react";

const Social = () => {
  return (
    <div className="social">
      <div className="social__text">
        <h3>i am also in internet 🌐</h3>
      </div>
      <div className="social__icon">
        <div className="social__twitter">
          <span>
            <a href="https://twitter.com/Hari_om_333">
              <i class="fab fa-twitter"></i>
            </a>
          </span>
        </div>
        <div className="social__github">
          <span>
            <a href="https://github.com/Hariomsingh333">
              <i class="fab fa-github"></i>
            </a>
          </span>
        </div>
        <div className="social__codepen">
          <span>
            <a href="https://codepen.io/hari_om_333">
              <i class="fab fa-codepen"></i>
            </a>
          </span>
        </div>
        <div className="social__sandbox">
          <span>
            <a href="https://codesandbox.io/dashboard/home?workspace=ccf18c8d-4a63-4b87-9526-5c27e3151519">
              <i class="fas fa-code"></i>
            </a>
          </span>
        </div>
        <div className="social__stackoverflow">
          <span>
            <a href="https://stackoverflow.com/users/15909476/hari-om-singh">
              <i class="fab fa-stack-overflow"></i>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Social;
