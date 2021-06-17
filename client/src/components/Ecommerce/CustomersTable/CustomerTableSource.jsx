import React from "react";


const customerColumns = [
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

const customerRows = [
    {
      id: 1,
      username: "Jennie Nichols",
      img: "https://i.pravatar.cc/150?img=47",
      status: "active",
      email: "user@gmail.com",
      age: 27,
    },
    {
      id: 2,
      username: "Alan Wake",
      img: "https://i.pravatar.cc/150?img=68",
      email: "alan@yahoo.com",
      status: "inactive",
      age: 38,
    },
    {
      id: 3,
      username: "Tom Hanks",
      img: "https://i.pravatar.cc/150?img=3",
      email: "tom@yahoo.com",
      status: "pending",
      age: 33,
    },
    {
      id: 4,
      username: "Ryana Burns",
      img: "https://i.pravatar.cc/150?img=16",
      email: "ryan@gmail.com",
      status: "active",
      age: 29,
    },
    {
      id: 5,
      username: "Tina Drake",
      img: "https://i.pravatar.cc/150?img=38",
      email: "tina@hotmail.com",
      status: "inactive",
      age: 22,
    },
    {
      id: 6,
      username: "Jack Sparrow",
      img: "https://i.pravatar.cc/150?img=8",
      email: "jack@outlook.com",
      status: "active",
      age: 32,
    },
    {
      id: 7,
      username: "Deana Bourne",
      img: "https://i.pravatar.cc/150?img=45",
      email: "deana@yahoo.com",
      status: "inactive",
      age: 24,
    },
    {
      id: 8,
      username: "Kygan Wayne",
      img: "https://i.pravatar.cc/150?img=33",
      email: "kygan@gmail.com",
      status: "active",
      age: 36,
    },
    {
      id: 9,
      username: "Roy Payton",
      img: "https://i.pravatar.cc/150?img=56",
      email: "roy@gmail.com",
      status: "pending",
      age: 35,
    },
    {
      id: 10,
      username: "Della Rouse",
      img: "https://i.pravatar.cc/150?img=23",
      email: "della@gmail.com",
      status: "active",
      age: 25,
    },
  ]

export {
  customerColumns,
  customerRows,
}
