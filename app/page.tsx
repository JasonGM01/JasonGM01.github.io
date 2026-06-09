import './globals.css';
import Hobbies from './hobbies/page';
import About from './about/page';

export default function Home() {
  return (
    <div className="main-page">
      <h1>This is a Home Page</h1>
      <Hobbies />
      <About />
    </div>
  );
}