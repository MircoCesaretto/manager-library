import './bootstrap.css'
import './App.css';
import React, { useState } from 'react';
import { ConfigProvider, Row, Col, ColorPicker, Space, DatePicker, Switch } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
// COMPONENTS
import Button from './components/Button/Button'
import Input from './components/Input/Input'
import Form from './components/Form/Form'
import FormItem from './components/FormItem/FormItem'
import Checkbox from './components/Checkbox/Checkbox'
import Radio from './components/Radio/Radio'
import Select from './components/Select/Select'

const App = () => {

  const [primaryColor, setPrimaryColor] = useState('#021F2E')
  const [textColor, setTextColor] = useState('black')
  const [negativeTextColor, setNegativeTextColor] = useState('white')

  const colorPickerPrimary = (e) => {
    setPrimaryColor(`rgb(${e.metaColor.r},${e.metaColor.g},${e.metaColor.b})`)
  }
  const colorPickerText = (e) => {
    setTextColor(`rgb(${e.metaColor.r},${e.metaColor.g},${e.metaColor.b})`)
    document.querySelectorAll('h1').forEach(el => el.style.color = `rgb(${e.metaColor.r},${e.metaColor.g},${e.metaColor.b})`)
    document.querySelectorAll('h2').forEach(el => el.style.color = `rgb(${e.metaColor.r},${e.metaColor.g},${e.metaColor.b})`)
    document.querySelectorAll('h3').forEach(el => el.style.color = `rgb(${e.metaColor.r},${e.metaColor.g},${e.metaColor.b})`)
    document.querySelectorAll('h4').forEach(el => el.style.color = `rgb(${e.metaColor.r},${e.metaColor.g},${e.metaColor.b})`)
    document.querySelectorAll('h5').forEach(el => el.style.color = `rgb(${e.metaColor.r},${e.metaColor.g},${e.metaColor.b})`)
    document.querySelectorAll('h6').forEach(el => el.style.color = `rgb(${e.metaColor.r},${e.metaColor.g},${e.metaColor.b})`)
  }
  const colorPickerNegativeText = (e) => {
    setNegativeTextColor(`rgb(${e.metaColor.r},${e.metaColor.g},${e.metaColor.b})`)
  }

  const colorPickerBackground = (e) => {
    document.querySelector('body').style.backgroundColor = `rgb(${e.metaColor.r},${e.metaColor.g},${e.metaColor.b})`
  }


  // COMPONENT SECTION:

  //   <Row className='library-row'>
  //     <Col className="library-col">
  //       <h2 className="library-h2">component</h2>
  //       <Component></Component>


  //     </Col>
  //   </Row>

  return (
    <ConfigProvider theme={{ token: { colorPrimary: primaryColor, colorTextBase: textColor, colorTextLightSolid: negativeTextColor } }}>
      <Space direction="vertical" className='colorpicker-container'>
        <h6>Primary color</h6>
        <ColorPicker defaultValue="#021F2E" onChangeComplete={colorPickerPrimary} size="large" />
        <h6>Background color</h6>
        <ColorPicker defaultValue="whitesmoke" onChangeComplete={colorPickerBackground} size="large" />
        <h6>Text color</h6>
        <ColorPicker defaultValue="black" onChangeComplete={colorPickerText} size="large" />
        <h6>Negative text color</h6>
        <ColorPicker defaultValue="white" onChangeComplete={colorPickerNegativeText} size="large" />
      </Space>
      <Row className='library-row'>
        <Col className="library-col">
          <h1 className="display-1">MANAGER LIBRARY</h1>
        </Col>
      </Row>

      <Row className='library-row'>
        <Col className="library-col">
          <h2 className="library-h2">button</h2>
          <Space className="mb-3">
            <Button shape="round" prefix={<FontAwesomeIcon className='btn-custom-icon-left' icon={faChevronLeft} />} type="primary">primary</Button>
            <Button prefix={<FontAwesomeIcon className='btn-custom-icon-left' icon={faArrowLeft} />} type="primary">primary</Button>
            <Button type="primary">primary</Button>
            <Button>default</Button>
            <Button disabled>disabled</Button>
            <Button type="link">Primary</Button>
            <Button shape="circle" type="primary">a</Button>
            <Button shape="round" type="primary">primary</Button>
            <Button suffix={<FontAwesomeIcon className='btn-custom-icon-right' icon={faArrowRight} />} type="primary">primary</Button>
            <Button shape="round" suffix={<FontAwesomeIcon className='btn-custom-icon-right' icon={faChevronRight} />} type="primary">primary</Button>
          </Space>
          <Space className="mb-3">
            <Button size="default" shape="round" prefix={<FontAwesomeIcon className='btn-custom-icon-left' icon={faChevronLeft} />} type="primary">primary</Button>
            <Button size="default" prefix={<FontAwesomeIcon className='btn-custom-icon-left' icon={faArrowLeft} />} type="primary">primary</Button>
            <Button size="default" type="primary">primary</Button>
            <Button size="default">default</Button>
            <Button size="default" disabled>disabled</Button>
            <Button size="default" type="link">Primary</Button>
            <Button size="default" shape="circle" type="primary">a</Button>
            <Button size="default" shape="round" type="primary">primary</Button>
            <Button size="default" suffix={<FontAwesomeIcon className='btn-custom-icon-right' icon={faArrowRight} />} type="primary">primary</Button>
            <Button size="default" shape="round" suffix={<FontAwesomeIcon className='btn-custom-icon-right' icon={faChevronRight} />} type="primary">primary</Button>
          </Space>
          <Space className="mb-3">
            <Button size="small" shape="round" prefix={<FontAwesomeIcon className='btn-custom-icon-left' icon={faChevronLeft} />} type="primary">primary</Button>
            <Button size="small" prefix={<FontAwesomeIcon className='btn-custom-icon-left' icon={faArrowLeft} />} type="primary">primary</Button>
            <Button size="small" type="primary">primary</Button>
            <Button size="small">default</Button>
            <Button size="small" disabled>disabled</Button>
            <Button size="small" type="link">Primary</Button>
            <Button size="small" shape="circle" type="primary">a</Button>
            <Button size="small" shape="round" type="primary">primary</Button>
            <Button size="small" suffix={<FontAwesomeIcon className='btn-custom-icon-right' icon={faArrowRight} />} type="primary">primary</Button>
            <Button size="small" shape="round" suffix={<FontAwesomeIcon className='btn-custom-icon-right' icon={faChevronRight} />} type="primary">primary</Button>
          </Space>

          <Button className="mb-3" block={true} type="primary">primary</Button>
          <Button className="mb-3" block={true} size="default" type="primary">primary</Button>
          <Button className="mb-3" block={true} size="small" type="primary">primary</Button>
          <Button className="mb-3" block={true} size="small" >primary</Button>
          <Button className="mb-3" block={true} size="default" >primary</Button>
          <Button className="mb-3" block={true} >primary</Button>


        </Col>
      </Row>




      <Row className='library-row'>
        <Col className="library-col">
          <h2 className="library-h2">input</h2>
          <Space direction='vertical' className="mb-3">




            {/* <Input size="large" prefix={<FontAwesomeIcon className='btn-custom-icon-left' icon={faArrowLeft} />} />
            <Input size="large" suffix={<FontAwesomeIcon className='btn-custom-icon-left' icon={faArrowRight} />} />
          </Space>
          <Space className="mb-3">
            <Input prefix={<FontAwesomeIcon className='btn-custom-icon-left' icon={faArrowLeft} />} />
            <Input suffix={<FontAwesomeIcon className='btn-custom-icon-left' icon={faArrowRight} />} />
          </Space>
          <Space className="mb-3">
            <Input size="small" prefix={<FontAwesomeIcon className='btn-custom-icon-left' icon={faArrowLeft} />} />
            <Input size="small" suffix={<FontAwesomeIcon className='btn-custom-icon-left' icon={faArrowRight} />} /> */}
            <h6>input standard</h6>
            <Input />
            <Input size="default" />
            <Input size="small" />
            <h6>input type number</h6>
            <Input type="number" />
            <Input type="number" size="default" />
            <Input type="number" size="small" />
            <h6>input type textarea</h6>
            <Input type="textarea" />
            <Input size="default" type="textarea" />
            <Input size="small" type="textarea" />
            <h6>input type password</h6>
            <Input type="password" />
            <Input size="default" type="password" />
            <Input size="small" type="password" />
            <h6>input type search</h6>
            <Input type="search" />
            <Input size="default" type="search" />
            <Input size="small" type="search" />
            <h6>input type toggle</h6>
            <Input type="toggle" />
            <Input size="small" type="toggle" />




          </Space>
        </Col>
      </Row>

      <Row className='library-row'>
        <Col className="library-col">
          <h2 className="library-h2">Checkbox</h2>
           <Checkbox>Maronne</Checkbox>
          <Checkbox options={["prima", "seconda", "terza"]} />


        </Col>
      </Row>

      <Row className='library-row'>
        <Col className="library-col">
          <h2 className="library-h2">Radio</h2>
          <Radio options={["prima", "seconda", "terza"]} />


        </Col>
      </Row>

      <Row className='library-row'>
        <Col className="library-col">
          <h2 className="library-h2">Select</h2>
          
          <Select options={[
            {
              value: '1',
              label: 'Not Identified',
            },
            {
              value: '2',
              label: 'Closed',
            },
            {
              value: '3',
              label: 'Communicated',
            },
            {
              value: '4',
              label: 'Identified',
            },
            {
              value: '5',
              label: 'Resolved',
            },
            {
              value: '6',
              label: 'Cancelled',
            },
          ]} />


<Select options={["prima", "seconda", "terza"]} />
<Select size="default" options={["prima", "seconda", "terza"]} />
<Select size="small" options={["prima", "seconda", "terza"]} />

        </Col>
      </Row>

      <Row className='library-row'>
        <Col className="library-col">
          <h2 className="library-h2">Form</h2>
          <Form
            autoComplete="off"
            labelCol={{ span: 10 }}
            wrapperCol={{ span: 14 }}
            onFinish={(values) => {
              console.log({ values });
            }}
            onFinishFailed={(error) => {
              console.log({ error });
            }}
          >
            <FormItem
              name="fullName"
              label="Full Name"
              rules={[
                {
                  required: true,
                  message: "Please enter your name",
                },
                { whitespace: true },
                { min: 3 },
                {
                  validator: (_, value) =>
                    value && value.includes("A")
                      ? Promise.resolve()
                      : Promise.reject("Password does not match criteria.")
                }
              ]}
              hasFeedback
            >
              <Input placeholder="Type your name" />
            </FormItem>

            <FormItem
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  message: "Please enter your email",
                },
                { type: "email", message: "Please enter a valid email" },
              ]}
              hasFeedback
            >
              <Input placeholder="Type your email" />
            </FormItem>

            <FormItem
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                },
                { min: 6 },
                {
                  validator: (_, value) =>
                    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(value) ?
                      Promise.resolve() :
                      Promise.reject("Password does not match criteria.")

                },
              ]}
              hasFeedback
            >
              <Input type="password" placeholder="Type your password" />

            </FormItem>

            <FormItem
              name="confirmPassword"
              label="Confirm Password"
              dependencies={["password"]}
              rules={[
                {
                  required: true,
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      "The two passwords that you entered does not match."
                    );
                  },
                }),
              ]}
              hasFeedback
            >
              <Input type="password" placeholder="Confirm your password" />
            </FormItem>

            <FormItem name="gender" label="Gender" requiredMark="optional">
              <Select options={["male","female"]} placeholder="Select your gender">
          
              </Select>
            </FormItem>

            <FormItem
              name="dob"
              label="Date of Birth"
              rules={[
                {
                  required: true,
                  message: "Please provide your date of birth",
                },
              ]}
              hasFeedback
            >
              <DatePicker
                style={{ width: "100%" }}
                picker="date"
                placeholder="Chose date of birth"
              />
            </FormItem>

            <FormItem
              name="website"
              label="Website"
              rules={[{ type: "url", message: "Please enter a valid url" }]}
              hasFeedback
            >
              <Input placeholder="Add your website url" />
            </FormItem>

            <FormItem
              name="toggle"
              label="Toggle"
              valuePropName="checked"
            >
              <Switch
                defaultChecked={false}>
              </Switch>
            </FormItem>
            <FormItem
              name="multicheck"
              wrapperCol={{ span: 24 }}
              valuePropName="checked"

            >
              <Checkbox options={['Apple', 'Pear', 'Orange']} />
            </FormItem>

            <FormItem
              name="radiogroup"
              wrapperCol={{ span: 24 }}
              valuePropName="checked"

            >
              <Radio options={['Apple', 'Pear', 'Orange']} />
            </FormItem>



            <FormItem
              name="agreement"
              wrapperCol={{ span: 24 }}
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(
                        "To proceed, you need to agree with our terms and conditions"
                      ),
                },
              ]}
            >
              <Checkbox>
                Agree to our <Button type="link">Terms and Conditions</Button>
              </Checkbox>
            </FormItem>




            <FormItem wrapperCol={{ span: 24 }}>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </FormItem>
          </Form>
        </Col>
      </Row>


    </ConfigProvider>
  );
}

export default App;

