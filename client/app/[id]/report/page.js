"use client";
import { usePathname } from 'next/navigation'
import { Progress } from 'antd';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'antd';
export default function Report() {
    const [responses, setResponses] = useState([{
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
    }]);
    const columns = [
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Results',
            dataIndex: 'results',
            key: 'results',
            render: (text) => <div className="relative pt-2"> {/* pt-2 or any other padding class to give space for the tick */}
            <Progress strokeColor={"#37B672"} percent={text} showInfo={false} />
            
            {/* Tick mark at 50% */}
            <div className="absolute -translate-x-1/2 -translate-y-1/2 h-3 top-[calc(50%-3px)]" style={{ left: '50%' }}>
              <div className="w-0.5 h-full bg-black"></div> {/* w-0.5 for the line thickness */}
            </div>
            
            {/* Tick mark at 75% */}
            <div className="absolute -translate-x-1/2 -translate-y-1/2 h-3 top-[calc(50%-3px)]" style={{ left: '75%' }}>
              <div className="w-0.5 h-full bg-black"></div>
            </div>
          </div>
        },
        {
            title: 'Recommendations',
            dataIndex: 'recommendations',
            key: 'recommendations',
        },
    ]
    const pathname = usePathname().split("/");
    const studentId = pathname[pathname.length - 2];
    useEffect(() => {
        axios.get("http://localhost:3001/api/report/" + studentId).then((response) => {
            setResponses(response.data.results);
        });
    }, [axios])
    console.log(responses);
    const response = responses[responses.length - 1];
    const data = [
        {
            key: "Math",
            category: "Math",
            results: response.results.Math,
            recommendations: response.recommendations.Math,
        },
        {
            key: "Reading",
            category: "Reading",
            results: response.results.Reading,
            recommendations: response.recommendations.Reading,
        },
        {
            key: "Physical",
            category: "Physical",
            results: response.results.Physical,
            recommendations: response.recommendations.Physical,
        },
        {
            key: "Socialemotional",
            category: "Socialemotional",
            results: response.results.Socialemotional,
            recommendations: response.recommendations.Socialemotional,
        }
    ]
    
    return (
        <div>
            <h3>Report</h3>
            <Table dataSource={data} columns={columns} />
        </div>
    );
}