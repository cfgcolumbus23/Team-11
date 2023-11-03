"use client";
import { Form, Input } from "antd"
const onFinish = () => {
    console.log("You submitted succesfully!");
}
const onFinishFailed = () => {
    console.error("There was an error in the submission!!");
}
export default function Assessment() {
    return (
        <div>
            <p>Please input something :)</p>
            <Form name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off">
                <h1>Form</h1>
                <Form.Item 
                label="Username"
                name="username">
                    <Input />
                </Form.Item>
            </Form>
        </div>
    )
}