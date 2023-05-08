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
      setErrorMsg(`Can't be zero`);
    }
  }, [bill, tipPercent, numPeople]);

  return (
    <div>
      <div className='container'>
        <div className='column'>
          <div>
            <label htmlFor='bill'>Bill</label>
            <input
              type='number'
              id='bill'
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
                value={tipPercent}
                onChange={(e) => setTipPercent(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor='number-of-people'>Number of People</label>
              <input
                min='1'
                type='number'
                id='number-of-people'
                value={numPeople}
                onChange={(e) => setNumPeople(e.target.value)}
              />
              <p>{errorMsg}</p>
            </div>
          </div>
        </div>
        <div className='column'>
          <div className='flex-container'>
            <div>
              <p>Tip Amount</p>
              <p>/ person</p>
            </div>
            <p id='tip-amount'>${tipAmount.toFixed(2)}</p>
          </div>
          <div className='flex-container'>
            <div>
              <p>Total</p>
              <p>/ person</p>
            </div>
            <p id='total-amount'>${perPerson.toFixed(2)}</p>
          </div>

          <button>Reset</button>
        </div>
      </div>

      <div className='attribution'>
        Challenge by{' '}
        <a href='https://www.frontendmentor.io?ref=challenge'>
          Frontend Mentor
        </a>
        . Coded by <a href='https://dimitark.com'>Dimitar Kalapocev</a>.
      </div>
    </div>
  );
}

export default App;
