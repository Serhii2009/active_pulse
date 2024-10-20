// import { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'

// const PersonalCabinet = () => {
//   const navigate = useNavigate()

//   useEffect(() => {
//     const token = localStorage.getItem('token')

//     if (!token) {
//       navigate('/login') // Якщо немає токену, перенаправляємо на сторінку входу
//     } else {
//       // Токен існує, можна надіслати запит на бекенд для перевірки токену
//       fetch('http://localhost:3001/personal-cabinet', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//         .then((response) => {
//           if (response.status === 401 || response.status === 403) {
//             // Якщо токен не валідний, перенаправляємо на сторінку входу
//             navigate('/login')
//           }
//         })
//         .catch((error) => {
//           console.error('Error verifying token:', error)
//           navigate('/login')
//         })
//     }
//   }, [navigate])

//   return (
//     <div>
//       <h1>Personal Cabinet</h1>
//       {/* Інформація користувача може бути тут */}
//     </div>
//   )
// }

// export default PersonalCabinet
