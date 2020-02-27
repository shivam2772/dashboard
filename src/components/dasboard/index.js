import React from 'react';
import { user } from './data';
import './dashboard.scss';

const Dashboard = props => {
  const renderTableData = () => {
    return user.map(data => {
      return (
        <>
          <tr>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.age}</td>
            <td>{data.gender}</td>
            <td>{data.email}</td>
            <td>{data.phoneNo}</td>
          </tr>
        </>
      );
    });
  };
  return (
    <div className="dashboard">
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Email</th>
          <th>Phone No</th>
        </tr>
        {renderTableData()}
      </table>
    </div>
  );
};

export default Dashboard;
