import './MainPage.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'

const cardData = [
  {
    title: 'Access to Expert Resources',
    description:
      'Enjoy exclusive articles, tutorials, and videos from fitness professionals to enhance your knowledge.',
    imageUrl: assets.benefits4,
  },
  {
    title: 'Personalized Training Programs',
    description:
      'Customized workout plans to help you achieve your individual fitness goals.',
    imageUrl: assets.benefits3,
  },
  {
    title: 'Comprehensive Fitness Insights',
    description:
      'Gain insights into your fitness journey to identify strengths and areas for improvement.',
    imageUrl: assets.benefits1,
  },
  {
    title: 'Community Engagement',
    description:
      'Connect with fellow fitness enthusiasts to share experiences and motivate each other.',
    imageUrl: assets.benefits5,
  },
  {
    title: 'User-Friendly Interface',
    description:
      'Navigate easily with our intuitive platform designed for all sports levels.',
    imageUrl: assets.benefits2,
  },
]

const MainPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cardData.length - 1 : prevIndex - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cardData.length - 1 ? 0 : prevIndex + 1
    )
  }
  return (
    <div className="main-page">
      <div className="main-page-cta">
        <h1>Achieve Better Health and Strength</h1>
        <p>
          Unlock personalized fitness programs that help you improve your
          health, build strength and endurance, and connect with like-minded
          people. Achieve your goals while enjoying social interaction and
          community support.
        </p>
        <button>Get Started Today</button>
      </div>

      <div className="main-page-about-us">
        <h2>About Us</h2>
        <p>
          At <span>ACTIVE PULSE,</span> fitness is a lifestyle. We empower
          everyone to reach their health goals with personalized training and a
          supportive community. Improve strength, endurance, and wellness while
          connecting with others. Join us and achieve greatness!
        </p>
        <div className="main-page-about-us-img">
          <img src={assets.activites_icons} alt="" />
        </div>
      </div>

      <div className="main-page-benefits">
        <h2>Benefits</h2>
        <div className="main-benefits-card">
          <img
            src={assets.arrow_top}
            alt=""
            onClick={handlePrev}
            className="main-benefits-arrow-top"
          />
          <div className="main-benefits-card-item">
            <img src={cardData[currentIndex].imageUrl} alt="Benefit" />
            <h3>{cardData[currentIndex].title}</h3>
            <p>{cardData[currentIndex].description}</p>
          </div>
          <img
            src={assets.arrow_down}
            alt=""
            onClick={handleNext}
            className="main-benefits-arrow-down"
          />
        </div>
      </div>

      <div className="main-page-user-reviews">
        <h2>User Reviews</h2>
        {/* <div className="main-benefits-card">
          <img
            src={assets.arrow_top}
            alt=""
            onClick={handlePrev}
            className="main-benefits-arrow-top"
          />
          <div className="main-benefits-card-item">
            <img src={cardData[currentIndex].imageUrl} alt="Benefit" />
            <h3>{cardData[currentIndex].title}</h3>
            <p>{cardData[currentIndex].description}</p>
          </div>
          <img
            src={assets.arrow_down}
            alt=""
            onClick={handleNext}
            className="main-benefits-arrow-down"
          />
        </div> */}
      </div>
    </div>
  )
}

export default MainPage
