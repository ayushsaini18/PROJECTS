import React from 'react'

function DeleteTODO() {
    let todoitem='Buy Milk';
    let date='12/12/24'
  return (
    <div> <div className="container text-center">
    <div className="row">
      <div className="col-6">{todoitem}</div>
      <div className="col-4">{date}</div>
      <div className="col-2">
        <button type="button" className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  </div>

  <div className="container text-center">
    <div className="row">
      <div className="col-6">Go to college</div>
      <div className="col-4">12/12/24</div>
      <div className="col-2">
        <button type="button" className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  </div></div>
  )
}

export default DeleteTODO