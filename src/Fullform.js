import React from 'react'
import "./Fullform.css";
 import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
 import Person2Icon from '@mui/icons-material/Person2';
 import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
 import ImageIcon from '@mui/icons-material/Image';
 import ApprovalIcon from '@mui/icons-material/Approval';
 import NoteIcon from '@mui/icons-material/Note';


function fullform() {
  return (
    <div>
      <h6 class="container mt-5"> My Profile</h6>
        <section>
        <nav class="navbar navbar-expand-lg bg-body-tertiary shadow p-3 mb-5 bg-body-tertiary rounded" id='nav1'>
  <div class="container" id='nav1'>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav1">
      <ul class="navbar-nav">
        <li class="nav-item m-4 p-3">
          <a class="nav-link" href="#"><Person2Icon/>My profile</a>
        </li>
     
        <li class="nav-item m-4 p-3">
          <a class="nav-link" href="#"><AccountBalanceIcon/>My finance</a>
        </li>
        <li class="nav-item m-4 p-3">
          <a class="nav-link" href="#"><ImageIcon/>Assets</a>
        </li>
        <li class="nav-item m-4 p-3">
          <a class="nav-link" href="#"><Person2Icon/> Attendence</a>
        </li>
        <li class="nav-item m-4 p-3">
          <a class="nav-link" href="#"><ApprovalIcon/>Approver</a>
        </li>
        <li class="nav-item m-4 p-3">
          <a class="nav-link" href="#"><NoteIcon/>claims</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </section>
 
    
        <div class="container text-center m-5 ">
  <div class="row" id='nav'>
    <div class="col">
    <a class="nav-link shadow p-3 mb-5 bg-body-dark-tertiary text-black rounded"  href="#">Account Details</a>

    </div>
    <div class="col">
    <a class="nav-link shadow p-3 mb-5 bg-body-tertiary text-black rounded" href="#">Pay slips</a>

    </div>
    <div class="col">
    <a class="nav-link shadow p-3 mb-5 bg-body-tertiary text-black rounded" href="#">Tax Form</a>

    </div>
  </div>
</div>

<h1><p class="text-center">Account Details</p></h1>

    </div>
    

    
  )
}

export default fullform
