"use client";
import React, { useEffect, useState } from 'react';
import { Table, Button, Space, Modal } from 'antd';
import ContactModal from './ContactModal';
import Link from 'next/link';
import axios from 'axios';
import { EditTwoTone, DeleteTwoTone } from '@ant-design/icons';

export function StudentList() {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentRecord, setCurrentRecord] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3001/api/student").then((response) => {
      setData(response.data.map(data => ({ ...data, key: data._id })));
    });
  }, []);

  const showModal = (record) => {
    setIsModalOpen(true);
    setCurrentRecord(record);
  };

  const handleOkCancel = () => {
    setIsModalOpen(false);
    if (isEditing) {
      resetEditing();
    }
  };

  const onDeleteStudent = (record) => {
    Modal.confirm({
      title: "Are you sure you want to delete this student record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setData(data.filter((student) => student._id !== record._id));
        // send a request to the server to delete the record as of right now it's
      },
    });
  };

  const onEditStudent = (record) => {
    setIsEditing(true);
    setEditingStudent({ ...record });
    showModal(record);
  };

  const resetEditing = () => {
    setIsEditing(false);
    setEditingStudent(null);
  };

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
          <Button type="default" onClick={() => showModal(record)}>
            Contact Info
          </Button>
          <Button onClick={() => onEditStudent(record)} icon={<EditTwoTone />} />
          <Button onClick={() => onDeleteStudent(record)} icon={<DeleteTwoTone />} type="danger" />
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={data} />
      <ContactModal isModalOpen={isModalOpen} onOk={handleOkCancel} onCancel={handleOkCancel} student={currentRecord} />
      {isEditing && (
        // placeholder for editing form or modal
        // replace the comment with actual JSX or another React component
        <div>Edit Student Form Placeholder</div>
      )}
      <Button type="primary" href="/add-student">Add a Student</Button>
    </div>
  );
}
