import classes from './App.module.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Bookkeeper!</h1>

      <nav className={classes.nav}>
        <Link to='/invoices'>Invoices</Link> | {" "}
        <Link to='/expenses'>Expenses</Link>
      </nav>

      <Outlet />
    </div>
  );
}

export default App;
