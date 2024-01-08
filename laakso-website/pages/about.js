import Link from 'next/link';

const About = () => (
  <div>
    <h1>About Us</h1>
    <Link href="/">
      Home
    </Link>
    <br />
    <Link href="/contact">
      Contact
    </Link>
  </div>
);

export default About;