

const Table = ({data}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Record</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          return (
            <tr>
              <td>{item['name']}</td>
              <td>{item['value']}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  )
};

export default Table;
