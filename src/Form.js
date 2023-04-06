import { useState } from 'react';
import "./Fullform.css"

function BankDetailsForm() {
  const [bankName, setBankName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [ifsc, setIfsc] = useState('');
  const [branch, setBranch] = useState('');
  const [holderName, setHolderName] = useState('');

  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

   
    if (Object.keys(errors).length === 0)

     {
      // If there are no validation errors, create the bankDetails object and output it in JSON format
      const bankDetails = {
        bankName: bankName,
        accountNumber: accountNumber,
        ifsc: ifsc,
        branch: branch,
        holderName: holderName,

      };
      console.log(JSON.stringify(bankDetails));
    } 
    else { 
      // If there are validation errors, update the errors state and prevent the form submission
      setErrors(errors);
    }
    setBankName('');
setAccountNumber('');
setIfsc('');
setBranch('');
setHolderName('');
  };

  return (
    


    <form onSubmit={handleSubmit} className= 'shadow'>
    
      <label className='d-flex justify-content-center '>
        <div className='col-4'>
        Bank Name:
        </div>
        <div className='col-4'>
        <input  class="form-control bg-secondary text-dark"
         pattern= "^[A-Za-z]{3,16} [A-Za-z]+$"   
         required="true"  
          placeholder='bank Name'
          value={bankName}
          onChange={(event) => setBankName(event.target.value)}
        />
        </div>
        {errors.bankName && <span>{errors.bankName}</span>}
      </label> 
      
      
 <br />
      <label className="d-flex justify-content-center">
      <div className='col-4'>
        Account Number:
        </div>
        <div className='col-4'>
        <input 
           class="form-control bg-secondary text-dark"
           message= "invalid email address"
          pattern= "^[0-9]{3,16}"
          required="true"
          placeholder='16 digtes of account number'
          value={accountNumber}
          onChange={(event) => setAccountNumber(event.target.value)}
        /></div>
        {errors.accountNumber && <span>{errors.accountNumber}</span>}
      </label>
 <br />
      <label className=' d-flex justify-content-center'>
      <div className='col-4'>
        IFSC:
        </div>
        <div className='col-4'>
        <input
           class="form-control bg-secondary text-dark"
          value={ifsc}
          pattern= "^[A-Z,0-9]{3,16}"
          required="true"
          placeholder= "IFSC"
          onChange={(event) => setIfsc(event.target.value)}
        /></div>
        {errors.ifsc && <span>{errors.ifsc}</span>}
      </label>
<br />
      <label className='d-flex justify-content-center'>
      <div className='col-4'>
        Branch:
        </div>
        <div className='col-4'>
        <input
           class="form-control bg-secondary text-dark"
          placeholder='Branch'
          pattern= "^[A-Za-z]{3,16}[A-Za-z]+$" 
          required="true"
          value={branch}
          onChange={(event) => setBranch(event.target.value)}
        />
        </div>
        {errors.branch && <span>{errors.branch}</span>}
      </label>
<br />
<label className='d-flex justify-content-center'>
      <div className='col-4'>
      Holder Name:
        </div>
        <div className='col-4'>
        <input
           class="form-control bg-secondary text-dark"
          placeholder='holderName'
          pattern= "^[A-Za-z]{3,16} [A-Za-z]+$" 
          required="true"
          value={holderName}
          onChange={(event) => setHolderName(event.target.value)}
        />
        </div>
        {errors.holderName && <span>{errors.holderName}</span>}
      </label>
<br />


<div class="d-flex justify-content-center">
  <div class="col-4">

  </div>
  <div class="col-4">
  <button type="update" class="btn btn-outline-warning">update</button>

  </div>
  <div class="col-4">
  <button type="submit" class="btn btn-outline-warning">Submit</button>
  </div>

  <div class="col-4">

</div>
  </div>
      
      

    </form>
    
  );
}
export default BankDetailsForm;
