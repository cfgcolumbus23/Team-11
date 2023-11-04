"use client";
import { Form, Input, Select } from "antd"
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
                    label="Child's Name"
                    name="childName"
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
                    label="Personal Data Recognition"
                    name="personalDataRec"
                    rules={[
                        {
                            required: true,
                            message: 'Please select a number!',
                        },
                    ]}
                >
                    <Select placeholder="On a scale of 1 to 10">
                        {Array.from({ length: 10 }, (_, index) => (
                            <option key={index + 1} value={index + 1}>
                                {index + 1}
                            </option>
                        ))}
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Colour Recoginition"
                    name="colourRec"
                    rules={[
                        {
                            required: true,
                            message: 'Please select a number!',
                        },
                    ]}
                >
                    <Select placeholder="On a scale of 1 to 10">
                    {Array.from({ length: 10 }, (_, index) => (
                            <option key={index + 1} value={index + 1}>
                                {index + 1}
                            </option>
                        ))}
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Picture Vocabulary"
                    name="picVoc"
                    rules={[
                        {
                            required: true,
                            message: 'Please select a number!',
                        },
                    ]}
                >
                    <Select placeholder="On a scale of 1 to 10">
                    {Array.from({ length: 10 }, (_, index) => (
                            <option key={index + 1} value={index + 1}>
                                {index + 1}
                            </option>
                        ))}
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Picture Recognition"
                    name="picRec"
                    rules={[
                        {
                            required: true,
                            message: 'Please select a number!',
                        },
                    ]}
                >
                    <Select placeholder="On a scale of 1 to 10">
                        {Array.from({ length: 10 }, (_, index) => (
                            <option key={index + 1} value={index + 1}>
                                {index + 1}
                            </option>
                        ))}
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Visual Discrimination"
                    name="visDisc"
                    rules={[
                        {
                            required: true,
                            message: 'Please select a number!',
                        },
                    ]}
                >
                    <Select placeholder="On a scale of 1 to 10">
                        {Array.from({ length: 10 }, (_, index) => (
                            <option key={index + 1} value={index + 1}>
                                {index + 1}
                            </option>
                        ))}
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Visual-Motor Skills"
                    name="visMotorSkills"
                    rules={[
                        {
                            required: true,
                            message: 'Please select a number!',
                        },
                    ]}
                >
                    <Select placeholder="On a scale of 1 to 10">
                        {Array.from({ length: 10 }, (_, index) => (
                            <option key={index + 1} value={index + 1}>
                                {index + 1}
                            </option>
                        ))}
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Gross-Motor Skills"
                    name="grossMotSkills"
                    rules={[
                        {
                            required: true,
                            message: 'Please select a number!',
                        },
                    ]}
                >
                    <Select placeholder="On a scale of 1 to 10">
                        {Array.from({ length: 10 }, (_, index) => (
                            <option key={index + 1} value={index + 1}>
                                {index + 1}
                            </option>
                        ))}
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Rote Counting"
                    name="roteCount"
                    rules={[
                        {
                            required: true,
                            message: 'Please select a number!',
                        },
                    ]}
                >
                    <Select placeholder="On a scale of 1 to 10">
                        {Array.from({ length: 10 }, (_, index) => (
                            <option key={index + 1} value={index + 1}>
                                {index + 1}
                            </option>
                        ))}
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Identifies Body Parts"
                    name="idBodyPart"
                    rules={[
                        {
                            required: true,
                            message: 'Please select a number!',
                        },
                    ]}
                >
                    <Select placeholder="On a scale of 1 to 10">
                    {Array.from({ length: 10 }, (_, index) => (
                            <option key={index + 1} value={index + 1}>
                                {index + 1}
                            </option>
                        ))}
                    </Select>
                </Form.Item>

                <Form.Item 
                    label="Follows Verbal Directions"
                    name="followDirec"
                    rules={[
                        {
                            required: true,
                            message: 'Please select a number!',
                        },
                    ]}
                    >
                    <Select placeholder="On a scale of 1 to 10">
                    {Array.from({ length: 10 }, (_, index) => (
                            <option key={index + 1} value={index + 1}>
                                {index + 1}
                            </option>
                        ))}
                    </Select>
                </Form.Item>

                <Form.Item 
                    label="Numeral Comprehension"
                    name="numComp"
                    rules={[
                        {
                            required: true,
                            message: 'Please select a number!',
                        },
                    ]}
                    >
                    <Select placeholder="On a scale of 1 to 10">
                    {Array.from({ length: 10 }, (_, index) => (
                            <option key={index + 1} value={index + 1}>
                                {index + 1}
                            </option>
                        ))}
                    </Select>
                </Form.Item>

                <Form.Item 
                    label="Prints Personal Data"
                    name="printData"
                    rules={[
                        {
                            required: true,
                            message: 'Please select a number!',
                        },
                    ]}
                    >
                    <Select placeholder="On a scale of 1 to 10">
                    {Array.from({ length: 10 }, (_, index) => (
                            <option key={index + 1} value={index + 1}>
                                {index + 1}
                            </option>
                        ))}
                    </Select>
                </Form.Item>

                <Form.Item 
                    label="Syntax and Fluency"
                    name="syntaxFluency"
                    rules={[
                        {
                            required: true,
                            message: 'Please select a number!',
                        },
                    ]}
                    >
                    <Select placeholder="On a scale of 1 to 10">
                    {Array.from({ length: 10 }, (_, index) => (
                            <option key={index + 1} value={index + 1}>
                                {index + 1}
                            </option>
                        ))}
                    </Select>
                </Form.Item>

            </Form>
        </div>
    )
}