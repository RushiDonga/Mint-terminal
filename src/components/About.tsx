const About = () => {
  return (
    <div>
      <div>
        <div className="about">
          <img src="https://rushidonga.github.io/assets/images/upload_face.png" alt="profile_pic" />
          <div>
          I am a passionate and dedicated software developer with a strong 
          foundation in web technologies, particularly in React and Flutter. 
          Currently pursuing a Master’s degree in Applied Computer Science 
          at Concordia University, I have honed my skills in building dynamic 
          and responsive applications. My experience includes developing 
          serverless architectures, implementing secure authentication systems, 
          and creating user-friendly interfaces that enhance user engagement. 
          I thrive on challenges and enjoy collaborating with cross-functional 
          teams to deliver innovative solutions. <br />
            <br /> With a keen interest in both frontend and backend development, 
            I am always eager to learn new technologies and improve my skill set. 
            My projects reflect my commitment to quality and efficiency, whether 
            t's optimizing application performance or ensuring seamless user 
            experiences. I am excited to contribute my technical expertise 
            and creativity to impactful projects that make a difference. 
            Feel free to modify any part of this introduction to better 
            reflect your personality or specific experiences!
          </div>
        </div>
        <br />
        <br />
        Here are a few technologies I've known thoroughly:
        <br />
        <ul className="skill-container">
          <li className="skill-tag"> ⚛ React.js</li>
          <li className="skill-tag"> ⚛ Flutter</li>
          <li className="skill-tag"> 📱 Java</li>
          <li className="skill-tag"> 📱 Python</li>
          <li className="skill-tag"> 📱 Docker</li>
          <li className="skill-tag"> 📱 Kubernetes</li>
          <li className="skill-tag">
            {" "}
            <i className="fa-solid fa-database"></i> AWS
          </li>
          {/* <li className="skill-tag">
            {" "}
          </li> */}
          
          <br />
        </ul>
        
        <br />
        Some of my soft skills:
        <br />
        <ul className="skill-container">
          <li className="skill-tag">Leadership</li>
          <li className="skill-tag">Teamwork</li>
          <li className="skill-tag">Commitment</li>
          <li className="skill-tag">Multitasking</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
