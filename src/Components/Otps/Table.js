import { Styles } from "./styledComponents";

export function Table({ columns, data }) {
  console.log(data);
  return (
    <Styles>
      <table>
        <tr>
          {columns.map((column) => (
            <th>{column}</th>
          ))}
        </tr>
        {data.map((item) => {
          const { firstName, lastName, time, otp } = item;
          return (
            <tr>
              <td>{firstName}</td>
              <td>{lastName}</td>
              <td>{time}</td>
              <td>{otp}</td>
            </tr>
          );
        })}
      </table>
    </Styles>
  );
}
