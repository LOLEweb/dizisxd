import React, { FC } from 'react'

import { Activity, Data } from './lanyard-data.interface';
import Active from './Active';



const Activities:FC<{activities:Data["activities"]}> = (props) => {
  return (
    <>
       {/* {props.activities && props.activities.map(activity => <Active activity={activity} /> )} */}
       {props.activities && props.activities.map(activity => <Active key={activity.id} activity={activity} /> )}
    </>
  )
}

export default Activities