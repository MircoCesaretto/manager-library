import './Select.scss'
import { Select as AntSelect } from "antd";
import React, { useEffect, useState } from "react";


const Select = (props) => {
  const [customProps, setCustomProps] = useState(null)


  useEffect(() => {
    let arrivingOptions = { ...props }.options
    let newProps = { ...props }
    newProps.options = arrivingOptions.map(el => typeof el !== "object" ? { value: el, label: el } : el)
    setCustomProps(newProps)
  }, [])

  return (
    <>
      {customProps &&
        <AntSelect size={props.size ? props.size : "large"} {...customProps} />
      }
    </>
  )
}
export default Select