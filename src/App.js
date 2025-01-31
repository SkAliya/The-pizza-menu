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

function App() {
  return (
    <div className="container">
      <Header />
      <Menu data={pizzaData} />
      <Footer />
    </div>
  );
}

export default App;

function Header() {
  return (
    <header className="header">
      <h1>Fast React pizza co.</h1>
    </header>
  );
}

function Menu({ data }) {
  return (
    <main className="menu">
      {data.length ? (
        <>
          <h2>our menu</h2>
          <p>
            Authentic Italian cuisime. & creative dishes to choose from. All
            from our stone oven. all organic. all delicious.
          </p>
          <ul className="pizzas">
            {data.map((pizza) => (
              <Pizza pizza={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>we'r preparing our menu. Please comeback later.</p>
      )}
    </main>
  );
}

function Pizza({ pizza }) {
  const { name, ingredients, price, photoName, soldOut } = pizza;
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "SOLD OUT" : price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const now = new Date().getHours();
  const openTime = 10;
  const closeTime = 22;
  const isOpen = now >= openTime && now <= closeTime;

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            We'r open from {openTime}:00 AM to {closeTime}:00 PM. Come visit us
            or order online.
          </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          We'r happy to see you between {openTime}:00 AM & {closeTime}:00 PM.
        </p>
      )}
    </footer>
  );
}
