import { Styles } from "./styledComponents";

export function Table({ columns, data }) {
  return (
    <Styles>
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            const { id, firstName, lastName, time, otp } = item;
            return (
              <tr key={id}>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{time}</td>
                <td>{otp}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Styles>
  );
}
