import React, { useState } from 'react';

function AccountPage() {
  const [mandatoryAccount, setMandatoryAccount] = useState('');
  const [optionalAccount1, setOptionalAccount1] = useState('');
  const [optionalAccount2, setOptionalAccount2] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');
  const [showOptionalAccounts, setShowOptionalAccounts] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    // handle form submission here
    console.log('Form submitted:', {
      mandatoryAccount,
      optionalAccount1,
      optionalAccount2,
      amount,
      currency,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Account Name</h1>
      <div>
        <label>Mandatory Account:</label>
        <input
          type="text"
          value={mandatoryAccount}
          onChange={e => setMandatoryAccount(e.target.value)}
        />
      </div>
      {showOptionalAccounts && (
        <>
          <div>
            <label>Optional Account 1:</label>
            <input
              type="text"
              value={optionalAccount1}
              onChange={e => setOptionalAccount1(e.target.value)}
            />
          </div>
          <div>
            <label>Optional Account 2:</label>
            <input
              type="text"
              value={optionalAccount2}
              onChange={e => setOptionalAccount2(e.target.value)}
            />
          </div>
        </>
      )}
      <button onClick={() => setShowOptionalAccounts(!showOptionalAccounts)}>
        {showOptionalAccounts ? 'Hide Optional Accounts' : 'Show Optional Accounts'}
      </button>
      <div>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
      </div>
      <div>
        <label>Currency:</label>
        <select value={currency} onChange={e => setCurrency(e.target.value)}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="SAR">SAR</option>
          // add more currency options here
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default AccountPage;
