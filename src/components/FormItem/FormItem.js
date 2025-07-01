import { Form } from "antd";


const FormItem = (props) => {

  return (
    <Form.Item {...props}>
      {props.children}
    </Form.Item>
  )
}
export default FormItem