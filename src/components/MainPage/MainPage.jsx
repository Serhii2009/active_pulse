import './MainPage.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'
import { toast } from 'react-toastify'

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

const testimonialsData = [
  {
    name: 'Sophia Brown',
    text: 'This platform has transformed my approach to fitness! The variety of training programs keeps me motivated, and the tracking features help me stay on track. Highly recommend it to anyone serious about their fitness goals!',
    image: assets.user,
  },
  {
    name: 'James Williams',
    text: 'I had an amazing experience with this fitness platform! The training programs are well-structured and easy to follow. I’ve seen significant progress in my fitness journey, and I love the supportive community!',
    image: assets.user2,
  },
  {
    name: 'Emma Johnson',
    text: 'Absolutely love this fitness app! The community support and challenges keep me engaged, and the trainers are very knowledgeable. It’s the best investment I’ve made in my health!',
    image: assets.user4,
  },
  {
    name: 'Olivia Jones',
    text: 'The app is user-friendly, and the workouts are challenging yet enjoyable. However, I would appreciate more nutritional guidance. Overall, a great tool for anyone looking to improve their fitness!',
    image: assets.user1,
  },
  {
    name: 'Michael Smith',
    text: 'The app is user-friendly, and the workouts are challenging yet enjoyable. However, I would appreciate more nutritional guidance. Overall, a great tool for anyone looking to improve their fitness!',
    image: assets.user3,
  },
  {
    name: 'Liam Garcia',
    text: 'Great workouts and a motivating atmosphere. I would love to see more live classes offered. Overall, a solid platform for anyone looking to get fit and stay active!',
    image: assets.user5,
  },
]

const MainPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [testimonialIndex, setTestimonialIndex] = useState(0)

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

  const handlePrevTestimonial = () => {
    setTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 2 : prevIndex - 2
    )
  }

  const handleNextTestimonial = () => {
    setTestimonialIndex((prevIndex) =>
      prevIndex >= testimonialsData.length - 2 ? 0 : prevIndex + 2
    )
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)

    formData.append('access_key', '6744e5c5-7336-47ee-80c4-8c5b6b27ecd5')

    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then((res) => res.json())

    if (res.success) {
      toast.success(res.message)
    } else {
      toast.error('There was an error submitting the form.')
    }
  }

  return (
    <div className="main-page">
      <div className="main-page-cta">
        <div className="main-page-group-info">
          <h1>Achieve Better Health and Strength</h1>
          <p>
            Unlock personalized fitness programs that help you improve your
            health, build strength and endurance, and connect with like-minded
            people. Achieve your goals while enjoying social interaction and
            community support.
          </p>
          <button>Get Started Today</button>
        </div>
        <img
          src={assets.man_woman_run}
          alt=""
          className="man_woman_run_tablet"
        />
        <img
          src={assets.man_woman_run_desktop}
          alt=""
          className="man_woman_run_desktop"
        />
      </div>

      <div className="main-page-about-us">
        <h2>About Us</h2>
        <p className="main-page-about-us-text-mobile">
          At <span>ACTIVE PULSE,</span> fitness is a lifestyle. We empower
          everyone to reach their health goals with personalized training and a
          supportive community. Improve strength, endurance, and wellness while
          connecting with others. Join us and achieve greatness!
        </p>

        <div className="main-page-about-us-text-desktop-container">
          <p className="main-page-about-us-text-desktop">
            At <span>ACTIVE PULSE,</span> we believe fitness is a lifestyle, not
            just a routine. Our mission is to empower individuals at every level
            to achieve their health goals through personalized training programs
            and a supportive community. We focus on holistic well-being, helping
            you improve strength, endurance, and overall wellness while
            connecting with like-minded individuals. Join us on your journey to
            becoming the best version of yourself, and let’s achieve greatness
            together!
          </p>
          <div className="main-page-about-us-img">
            <img src={assets.activites_icons} alt="" />
          </div>
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
        <div className="main-user-reviews">
          <img
            src={assets.arrow_top}
            alt=""
            onClick={handlePrevTestimonial}
            className="main-reviews-arrow-top"
          />

          <div className="main-user-reviews-cards">
            <div className="main-user-reviews-card1">
              <div className="main-user-reviews-info">
                <img
                  src={testimonialsData[testimonialIndex].image}
                  alt="Reviewer"
                />
                <h3>{testimonialsData[testimonialIndex].name}</h3>
              </div>
              <p>{testimonialsData[testimonialIndex].text}</p>
            </div>

            <div className="main-user-reviews-card2">
              <div className="main-user-reviews-info">
                <img
                  src={testimonialsData[testimonialIndex + 1].image}
                  alt="Reviewer"
                />
                <h3>{testimonialsData[testimonialIndex + 1].name}</h3>
              </div>
              <p>{testimonialsData[testimonialIndex + 1].text}</p>
            </div>
          </div>

          <img
            src={assets.arrow_down}
            alt=""
            onClick={handleNextTestimonial}
            className="main-reviews-arrow-down"
          />
        </div>
      </div>

      <div className="main-page-feedback-form">
        <h2>Feedback Form</h2>
        <div className="main-page-feedback-form-wrapper">
          <img
            src={assets.men_photo}
            alt=""
            className="main-page-feedback-form-men-photo"
          />
          <form onSubmit={onSubmit} className="main-page-feedback-form-contact">
            <label htmlFor="">Your name</label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              required
            />

            <label htmlFor="">Your email</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              required
            />

            <label htmlFor="">Your message</label>
            <textarea
              name="message"
              rows="8"
              placeholder="Enter your message"
              required
            ></textarea>
            <button
              type="submit"
              className="main-page-feedback-form-contact-submit"
            >
              Sent
            </button>
          </form>

          <img
            src={assets.men_photo_descktop}
            alt=""
            className="main-page-feedback-form-men-photo-descktop"
          />
        </div>
      </div>

      <div className="main-page-footer">
        <img
          src={assets.footer_logo}
          alt=""
          className="main-page-footer-logo"
        />

        <div className="main-page-footer-center">
          <div className="main-page-footer-info">
            <ul className="main-page-footer-info-contacts">
              <li>+38 099 157 2258</li>
              <li>serhiikravchenko@gmail.com</li>
            </ul>

            <p>Privacy Policy Public Offering Agreement</p>
          </div>

          <div className="main-page-footer-links">
            <ul className="main-page-footer-links-pages">
              <li>Training programs</li>
              <li>News and articles</li>
              <li>FAQ</li>
            </ul>

            <ul className="main-page-footer-links-landing">
              <li>About us</li>
              <li>Benefits</li>
              <li>User Reviews</li>
              <li>Feedback Form</li>
              <li>Contacts</li>
            </ul>
          </div>

          <p className="main-page-footer-policy">
            2024 ACTIVE PULSE © All rights reserved
          </p>
        </div>
      </div>
    </div>
  )
}

export default MainPage
