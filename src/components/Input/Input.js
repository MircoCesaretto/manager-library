import { Input as AntInput, Switch, Checkbox, InputNumber } from "antd";
import React from "react";

const Input = (props) => {
    return (
        <>

            {!props.type &&
                <AntInput size="large" {...props} />
            }
             {props.type === "number" &&
                <InputNumber defaultValue={0} size="large" {...props} />
            }
            {props.type === "password" &&
                <AntInput.Password size="large" {...props} />
            }
            {props.type === "search" &&
                <AntInput.Search size="large" {...props} />
            }
            {props.type === "textarea" &&
                <AntInput.TextArea size="large" {...props} />
            }
            {props.type === "toggle" &&
                <Switch  {...props} />
            }
             {props.type === "checkbox" &&
                <Checkbox size="large" {...props} />
            }

        </>



    )
}
export default Input