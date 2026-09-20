function SendPayment() {
  return (
    <div>
      <h1>Send Payment</h1>
      <form className="payment-form">
        <input type="text" placeholder="Receiver Account" />
        <input type="number" placeholder="Amount" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default SendPayment;