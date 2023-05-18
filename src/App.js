function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center">
        <div className="headerLeft d-flex align-center">
          <img width="40" height="40" src="/img/logo.png" alt="" />
          <div className="headerInfo">
            <h3>React Sneakers</h3>
            <p>Магазин лучших кроссовок!</p>
          </div>
        </div>

        <ul className="headerRight d-flex">
          <li className="mr-30">
            <img width="18" height="18" src="/img/cart.svg" alt="" />

            <span>1205 руб.</span>
          </li>
          <li>
            <img width="20" height="20" src="/img/user.svg" alt="" />
          </li>
        </ul>
      </header>
      <div className="content">
        <h1>Все кроссовки</h1>

        <div className="d-flex">
          <div className="card">
            <img width="133" height="112" src="/img/sneakers/1.jpg" alt="sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardBottom d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img with={11} height={11} src="/img/add.svg" alt="add to cart" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width="133" height="112" src="/img/sneakers/2.jpg" alt="sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardBottom d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img with={11} height={11} src="/img/add.svg" alt="add to cart" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width="133" height="112" src="/img/sneakers/3.jpg" alt="sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardBottom d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img with={11} height={11} src="/img/add.svg" alt="add to cart" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width="133" height="112" src="/img/sneakers/4.jpg" alt="sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardBottom d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img with={11} height={11} src="/img/add.svg" alt="add to cart" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
