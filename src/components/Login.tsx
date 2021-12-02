import { useState } from "react"
interface Users {
  username: string,
  password: string
}



function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const users: Users[] = [
    {
      username: 'Niclas', password: 'Niclas123'
    },
    {
      username: 'Sofia', password: 'Sofia123'
    },
    {
      username: 'Zeljko', password: 'Zeljko123'
    },
    {
      username: 'Sandra', password: 'Sandra123'
    },
  ]

  function submitLogin() {
    const validUsername = users.filter(user => user.username === username)
    const validPassword = users.filter(user => user.password === password)

    if (validPassword.length > 0 && validUsername.length > 0) {
      setError('')
      setIsLoggedIn(true)
      console.log('Woho!')
    } else {
      console.log('Nope nu blev det fel')
      setError('Fel användarnamn eller lösenord')
    }
  }

  function userLogout() {
    // Här borde vi göra något mer avancerat om vi hade haft rikitga users :P
    setIsLoggedIn(false)
  }

  return (
    <section>
      {!isLoggedIn &&
        <>
          <label>Användarnamn</label>
          <input id="inputUsername" type="text" placeholder="Användarnamn" onChange={(event) => (setUsername(event.target.value))} />
          <label>Lösenord</label>
          <input id="inputPassword" type="password" onChange={(event) => (setPassword(event.target.value))} />
          <button type="submit" id="loginBtn" onClick={submitLogin}>Logga in</button>
          {error && <div>{error}</div>}
        </>
      }
      {isLoggedIn && (
        <>
          <h2>Välkommen {username}</h2>
          <button id="logoutBtn" onClick={userLogout}>Logga ut</button>
          {/* Här rendrerar vi en logga ut knapp och order historik */}
        </>
      )}
    </section>

  )
}

export default Login