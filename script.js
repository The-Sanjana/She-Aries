document.getElementById('loanForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission to handle it with JavaScript
    
    // Retrieve form values
    const employeeID = document.getElementById('employeeID').value;
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const designation = document.getElementById('designation').value;
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const loanDate = new Date(document.getElementById('loanDate').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const maturityDate = new Date(document.getElementById('maturityDate').value);
  
    // Validate employee ID
    if (!isValidEmployeeID(employeeID)) {
      alert('Invalid Employee ID. It must be at least four characters and start with the letter E.');
      return;
    }
  
    // Calculate loan details
    const totalInterest = calculateInterest(loanAmount, interestRate);
    const totalAmountPayable = loanAmount + totalInterest;
  
    // Display results
    document.getElementById('result').innerHTML = `
     
      <p><strong>Total Interest:</strong> $${totalInterest}</p>
      <p><strong>Total Amount Payable:</strong> $${totalAmountPayable}</p>
    `;
  });
  
  function isValidEmployeeID(employeeID) {
    return employeeID.length >= 4 && employeeID.startsWith('E');
  }
  
  function calculateInterest(loanAmount, interestRate) {
    return loanAmount * (interestRate / 100);
  }
  