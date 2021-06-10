import React from "react";
import jicon from '../Jlogo.png'

const Skill = () => {
  return (
    <div className="container">
      <h1 className="skill">skill</h1>
      <div class="card-group">
        <div class="card">
          <div class="card-body">
            <h1 className="html">
              <i class="fab fa-html5"></i>
            </h1>
            <p class="card-text">⭐⭐⭐⭐⭐</p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h1 className="css">
              <i class="fab fa-css3-alt"></i>
            </h1>
            <p class="card-text">⭐⭐⭐⭐</p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h1 className="javascript">
              <i class="fab fa-js-square"></i>
            </h1>
            <p class="card-text">⭐⭐⭐⭐</p>
          </div>
        </div>
      </div>

{/* ********************************************************************************** */}



<div class="card-group">
  <div class="card ">
    
    <div class="card-body">
      <h1 className="bootstrap"><i class="fab fa-bootstrap"></i></h1>
      <p class="card-text">⭐⭐⭐⭐</p>
      
    </div>
  </div>
  <div class="card">
    
    <div class="card-body">
    <img src={jicon} className="jquery"/>
      <p class="card-text">⭐⭐⭐⭐</p>
      
    </div>
  </div>
  <div class="card">
    
    <div class="card-body">
     <h1 className="react"><i class="fab fa-react"></i></h1>
      <p class="card-text">⭐⭐⭐</p>
      
    </div>
  </div>
</div>


{/* *************************************************************************************** */}


<div class="card-group">
  <div class="card">
   
    <div class="card-body">
      <h1 className="node"><i class="fab fa-node"></i></h1>
      <p class="card-text">⭐⭐⭐</p>
    </div>
  </div>
  <div class="card">
    
    <div class="card-body">
      <h1 className="database"><i class="fas fa-database"></i></h1>
      <p class="card-text">⭐⭐⭐</p>
    </div>
  </div>
  <div class="card">
    
    <div class="card-body">
      <h1 className="git"><i class="fab fa-github"></i></h1>
      <p class="card-text">⭐⭐⭐</p>
      
    </div>
  </div>
</div>

<p className="skill_keyword">HTML | CSS | JAVASCRIPT | BOOTSTRAP | JQUERY | REACT | NODE.JS | MONGO DB | GIT, GITHUB</p>








    </div>
  );
};

export default Skill;
