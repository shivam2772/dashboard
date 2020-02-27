import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { user } from './data';
import { setDashboardData } from './action';
import './dashboard.scss';

const TableRow = ({ id, name, age, gender, email, phoneNo }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{age}</td>
      <td>{gender}</td>
      <td>{email}</td>
      <td>{phoneNo}</td>
    </tr>
  );
};
const Dashboard = props => {
  useEffect(() => {
    reDirectToLogin();
    props.fnSetDashBoardData(user);
  }, []);

  const reDirectToLogin = () => {
    if (!props.login.success) {
      props.history.push('/');
    }
  };

  const renderTableData = () => {
    if (props.dashboard.data) {
      return props.dashboard.data.map((userData, index) => {
        const { id, name, age, gender, email, phoneNo } = userData;
        return (
          <TableRow
            key={index}
            id={id}
            name={name}
            age={age}
            gender={gender}
            email={email}
            phoneNo={phoneNo}
          />
        );
      });
    } else {
      return null;
    }
  };
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone No</th>
          </tr>
        </thead>
        <tbody>{renderTableData()}</tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => ({
  dashboard: state.dashboard,
  login: state.login
});

const mapDispatchToProps = dispatch => ({
  fnSetDashBoardData: data => dispatch(setDashboardData(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
