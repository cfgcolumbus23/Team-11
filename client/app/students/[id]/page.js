"use client";
import { usePathname } from 'next/navigation'
import { useState } from 'react';
import axios from 'axios';
export default function Report(){
    const [response, setResponse] = useState({});
    const pathname = usePathname().split("/").pop();
    axios.get("http://localhost:3001/api/student/" + pathname).then((response) => {
        setResponse(response.data);
    });
    return <p>This is a report for the student with the ID {JSON.stringify(response)}</p>;
}