"use state"
import React, {
useEffect,
useState
} from 'react'
import {
Root
} from './lanyard-data.interface'
import axios from 'axios'
import Image from 'next/image'
import notAlbum from '../assets/NoAlb.png'
import { Tooltip } from '@chakra-ui/react'
const Active = () => {

const [data, setData] = useState <Root> ()

    useEffect(() => {
    const asyncFunc = async () => {
    const data = await axios.get <Root> ("https://api.lanyard.rest/v1/users/835837384297545748")
        setData(data.data)
        }
        asyncFunc()
        }, [])


        let time:any = data?.data.activities[0].timestamps.start; // берется timestamps

        const date = new Date(time);
        const now = new Date();

        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();

        const startTime = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
        const currentTime = hours * 3600 + minutes * 60 + seconds;
        let elapsedTime = currentTime - startTime;

        if (elapsedTime < 0) { elapsedTime +=24 * 3600; }
         hours=Math.floor(elapsedTime / 3600); 
         minutes=Math.floor((elapsedTime % 3600) /60); 
         seconds=elapsedTime % 60; 
         const finalTime=hours + ':' + minutes + ':' + seconds;
            
            return ( 
            <>
            <div
                className='bg-[#141821] flex items-center sm:flex-row flex-col rounded-[10px] p-3 mt-4 cursor-pointer hover:scale-[1.05] duration-300'>
                <div className='rounded-[10px] bg-[#141414] relative'>

                    {data?.data.activities[0] ?
                    <Tooltip label={`${data?.data.activities[0].assets.large_text}`} placement='top' hasArrow>
                        <Image className='rounded-[10px] sm:w-[100px] w-full' width={100} height={100} alt='img'
                            src={`https://cdn.discordapp.com/app-assets/383226320970055681/${data?.data.activities[0].assets.large_image}.png`} />
                    </Tooltip>

                    :<Tooltip label='No activity' placement='top' hasArrow>
                        <Image className='rounded-[10px]' width={100} height={100} alt='img' src={notAlbum} />
                    </Tooltip>

                    }



                    {data?.data.activities[0] ?
                    <Tooltip label={`${data?.data.activities[0].assets.small_text}`} placement='top' hasArrow>
                        <Image className='active active__pos w-full' width={100} height={100} alt='img'
                            src={`https://cdn.discordapp.com/app-assets/383226320970055681/${data?.data.activities[0].assets.small_image}.png`} />
                    </Tooltip>
                    :
                    undefined
                    }

                </div>
                <div className='px-4 py-2'>
                    {data?.data.activities[0] ? <h3 className=' text-lg font-bold'>{data?.data.activities[0].name}</h3>
                    : <h3 className=' text-lg font-bold'>No activity 😴</h3>
                    }
                    {data?.data.activities[0] ? <p>{data?.data.activities[0].details}</p> : undefined}
                    {data?.data.activities[0] ? <p>{data?.data.activities[0].state}</p> : undefined}
                    {/* {data?.data.activities[0] ? <p>Elapsed: {finalTime}</p> : undefined} */}

                </div>
            </div>
        </>
        )
        }

        export default Active