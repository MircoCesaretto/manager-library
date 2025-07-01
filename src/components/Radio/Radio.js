import { Radio as AntRadio } from "antd";





const Radio = (props) => {

  return (

    <>

      {props.options &&
        <AntRadio.Group {...props} />
      }

      {!props.options &&

        <AntRadio {...props} />
      }
    </>

  )
}
export default Radio