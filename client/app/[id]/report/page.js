"use client";
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react';
import axios from 'axios';
export default function Report(){
    const [response, setResponse] = useState({});
    const pathname = usePathname().split("/");
    const studentId = pathname[pathname.length - 2];
    useEffect(
        () => {
            axios.get("http://localhost:3001/api/student/" + studentId).then((response) => {
                setResponse(response.data);
            });
        }, [axios, pathname]
    );
    return <p>This is a report for the student with the ID {JSON.stringify(response)}</p>;
}