"use client";
import React, { useEffect, useState } from 'react';
import { Table, Button, Space } from 'antd';
import axios from 'axios';
import StudentModal from '../../components/StudentModal'; // Adjust the path to the correct one

export function StudentList() {
  const [data, setData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3001/api/student").then((response) => {
      setData(response.data.map(data => ({...data, key: data._id})));
    });
  }, []);

  const columns = [
    {
      title: 'Actions',
      key: 'actions',
      render: (record) => (
        <Space>
          <Button type="primary">
            View Report
          </Button>
          <Button type="default" onClick={() => reportButtonAction(record)}>
            Contact Info
          </Button>
        </Space>
      ),
    },
  ];

  const reportButtonAction = (record) => {
    setSelectedStudent(record);
    setIsModalVisible(true);
  };

  const handleClose = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Table columns={columns} dataSource={data} />
      {selectedStudent && (
        <StudentModal
          student={selectedStudent}
          isVisible={isModalVisible}
          handleClose={handleClose}
        />
      )}
    </div>
  );
}
