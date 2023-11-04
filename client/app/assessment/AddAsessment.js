"use client";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Form, Input, Button, InputNumber, DatePicker, Select, message} from "antd"

export function AddAsessment({ testId }){
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Form submitted successfully',
        });
    };
    const error = () => {
        messageApi.open({
            type: 'error',
            content: 'There was an error in the submission!!',
        });
    };
    const formRef = React.useRef(null);
    const [questions, setQuestions] = useState([]);
    const [allowedStudentIds, setAllowedStudentIds] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3001/api/student").then((response) => {
            setAllowedStudentIds(response.data.map(data => ({
                label: `${data.firstName} ${data.lastName}`,
                value: data._id,
            })))
        });
    }, [axios, testId]);
    useEffect(() => {
        axios.get("http://localhost:3001/api/assessmentQuestions/" + testId).then((response) => {
            setQuestions(response.data.questions);
        });
    }, [axios, testId]);
    const onFinish = (values) => {
        success();
        axios.post("http://localhost:3001/api/rawAssessmentScores", {testId, ...values}).then((response) => {
            console.log("Server response " + response)
        });
        
    };
    const onFinishFailed = (values) => {
        error();
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
        label="Student"
        name="studentId"
        rules={[
            {
                required: true,
                message: 'Please select a student from a dropdown',
            },
        ]}
    >
        <Select options={allowedStudentIds}/>
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
            <InputNumber min={0} max={question.totalPoints} step={question.pointsIncrement} />
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
        {contextHolder}
        <Button type="primary" htmlType="submit">
            Submit
        </Button>
    </Form.Item>


</Form>);
}