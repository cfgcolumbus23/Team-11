"use client";
import { usePathname } from 'next/navigation'
import { Progress } from 'antd';
import Plot from 'react-plotly.js';
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
            title: 'Plot',
            dataIndex: 'plotValues',
            key: 'plotValues',
            render: (plotValues) => {
                console.log(plotValues);
            return <div className="h-[150px] overflow-hidden positive-relative">
                <Plot
                className="absolute top-[-56%]"
                data={[
                {
                    x: Array.from({ length: plotValues.length }, (v, i) => i),
                    y: plotValues,
                    type: 'scatter',
                },
                ]}
                layout={ {width: 320, height: 300,
                    xaxis: {
                        visible:false,
                    },
                    yaxis: {
                        range:[0,100]    
                    },
                paper_bgcolor: 'rgba(0,0,0,0)', // Transparent background
                plot_bgcolor: 'rgba(0,0,0,0)', // Transparent background
                }}
                config={{
                    displayModeBar: false,
                    staticPlot: true
                }}
            />
          </div>},
        },
        {
            title: 'Results',
            dataIndex: 'results',
            key: 'results',
            render: (text) => <div className="relative pt-2 w-44"> {/* pt-2 or any other padding class to give space for the tick */}
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
    const response = responses[responses.length - 1];
    
    //checker to make sure response.length is not 0
    if (responses.length == 0) {
        return (
            <div>
                <h3>Report</h3>
                <p>There is no report for this student.</p>
                <p>Press home to go back.</p>
            </div>
        );
    }
    const data = [
        {
            key: "Math",
            plotValues: responses.map(response => response.results.Math),
            category: "Math",
            results: response.results.Math,
            recommendations: response.recommendations.Math,
        },
        {
            key: "Reading",
            plotValues: responses.map(response => response.results.Reading),
            category: "Reading",
            results: response.results.Reading,
            recommendations: response.recommendations.Reading,
        },
        {
            key: "Physical",
            plotValues: responses.map(response => response.results.Physical),
            category: "Physical",
            results: response.results.Physical,
            recommendations: response.recommendations.Physical,
        },
        {
            key: "Socialemotional",
            plotValues: responses.map(response => response.results.Socialemotional),
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