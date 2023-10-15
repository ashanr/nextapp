// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (

<nav className="bg-gray-800 p-4">
<div className="flex items-center justify-between flex-wrap">
  <div className="flex items-center flex-shrink-0 text-white mr-6">
    <span className="font-semibold text-xl tracking-tight">MyApp</span>
  </div>
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="text-sm lg:flex-grow">
      <Link href="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Home
      </Link>
      <Link href="/register" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Registration
      </Link>
    </div>
  </div>
</div>
</nav>

    
  )
}
