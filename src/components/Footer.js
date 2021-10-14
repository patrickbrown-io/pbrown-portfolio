import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFile } from '@fortawesome/free-regular-svg-icons';

// We declare an object called styles that will contain a few objects for card and heading styles
const styles = {
  // card: {
  //   margin: 20,
  //   background: '#e8eaf6',
  //   minHeight: 50,
  //   lineHeight: 3.5,
  // },
  // heading: {
  //   background: '#9a74db',
  //   minHeight: 50,
  //   lineHeight: 3.5,
  //   fontSize: '1.2rem',
  //   color: 'white',
  //   padding: '0 20px',
  //   borderRadius: "0px 50px 50px 0px"
  // },

  footer: {
    width: "100%",
    backgroundColor: "black",
    flex: 1,
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flexWrap: "wrap",
    position: "fixed",
    bottom: 0,
},

  ul: {
    justifyContent: 'center',
    alignContent: 'center',
    flex: 3,
    color: 'whitesmoke',
    display: 'flex',
    margin: '1% 1%',
    flexDirection: 'row',
  },

  navlink: {
    color: 'white',
    padding: '0.5% 2%',
    textDecoration: 'none'
},
  iconStyle: {
    color:'white'
  }

};

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Footer() {
  return (
    <>
    <ul style={styles.footer} className="nav position-fixed h100 b0">
      <li className="nav-item" style={styles.ul}>
        <a
          target="_blank"
          rel="noreferrer"
          style={styles.navlink}
          href="https://github.com/patrickbrown-io"
          onClick={() => console.log("hi!")}
        >
          <FontAwesomeIcon style={styles.iconStyle}icon={faGithub}/>
        </a>
      </li>
      <li className="nav-item" style={styles.ul}>
        <a
          style={styles.navlink}
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/patrick-brown-9930a365/"
          onClick={() => console.log('About')}
        >
          <FontAwesomeIcon style={styles.iconStyle}icon={faLinkedin}/>
        </a>
      </li>
      <li className="nav-item" style={styles.ul}>
        <a
          target="_blank"
          rel="noreferrer"
          style={styles.navlink}   
          href="src\patrickbrown-resume.pdf"
          onClick={() => console.log('Projects')}
          download
        >
          <FontAwesomeIcon style={styles.iconStyle}icon={faFile}/>
        </a>
      </li>
      {/* <li className="nav-item" style={styles.ul}>
        <a
          target="_blank"
          rel="noreferrer"
          style={styles.navlink}
          href="tel:8123229561"
        >
          <FontAwesomeIcon style={styles.iconStyle}icon={faPhone}/>
        </a>
      </li> */}
      <li className="nav-item" style={styles.ul}>
        <a
          target="_blank"
          rel="noreferrer"
          style={styles.navlink}
          href="mailto:patbrowndesigns@gmail.com"
        >


          <FontAwesomeIcon style={styles.iconStyle}icon={faEnvelope}/>


        </a>
      </li>
      
    </ul>
  </>
  );
}

export default Footer;