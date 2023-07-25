import Link from 'next/link';

const Home = () => (
  <div>
    <h1>Welcome to the Home Page</h1>
    <Link href="/about">
      About
    </Link>
    <br />
    <Link href="/contact">
      Contact
    </Link>
  </div>
);

export default Home;