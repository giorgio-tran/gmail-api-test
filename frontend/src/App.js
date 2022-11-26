import './App.css';
import messageService from './services/message';

const App = () => {
  const sendMessage = (event) => {
    event.preventDefault();
    const mailOptions = {
      to: ["tran.giorgio@gmail.com", "ttran2@hawaii.edu"],
      subject: "name of the item",
      text: "I am interested in this item."
    }
    messageService
      .create(mailOptions)
      .then(console.log('message sent, check email'));
  }
  return (
    <div className='App'>
      <button onClick={(event) => sendMessage(event)}>Send email</button>
    </div>
  );
}

export default App;
