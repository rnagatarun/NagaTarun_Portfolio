import './Hero.css'
import profile_img from '../../assets/profile_img.png'

const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm R Naga Tarun,</span>React developer</h1>
        <p>Frontend Developer</p>
        <div className='hero-action'>
            <div className='hero-connect'>Connect With Me</div>
            <div className='hero-resume'>My Resume</div>

        </div>
    </div>
  )
}

export default Hero
