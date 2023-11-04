"use client";
import React, { useEffect } from 'react';
import { Table, Button, Space } from 'antd';
import { useState } from 'react';
import ContactModal from './ContactModal';
import Link from 'next/link';
import axios from 'axios';
export function StudentList() {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentRecord, setCurrentRecord] = useState({});

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
      title: 'Actions',
      key: 'actions',
      render: (record) => (
        <Space>
          <Button type="primary" disabled={!record.assessments.length}>
            <Link href={`/${record._id}/report`}>View Report</Link>
          </Button>
          <Button type="primary">
            <Link href={`/${record._id}/assessment`}>Create Assessment</Link>
          </Button>
          <Button type="default" onClick={() => {
            showModal();
            setCurrentRecord(record);
          }}>
            Contact Info
          </Button>
        </Space>
      ),
    },
  ];


  const reportButtonAction = (record) => {
    // when the 'view report' button is clicked for a specific student record
  };
  console.log(isModalOpen)
  return (
    <div>
      <Table columns={columns} dataSource={data} />
      <ContactModal isModalOpen={isModalOpen} onOk={handleOk} onCancel={handleCancel} student={currentRecord}/>
      <Button type="primary" href="/add-student">Add a Student</Button>
    </div>
  );
}
