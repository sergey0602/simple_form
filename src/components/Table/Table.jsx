import { useSelector } from "react-redux";
import "./Table.css";

export const Table = () => {
  const fieldsState = useSelector((state) => state);

  const rows = fieldsState
    .filter((row) => {
      const { firstName, lastName, email, message } = row;
      return firstName && lastName && email && message;
    })
    .map((row) => {
      const { firstName, lastName, email, message } = row;
      return (
        <tr key={firstName + lastName}>
          <td>{firstName}</td>
          <td>{lastName}</td>
          <td>{email}</td>
          <td>{message}</td>
        </tr>
      );
    });

  return rows.length ? (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Message</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  ) : null;
};
