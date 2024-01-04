"use client";
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Track = () => {
    const CLIENT_ID = "1ffce38320d44a2eb392cf00eddbbb8d"
    const REDIRECT_URI = "http://localhost:3000/"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

    const [token, setToken] = useState("")
    const [searchKey, setSearchKey] = useState("")

    useEffect(() => {
        const hash = window.location.hash
        let token:any = window.localStorage.getItem("token")

        if(!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token"))?.split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
            setToken(token)
        }
    }, [])

    const logout = () => {
      setToken("")
      window.localStorage.removeItem("token")
    }

    const searchArtists = async () => {
      const {data} = await axios.get("https://api.spotify.com/v1/search", {

      })
    }

  return (
    <div>
        
        {!token ? 
        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>login to spotify</a>  
        : <button onClick={logout}>Logout</button>}
        
        {token ? 
        <form onSubmit={searchArtists}>
          <input type="text" onChange={e => setSearchKey(e.target.value)}/>
          <button type='submit'>Search</button>
        </form>  

        : <h2>Please login</h2>
      }
    </div>
  )
}

export default Track
