import { useState, useEffect } from 'react'
import './TrainingMain.css'

const TrainingMain = () => {
  const [cards, setCards] = useState([])

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/cards') // заміни URL на свій, якщо потрібно
        const data = await response.json()
        if (data.success) {
          setCards(data.cards)
        } else {
          console.error('Failed to load cards:', data.message)
        }
      } catch (error) {
        console.error('Error fetching cards:', error)
      }
    }
    fetchCards()
  }, [])

  return (
    <div className="training-main">
      <h1 className="training-main-h1">Choose a training program</h1>
      <div className="cards-container">
        {cards.map((card) => (
          <div key={card._id} className="card">
            <img
              src={`http://localhost:3000${card.imageUrl}`}
              alt="Card image"
              className="card-image"
            />
            <p className="card-text">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrainingMain
