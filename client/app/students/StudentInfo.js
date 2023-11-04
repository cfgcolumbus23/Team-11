import React from 'react';
import { Layout, Card, List } from 'antd';

const studentsInfo = [
  {
    name: 'Water Bottle',
    phoneNumber: 'jWB@example.com',
  },
  // add more student data here?? or add in dynamic
];

const Student = ({ student }) => {
  return (
    <Card title="Student Contavt Infoooo">
      <List
        dataSource={student}
        renderItem={(item) => (
          <List.Item>
            <strong>Name:</strong> {item.name} <br />
            <strong>Phone Number:</strong> {item.phoneNumber} <br />
            {/* add other contact information here? */}
          </List.Item>
        )}
      />
    </Card>
  );
};

const StudentsPage = () => {
  return (
    <Layout>
      <Student student={studentsInfo} />
    </Layout>
  );
};

export default StudentsPage;
