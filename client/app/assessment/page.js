"use client";
import { Form, Input, Select, Button, InputNumber, DatePicker } from "antd"
import React from 'react';
import axios from "axios";
const onFinish = () => {
    console.log("You submitted succesfully!");
}
const onFinishFailed = () => {
    console.error("There was an error in the submission!!");
}
export default function Assessment() {
    const formRef = React.useRef(null);
    const onFinish = (values) => {
        axios.post("http://localhost:3001/api/rawAssessmentScores", values).then((response) => {
            console.log("Server response " + response)
        })
    };
    return (
        <div>
            <p>Please input something :)</p>
            <Form name="basic"
                ref={formRef}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off">
                <h1>Form</h1>
                <Form.Item
                    label="Student ID (TODO)"
                    name="studentId"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your child\'s name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Date of exam"
                    name="date"
                    rules={[
                        {
                            required: true,
                            message: 'Please input the exam date',
                        },
                    ]}
                >
                    <DatePicker />
                </Form.Item>
                <Form.Item
                    label="School"
                    name="school"
                    rules={[
                        {
                            required: true,
                            message: 'Please input the name of the school',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Teacher"
                    name="teacher"
                    rules={[
                        {
                            required: true,
                            message: 'Please input the name of the teacher',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Personal Data Recognition"
                    name={["question_scores",0]}
                    rules={[
                        {
                            required: true,
                            message: 'Please select a number!',
                        },
                    ]}
                >
                    <InputNumber min={1} max={10} step={1} />
                </Form.Item>

                <Form.Item
                    label="Colour Recoginition"
                    name={["question_scores",1]}
                    rules={[
                        {
                            required: true,
                            message: 'Please select a number!',
                        },
                    ]}
                >
                    <InputNumber min={1} max={10} step={1}/>
                </Form.Item>

                <Form.Item
                    label="Picture Vocabulary"
                    name={["question_scores",2]}
                    rules={[
                        {
                            required: true,
                            message: 'Please select a number!',
                        },
                    ]}
                >
                    <InputNumber min={1} max={10} step={1}/>
                </Form.Item>

                <Form.Item
                    label="Visual Discrimination"
                    name={["question_scores",3]}
                    rules={[
                        {
                            required: true,
                            message: 'Please select a number!',
                        },
                    ]}
                >
                    <InputNumber min={1} max={10} step={1}/>
                </Form.Item>

                <Form.Item
                    label="Visual-Motor Skills"
                    name={["question_scores",4]}
                    rules={[
                        {
                            required: true,
                            message: 'Please select a number!',
                        },
                    ]}
                >
                    <InputNumber min={1} max={10} step={1}/>
                </Form.Item>

                <Form.Item
                    label="Gross-Motor Skills"
                    name={["question_scores",5]}
                    rules={[
                        {
                            required: true,
                            message: 'Please select a number!',
                        },
                    ]}
                >
                    <InputNumber min={1} max={10} step={1}/>
                </Form.Item>

                <Form.Item
                    label="Rote Counting"
                    name={["question_scores",6]}
                    rules={[
                        {
                            required: true,
                            message: 'Please select a number!',
                        },
                    ]}
                >
                    <InputNumber min={1} max={10} step={1}/>
                </Form.Item>

                <Form.Item
                    label="Identifies Body Parts"
                    name={["question_scores",7]}
                    rules={[
                        {
                            required: true,
                            message: 'Please select a number!',
                        },
                    ]}
                >
                    <InputNumber min={1} max={10} step={1}/>
                </Form.Item>

                <Form.Item
                    label="Follows Verbal Directions"
                    name={["question_scores",8]}
                    rules={[
                        {
                            required: true,
                            message: 'Please select a number!',
                        },
                    ]}
                >
                    <InputNumber min={1} max={10} step={1}/>
                </Form.Item>

                <Form.Item
                    label="Numeral Comprehension"
                    name={["question_scores",9]}
                    rules={[
                        {
                            required: true,
                            message: 'Please select a number!',
                        },
                    ]}
                >
                    <InputNumber min={1} max={10} step={1}/>
                </Form.Item>

                <Form.Item
                    label="Prints Personal Data"
                    name={["question_scores",10]}
                    rules={[
                        {
                            required: true,
                            message: 'Please select a number!',
                        },
                    ]}
                >
                    <InputNumber min={1} max={10} step={1}/>
                </Form.Item>

                <Form.Item
                    label="Syntax and Fluency"
                    name={["question_scores",11]}
                    rules={[
                        {
                            required: true,
                            message: 'Please select a number!',
                        },
                    ]}
                >
                    <InputNumber min={1} max={10} step={1}/>
                </Form.Item>
                <Form.Item
                    label="Observations"
                    name="observations"
                    rules={[
                        {
                            required: true,
                            message: 'Please observations',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Recommendations"
                    name="recommendations"
                >
                    <Input />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>

            </Form>
        </div>
    )
}