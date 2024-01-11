"use client"
import styles from './page.module.scss'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
const Home = () => {

  const [userName, setName] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const handleLogin = () => {
    if(userName === 'jyjin' && password === '123'){
      router.push('/')
    }else{
      alert('用户名或密码错误')
    }
  }

  return (
    <div className={styles.login}>
      <h1>登录</h1>
      <input type="text" onChange={e => setName(e.target.value)} />
      <input type="password" onChange={e => setPassword(e.target.value)} />
      <button onClick={() => handleLogin()}>登录</button>
    </div>
  )
}

export default Home