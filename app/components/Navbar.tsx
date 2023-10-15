// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/register">
        <a>Register</a>
      </Link>
    </nav>
  )
}
