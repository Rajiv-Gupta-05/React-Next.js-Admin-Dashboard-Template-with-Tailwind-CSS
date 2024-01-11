import { useMemo, useState, useEffect } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import axios from "axios";


const UsersList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get('/api/users')
    .then(response => {
      console.log('Data', response);
      setData(response.data);
      setLoading(false);
    })
    .catch(err => {
      console.log("Error",err);
    })
  };

  //should be memoized or stable
  const columns = useMemo(
    () => [
      
      {
        accessorKey: "name",
        header: "Name",
        size: 150,
      },
      {
        accessorKey: "email", //normal accessorKey
        header: "Email",
        size: 200,
      },
      {
        accessorKey: "type",
        header: "Type",
        size: 150,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
  });

  return (
    <>
      {!loading && (
        <MaterialReactTable columns={columns} data={data} />
      )}
    </>
  );
};

export default UsersList;
