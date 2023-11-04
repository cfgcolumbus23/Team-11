"use client";
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react';
import axios from 'axios';
export default function Report() {
    const [response, setResponse] = useState({
        results:{
            Math: "Loading...",
            Reading: "Loading...",
            Physical: "Loading...",
            Socialemotional: "Loading..."
        },
        recommendations:{
            Math: 0,
            Reading: 0,
            Physical: 0,
            Socialemotional: 0
        }
    });
    const pathname = usePathname().split("/").pop();
    useEffect(() => {
        axios.get("http://localhost:3001/api/report/" + pathname).then((response) => {
            setResponse(response.data);
        });
    }, [axios])

    return (
        <div>
            <p>This is a report for the student with the ID {JSON.stringify(response)}</p>
            <table>
                <caption>Student Report</caption>
                <tr>
                    <th>Category</th>
                    <th>Score</th>
                    <th>Suggested Intervention</th>
                </tr>
                <tr>
                    <td>Math</td>
                    <td>{response.results.Math}</td>
                    <td>{response.recommendations.Math}</td>
                </tr>
                <tr>
                    <td>Reading</td>
                    <td>{response.results.Reading}</td>
                    <td>{response.recommendations.Reading}</td>
                </tr>
                <tr>
                    <td>Physical</td>
                    <td>{response.results.Physical}</td>
                    <td>{response.recommendations.Physical}</td>
                </tr>
                <tr>
                    <td>Social/Emotional</td>
                    <td>{response.results.Socialemotional}</td>
                    <td>{response.recommendations.Socialemotional}</td>
                </tr>
            </table>
        </div>
    );
}