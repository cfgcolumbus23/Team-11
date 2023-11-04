"use client";
import React, { useEffect } from 'react';
import { Table, Button, Space } from 'antd';
import { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
export function StudentList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/api/student").then((response) => {
        setData(response.data.map(data => ({...data, key: data._id})));
    });
  }, [axios]);
  const columns = [
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Birth Date',
      dataIndex: 'DOB',
      key: 'birthDate',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (record) => (
        <Space>
          <Button type="primary">
            <Link href={"students/" + record._id}>View Report</Link>
          </Button>
          <Button type="default" onClick={() => reportButtonAction(record)}>
            Contact Info
          </Button>
        </Space>
      ),
    },
  ];


  const reportButtonAction = (record) => {
    // when the 'view report' button is clicked for a specific student record
  };

  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}
