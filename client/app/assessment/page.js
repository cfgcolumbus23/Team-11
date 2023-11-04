"use client";
import { useState } from "react";
import { Select } from 'antd';
import { AddAsessment } from './AddAsessment';
const testIds = ["1", "2"];
export default function Assessment() {
    const [selectedTest, setSelectedTest] = useState("1");
    return (
        <div>
            <p>Please input something :)</p>
            <Select style={{width:200}} value={selectedTest} onChange={(val) => setSelectedTest(val)} options={testIds.map(testId => ({
                label: `Test ${testId}`,
                value: testId,
            }))}/>
            <AddAsessment testId={selectedTest}/>
        </div>
    )
}