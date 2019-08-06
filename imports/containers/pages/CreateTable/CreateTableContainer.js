import React, { Component } from "react";
import CreateTable from "./CreateTable";
import TableForm from "../../Component/TableForm";

class CreateTableContainer extends Component {
  render() {
    return (
      <div>
        <CreateTable />
        <TableForm />
      </div>
    );
  }
}

export default CreateTableContainer;
