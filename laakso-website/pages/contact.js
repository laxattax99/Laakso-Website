import Link from 'next/link';

const Contact = () => (
  <div>
    <h1>Contact Us</h1>
    <Link href="/">
      Home
    </Link>
    <br />
    <Link href="/about">
      About
    </Link>
  </div>
);

export default Contact;