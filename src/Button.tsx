import { FC } from "react"

export interface IButton {
  onClick?: () => void
}

const Button: FC<IButton> = (props) => {
  return <>
    <button onClick={props.onClick}>Button</button>
    <input aria-label="name" />
    <input aria-label="age" />

  </>
}

export default Button;
