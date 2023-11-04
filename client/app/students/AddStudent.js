"use client";
import { Form } from "antd";
import React from 'react';
import { DatePicker, Button, Input } from "antd";
import axios from "axios";
export function AddStudent(){
    const formRef = React.useRef(null);
    const onFinish = (values) => {
        axios.post("http://localhost:3001/api/student/", values);
    };
    return (<Form
    ref={formRef}
    name="control-ref"
    onFinish={onFinish}
    >
        <Form.Item label="First Name" name="firstName">
            <Input />
        </Form.Item>
        <Form.Item label="Last Name" name="lastName">
            <Input />
        </Form.Item>
        <Form.Item label="Date of Birth" name="DOB">
            <DatePicker/>
        </Form.Item>
        <Form.Item>
            <Button type="primary" htmlType="submit">
            Submit
            </Button>
        </Form.Item>
    </Form>);
}