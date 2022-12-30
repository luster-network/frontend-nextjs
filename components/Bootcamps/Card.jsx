import Image from 'next/image'
import React from 'react'

const Card = ({person}) => {
  return (
    <div>
        <Image src={person.image} alt={person.name} className="w-[20rem] h-[20rem]" />
        <p>{person.name}</p>
        <p>{person.review}</p>
    </div>
  )
}

export default Card
