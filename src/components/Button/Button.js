import './Button.scss'
import { Button as AntButton } from "antd";





const Button = (props) => {

  return (
    <AntButton
      size={props.size ? props.size : "large"}
      {...props}>

      {props.prefix &&
      props.prefix
      }
      {props.children &&
        props.children
      }
      {props.suffix &&
      props.suffix   
      }

    </AntButton>
  )
}
export default Button