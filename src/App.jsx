import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [bill, setBill] = useState('');
  const [tipPercent, setTipPercent] = useState('');
  const [numPeople, setNumPeople] = useState('');
  const [tipAmount, setTipAmount] = useState(0);
  const [perPerson, setPerPersonAmount] = useState(0);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const billAmount = parseFloat(bill);
    const tipPercentAmount = parseFloat(tipPercent) / 100;
    const numPeopleAmount = parseFloat(numPeople);

    if (billAmount > 0 && tipPercentAmount > 0 && numPeopleAmount > 0) {
      const tip = (billAmount * tipPercentAmount) / numPeople;
      const perPerson = billAmount / numPeopleAmount + tip;

      setTipAmount(tip);
      setPerPersonAmount(perPerson);
      setErrorMsg('');
    } else {
      setTipAmount(0);
      setPerPersonAmount(0);

      if (bill || tipPercent || numPeople) {
        setErrorMsg(`Please fill out all fields`);
      } else {
        setErrorMsg('');
      }
    }
  }, [bill, tipPercent, numPeople]);

  const resetFields = () => {
    setBill('');
    setTipPercent('');
    setNumPeople('');
  };

  return (
    <div>
      <div className='container'>
        <div className='column'>
          <div>
            <label htmlFor='bill'>Bill</label>
            <input
              type='number'
              placeholder='0'
              value={bill}
              onChange={(e) => setBill(e.target.value)}
            />
          </div>

          <div>
            <p>Select Tip %</p>

            <div className='flex-wrap'>
              <button className='tip-btn' onClick={() => setTipPercent('5%')}>
                5%
              </button>
              <button className='tip-btn' onClick={() => setTipPercent('10%')}>
                10%
              </button>
              <button className='tip-btn' onClick={() => setTipPercent('15%')}>
                15%
              </button>
              <button className='tip-btn' onClick={() => setTipPercent('25%')}>
                25%
              </button>
              <button className='tip-btn' onClick={() => setTipPercent('50%')}>
                50%
              </button>
              <input
                type='number'
                placeholder='Custom'
                value={tipPercent}
                onChange={(e) => setTipPercent(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label htmlFor='number-of-people'>Number of People</label>
            <input
              min='1'
              type='number'
              placeholder='0'
              value={numPeople}
              onChange={(e) => setNumPeople(e.target.value)}
            />
            <p className='error-msg'>{errorMsg}</p>
          </div>
        </div>
        <div className='column bg-dark'>
          <div>
            <div className='flex-container'>
              <div>
                <p className='light'>Tip Amount</p>
                <p className='text-s'>/ person</p>
              </div>
              <p className='accent text-l'>${tipAmount.toFixed(2)}</p>
            </div>
            <div className='flex-container'>
              <div>
                <p className='light'>Total</p>
                <p className='text-s'>/ person</p>
              </div>
              <p className='accent text-l'>${perPerson.toFixed(2)}</p>
            </div>
          </div>

          <button onClick={resetFields}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
