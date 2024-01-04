'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
import { DiscordStatus, Root } from './lanyard-data.interface'
import notAlbum from '../assets/NoAlb.png'
import { log } from 'console'


// const status = (status:DiscordStatus | undefined) => {
// switch (status) {
// case 'online': return 'bg-green-500'
// case 'idle': return 'bg-yellow-500'
// case 'dnd': return 'bg-red-500'
// case 'offline': return 'bg-gray-500'
// default: return 'bg-gray-500'
// }
// }


const Spotik = () => {

const [data, setData] = useState<Root>()

    useEffect(() => {
    const asyncFunc = async () => {
    const data = await axios.get<Root>("https://api.lanyard.rest/v1/users/835837384297545748")
        setData(data.data)
        }
        asyncFunc()
        }, [])


        // const act = () => {
        // if (!data?.data.activities.length) {
        // return
        // }
        // const test = data?.data?.activities!.filter((activity) => activity.name != "Spotify")
        // console.log(test)
        // }
        // act()



        return (
        <>

            <div
                className='bg-[#141821] flex items-center sm:flex-row flex-col rounded-[10px] p-3 mt-4 hover:scale-[1.05] cursor-pointer duration-300'>
                <div className='rounded-[10px] bg-[#141414]'>
                    {data?.data.listening_to_spotify ?
                    <Image className='rounded-[10px] sm:w-[100px] w-full' width={100} height={100} alt='img'
                        src={data?.data.spotify.album_art_url} />
                    :
                    <Image className='rounded-[10px]' width={100} height={100} alt='img' src={notAlbum} />
                    }
                </div>
                <div className='px-4 py-2'>
                    {data?.data.listening_to_spotify ? <h2 className='text-xl sm:text-2xl'>{data?.data.spotify.song}</h2> : <h1
                        className='text-xl'>No playing songs</h1>}
                    {data?.data.listening_to_spotify ? <p className='text-md'>Artrist: <span className='underline'>{data?.data.spotify.artist}</span></p> :
                    undefined}
                    {data?.data.listening_to_spotify ? <p className='text-md pt-2'>Album: <span className='underline'>{data?.data.spotify.album}</span></p> : undefined}
                    {/* <p>{data?.data?.activities!.filter((activity) => activity.name != "Spotify")}</p> */}
                </div>
            </div>
        </>
        )
        }

        export default Spotik