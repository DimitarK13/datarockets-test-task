import './App.css';

function App() {
  return (
    <div>
      <div className='container'>
        <div className='column'>
          <div>
            <label htmlFor='bill'>Bill</label>
            <input type='number' id='bill' />
          </div>
          <div>
            <p>Select Tip %</p>

            <div className='flex-wrap'>
              <button className='tip-btn' id='5'>
                5%
              </button>
              <button className='tip-btn' id='5'>
                10%
              </button>
              <button className='tip-btn' id='5'>
                15%
              </button>
              <button className='tip-btn' id='5'>
                25%
              </button>
              <button className='tip-btn' id='5'>
                50%
              </button>
              <input type='number' id='custom-tip' />
            </div>

            <div>
              <label htmlFor='number-of-people'>Number of People</label>
              <input type='number' id='number-of-people' />
            </div>
          </div>
        </div>
        <div className='column'>
          <div className='flex-container'>
            <div>
              <p>Tip Amount</p>
              <p>/ person</p>
            </div>
            <p id='tip-amount'>$0.00</p>
          </div>
          <div className='flex-container'>
            <div>
              <p>Total</p>
              <p>/ person</p>
            </div>
            <p id='total-amount'>$0.00</p>
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
