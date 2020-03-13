import * as React from 'react'

type Props = {
  items: string[]
}

export default function List(props: Props) {
  const {items} = props

  return (
    <ul>
      {items.map((item: string) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}
