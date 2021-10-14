import React from 'react';

const styles = {
  highlight: {
    fontSize:'1.25rem',
    color:'orange',
    fontStyle:'thick',
    margin:'1%',
    padding:'1%'
},
  littleImg: {
    marginBottom:'1%',
    width:300,
    height:'100%',
    objectFit: 'contain',
    alignItems:'center',
    justifyContent:'center'
  },
    spanStyle:{
    textAlign: 'center',
    margin:'1%'
  },
  listStyle:{
    margin:'1%',
    width:'100%',
    textAlign:'center'
  }
}

export default function About() {
  return (
    <>
    <span style={styles.spanStyle}>
    <h2>About Me</h2>
    </span>

    <div className="d-flex justify-content-center flex-column align-items-center align-content-center">
        <img className="card-img-top" style={styles.littleImg} src="https://media-exp1.licdn.com/dms/image/C4E03AQG3tQ4GX-RDgQ/profile-displayphoto-shrink_800_800/0/1592799089030?e=1638403200&v=beta&t=JQmthvZNeKn8jvvV5BdduLYYcoGAzu-lB1Ad-BzWQYA" alt="A handsome young web developer"/>
        <p className="card-text" style={styles.littleImg}> My name is Pat and I make things. After a 7 year career making marketing content, I started my journey in web-development in 2021 and was immediately attracted to the challenge.</p>
        <br />
        <p className="card-text">Let's Build Something Together</p>
      </div>
      <br /><br />

    <div w-50 d-flex flex-row>
      <ul className="list-group d-flex justify-content-center flex-column align-items-center align-content-center">
        <li className="list-group-item" style={styles.listStyle}><span style={styles.highlight}>Languages: </span >Javascript ES6, CSS3, HTML5, mySQL</li>
        <li className="list-group-item" style={styles.listStyle}><span style={styles.highlight}>Applications: </span>GitHub, WordPress, SquareSpace, mySQL Workbench, Robo3T</li>
        <li className="list-group-item" style={styles.listStyle}><span style={styles.highlight}>Tools: </span>React, Redux, MongoDB, Express.js, Handlebars, Sequelize, Mongoose, GitHub</li>
      </ul>
    </div> 
    </>
  );
}
