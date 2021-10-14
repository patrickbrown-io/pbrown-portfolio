import React from 'react';
  //  styling
const styles = {
  imageTile: {
    // width:500,
    // height:500,
    // objectFit: 'contain',
    // backgroundSize:'cover'
},
  buttons:{
    margin:'1%'
  },
  spanStyle:{
    textAlign: 'center',
    margin:'1%'
  },
  bottom:{
    // marginBotton:'5%',
    paddingBottom:'5%'
  }

};
  //  Array of Project Objects
const projectData = [
    {
    name: 'mooVie',
    description: 'A Full-Stack NFT Marketplace Project | Javascript, Handlebars, Express.js, Express Session, mySQL',
    href:'https://blooming-anchorage-52775.herokuapp.com/',
    repo:'https://github.com/patrickbrown-io/Proj3',
    img: 'https://github.com/patrickbrown-io/Proj3/raw/main/assets/images/Moovie-screenshot.png'
  },
  {
    name: 'Google Books Search',
    description: 'A MERNG Stack Book Search Engine | Google Books API, MongoDB, Express.js, React, Node.js, GraphQL',
    href:'https://whispering-river-55779.herokuapp.com/',
    repo:'https://github.com/patrickbrown-io/Book-Search-Engine',
    img: 'https://github.com/patrickbrown-io/Book-Search-Engine/raw/main/assets/screenshot.jpg'
  },
  {
    name: 'NFTy',
    description: 'A Full-Stack NFT Marketplace Project | Javascript, Handlebars, Express.js, Express Session, mySQL',
    href:'https://project2-nfty.herokuapp.com/',
    repo:'https://github.com/patrickbrown-io/NFTy',
    img: 'https://patrickbrown-io.github.io/patrick-brown-portfolio/assets/nfty-screenshot.png'
  },
  {
    name: 'Fitness Tracker',
    description: 'A mongoDB backend for a Workout Tracker App',
    href:'https://vast-shore-72948.herokuapp.com/?id=614a46b0bb365c00163e685d',
    repo:'https://github.com/patrickbrown-io/Fitness-Tracker',
    img:'https://github.com/patrickbrown-io/Fitness-Tracker/raw/main/assets/screenshot2.jpg'
  },
  {
    name: 'eCommerce Backend',
    description: 'A Fully-Functional mySQL Backend | Built with ExpressJS and Sequelize',
    href: 'https://github.com/patrickbrown-io/e-commerce-back-end',
    repo:'https://github.com/patrickbrown-io/e-commerce-back-end',
    img:'https://github.com/patrickbrown-io/e-commerce-back-end/blob/main/assets/screenshot.jpg?raw=true',
  },
    {
    name: 'the Vibe Forecast',
    description: 'A weather API-based playlist generator | Javascript, jQuery, Bootstrap',
    href: 'https://adamkuemmel.github.io/theVibeForecast/',
    repo:'https://github.com/patrickbrown-io/theVibeForecast',
    img:'https://images.unsplash.com/photo-1555580399-49e780f216b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3774&q=80',
  },
];


export default function Projects(props) {
  return ( 
    <>
    <span style={styles.spanStyle}>
    <h2>Javascript Projects</h2>
    <p>Here you can find some of my latest projects</p>
    </span>
    <div className="justify-content-center flex-column align-content-center row">
      {projectData.map((project) => (
        <div className="card flex col-sm">
        <img style={styles.imageTile} className="card-img-top" src={project.img} alt="Card image cap"/>
        <div className="card-body">
        <h5 className="card-title">{project.name}</h5>
        <p className="card-text">{project.description}.</p>
        <a href={project.href} style={styles.buttons} class="btn btn-dark" target="_blank" rel="noreferrer">Deployed</a>
        <a href={project.href} style={styles.buttons}class="btn btn-dark-outline" target="_blank" rel="noreferrer">Code Repo</a>
      </div>
      </div>
      ))}
    </div>
    <div style={styles.bottom}></div>
    </>
  );
}
