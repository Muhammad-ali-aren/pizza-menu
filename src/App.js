import "./index.css";
function App() {
  const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];

  return (
    <div className="containers">
      <Header />
      <Menu pizzaData={pizzaData} />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast Pizza React Co.</h1>
    </header>
  );
}
function Menu({ pizzaData }) {
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      <ul className="pizzas">
        {pizzaData.map((pizza) => {
          return <Pizza key={pizza.name} pizza={pizza} />;
        })}
      </ul>
      {/* <Pizza
        name="Pizza phongi"
        ingredient="Tomato, mozarella, and pepperoni"
        imgName="/pizzas/funghi.jpg"
        price={10}
      /> */}
    </main>
  );
}

function Pizza({ pizza }) {
  return (
    <li className={pizza.soldOut ? "pizza sold-out" : "pizza"}>
      <img src={pizza.photoName} alt="prop" />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredient}</p>
        <span>{pizza.soldOut ? "SOLD OUT" : pizza.price}</span>
      </div>
    </li>
  );
}
function Footer() {
  const hours = new Date().getHours;
  const open = 12;
  const close = 22;
  const isOpen = hours <= open && hours >= close;
  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>we're open untill {close}:00 come visit us or order online</p>
          <button className="btn">order</button>
        </div>
      ) : (
        <p>
          we're happy to welcome you between {open}:00 and {close}:00
        </p>
      )}
    </footer>
  );
}

export default App;
