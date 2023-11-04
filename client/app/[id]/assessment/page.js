"use client";
import React from 'react';
import { useState } from "react";
import { Select } from 'antd';
import { AddAsessment } from './AddAsessment';
import { useEffect } from 'react';
import axios from 'axios';
const testIds = ["Kindergarten", "2"];
export default function Assessment() {
    const [allowedTestIds, setAllowedTestIds] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3001/api/assessmentQuestions/ids/").then((response) => {
            setAllowedTestIds(response.data);
        });
    }, [axios]);
    const [selectedTest, setSelectedTest] = useState(null);
    return (
        <div>
            <p>Please Select a Brigance Test</p>
            <Select style={{width:200}} value={selectedTest} onChange={(val) => setSelectedTest(val)}
            options={allowedTestIds.map(testId => ({
                label: `${testId} Test`,
                value: testId,
            }))}/>
            {selectedTest === null ? "" : <AddAsessment testId={selectedTest}/>}
        </div>
    )
}