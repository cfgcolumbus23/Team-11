"use client";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Form, Input, Button, InputNumber, DatePicker } from "antd"
const onFinish = () => {
    console.log("You submitted succesfully!");
}
const onFinishFailed = () => {
    console.error("There was an error in the submission!!");
}
export function AddAsessment({ testId }){
    const formRef = React.useRef(null);
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3001/api/assessmentQuestions/" + testId).then((response) => {
            console.log(response.data);
            setQuestions(response.data);
        });
    }, [axios, testId]);
    const onFinish = (values) => {
        axios.post("http://localhost:3001/api/rawAssessmentScores", {testId, ...values}).then((response) => {
            console.log("Server response " + response)
        });
    };
    return (<Form name="basic"
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
    {
        questions.map((question, index) => (
            <Form.Item
            key={index}
            label={question.question}
            name={["question_scores", index]}
            rules={[
                {
                    required: true,
                },
            ]}
        >
            <InputNumber max={question.totalPoints} step={question.pointsIncrement} />
        </Form.Item>
        ))
    }
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

</Form>);
}