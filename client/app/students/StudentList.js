import React from 'react';
import { Table, Button } from 'antd';

export default function StudentReports() {
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
      dataIndex: 'birthDate',
      key: 'birthDate',
    },
    {
      title: 'Reports',
      dataIndex: 'reportData',
      key: 'reportData',
    },
    {
      title: 'Student Information',
      dataIndex: 'studentInfo',
      key: 'studentInfo',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: () => (
        <span>
          <Button type="primary">
            View Report
          </Button>
          <Button type="default" onClick={() => reportButtonAction(record)}>
            Custom Action
          </Button>
        </span>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      firstName: 'Ruby',
      lastName: 'James',
      birthDate: '04/917/2002',
    },
    {
      key: '2',
      firstName: 'Carl',
      lastName: 'Latter',
      birthDate: '04/04/2016',
    },
    {
      key: '3',
      firstName: 'Water',
      lastName: 'Bottle',
      birthDate: '07/22/2054',
    },
    {
      key: '4',
      firstName: 'Tracy',
      lastName: 'Colon',
      birthDate: '06/03/2012',
    },
  ];

  const reportButtonAction = (record) => {
    // when the 'view report' button is clicked for a specific student record
    console.log(`Custom action for ${record.firstName} ${record.lastName}`);
  };

  return (
    <div>
      <h2>Student Reports</h2>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}
