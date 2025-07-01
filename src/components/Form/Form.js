import { Form as AntForm } from "antd";


const Form = (props) => {

  return (
    <AntForm {...props}>
      {props.children}
    </AntForm>
  )
}
export default Form