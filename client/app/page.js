import React from 'react';
import { StudentList } from './StudentList';
export default function StudentReports() {
  return (
    <div>
      <h2>Students Registry</h2>
      <p>Below is a list of all of your students</p>
      <StudentList />
    </div>
  );
}
