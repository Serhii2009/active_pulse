// /* eslint-disable no-undef */

// const jwt = require('jsonwebtoken') // Для роботи з JWT токенами

// const authenticateToken = (req, res, next) => {
//   // Отримуємо заголовок Authorization
//   const authHeader = req.headers['authorization']

//   // Токен зазвичай передається у вигляді 'Bearer <токен>'
//   const token = authHeader && authHeader.split(' ')[1]

//   // Якщо токену немає, повертаємо статус 401 (Unauthorized)
//   if (!token) return res.sendStatus(401)

//   // Перевіряємо валідність токену
//   jwt.verify(token, JWT_SECRET, (err, user) => {
//     if (err) return res.sendStatus(403) // Якщо токен недійсний, повертаємо 403 (Forbidden)

//     // Якщо токен валідний, зберігаємо дані користувача в req.user
//     req.user = user

//     // Переходимо до наступного middleware або обробки запиту
//     next()
//   })
// }

// module.exports = authenticateToken
