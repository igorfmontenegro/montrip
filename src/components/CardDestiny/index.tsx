import { Card } from './CardDestiny.styles'

interface CardDestinyProps {
  src: string
  city: string
}

export function CardDestiny(props: CardDestinyProps) {
  return (
    <Card>
      <div>
        <img src={props.src} />
      </div>

      <p> {props.city}</p>
    </Card>
  )
}
