"use client";
import React from 'react';
import axios from "axios";
import { Form, Input, Button } from "antd"
const onFinish = () => {
    console.log("You submitted succesfully!");
}
const onFinishFailed = () => {
    console.error("There was an error in the submission!!");
}

//contact form to send message out

export default function Contact() {
    return (
        <div>
            <Form name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off">
                <h1>Contact Child's Guardian</h1>
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input contact email!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Message"
                    name="message"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your message!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit" style={{ backgroundColor: "#1E90FF", borderColor: "#1E90FF" }}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}