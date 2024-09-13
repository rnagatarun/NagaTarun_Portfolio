import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img1 from '../../assets/profile_img1.png'

const About = () => {
  return (
    <div className='about'>
       <div className='about-title'>
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>

        <div className='about-sections'>
            <div className='about-left'>
                <img src={profile_img1} alt="" />
            </div>

            <div className='about-right'>
                <div className='about-para'>
                    <p>Hi, I'm R Naga Tarun, a Frontend Developer based in India. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.</p>
                    <p>My goal is to always build products that provide pixel-perfect, performant experiences</p>
                </div>

                <div className='about-skills'>
                    <div className='about-skill'><p>HTML & CSS</p> <hr style = {{width: "50%"}} /> </div>
                    <div className='about-skill'><p>React JS</p> <hr style = {{width: "70%"}} /> </div>
                    <div className='about-skill'><p>Java Script</p> <hr style = {{width: "80%"}} /> </div>
                    <div className='about-skill'><p>AWS</p> <hr style = {{width: "80%"}} /> </div>
                    <div className='about-skill'><p>TypeScript</p> <hr style = {{width: "70%"}} /> </div>    
                </div>
            </div>
        </div>

        <div className='about-achievements'>
            <div className='about-achievement'>
                <h1>Graduate from VIT</h1>
                <p>5+ projects</p>
            </div>
            
            <hr />

            <div className='about-achievement'>
                <h1>AWS Certified</h1>
                <p>AWS Cloud Practitioner</p>
            </div>

            <hr />

            <div className='about-achievement'>
                <h1>Microsoft Certified</h1>
                <p>AZ 900 Azure Fundamentals</p>
            </div>

        



        </div>
    </div>

  )
}

export default About
