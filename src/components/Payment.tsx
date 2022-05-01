import React, { FormEvent } from 'react';

export const Payment = () => {
  const fetchPayments = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch('/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: 'Fred',
        lastName: 'Flintstones'
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <section>
      <form onSubmit={fetchPayments}>
        <button type="submit">
          Checkout
        </button>
      </form>
    </section>
  );
};
