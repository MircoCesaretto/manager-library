import { Checkbox as AntCheckbox } from "antd";





const Checkbox = (props) => {

  return (

    <>

      {props.options &&
        <AntCheckbox.Group {...props} />
      }

      {!props.options &&
        <AntCheckbox {...props} />
      }
    </>

  )
}
export default Checkbox