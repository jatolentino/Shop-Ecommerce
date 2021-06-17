import React from "react";
import catavatar from "../../../assets/img/catavatar.jpg" 

const vendorColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "age",
      headerName: "Age",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ]

const vendorRows = [
    {
      id: 1,
      username: "John Doe",
      img: `${catavatar}`,
      status: "active",
      email: "vendor@gmail.com",
      age: 23,
    },
    {
      id: 2,
      username: "Camilla Hale",
      img: "https://i.pravatar.cc/150?img=5",
      email: "camilla@yahoo.com",
      status: "inactive",
      age: 34,
    },
    {
      id: 3,
      username: "Martha Knee",
      img: "https://i.pravatar.cc/150?img=49",
      email: "martha@gmail.com",
      status: "pending",
      age: 28,
    },
    {
      id: 4,
      username: "Dwayne Louis",
      img: "https://i.pravatar.cc/150?img=13",
      email: "dwayne@gmail.com",
      status: "active",
      age: 40,
    },
    {
      id: 5,
      username: "Raymond Herman",
      img: "https://i.pravatar.cc/150?img=52",
      email: "raymon@outlook.com",
      status: "inactive",
      age: 25,
    },
    {
      id: 6,
      username: "Jenifer Patterson",
      img: "https://i.pravatar.cc/150?img=19",
      email: "jenifer@yahoo.com",
      status: "active",
      age: 37,
    },
    {
      id: 7,
      username: "Mark O'Donnell",
      img: "https://i.pravatar.cc/150?img=53",
      email: "mark@hotmail.com",
      status: "inactive",
      age: 41,
    },
    {
      id: 8,
      username: "Dana Bennett",
      img: "https://i.pravatar.cc/150?img=43",
      email: "dana@gmail.com",
      status: "active",
      age: 36,
    },
    {
      id: 9,
      username: "Kate Brown",
      img: "https://i.pravatar.cc/150?img=44",
      email: "kate@hotmail.com",
      status: "pending",
      age: 35,
    },
    {
      id: 10,
      username: "Marlon Jens",
      img: "https://i.pravatar.cc/150?img=66",
      email: "marlon@outlook.com",
      status: "active",
      age: 53,
    },
  ]

export {
  vendorColumns,
  vendorRows,
}
