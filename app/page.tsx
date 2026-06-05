import NavBar from './components/navbar/page';
import './globals.css';

export default function Home() {
  return (
    <div className="main-page">
      <NavBar />
      <h1>This is a Home Page</h1>
    </div>
  );
}