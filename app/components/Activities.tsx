import React, { FC } from 'react'

import { Data } from './lanyard-data.interface';
import Active from './Active';
import notAlbum from "../assets/NoAlb.png";


const Activities:FC<{activities:Data["activities"]}> = (props) => {

  if (!props.activities.length) {
    return <Active activity={{name: "No activity 😴", assets: {large_image: "../assets/unknown.png"}}} />
  }

  return (
    <>
       {props.activities && props.activities.map(activity => <Active key={activity.id} activity={activity} /> )}
    </>
  )
}

export default Activities