export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 text-center p-4 text-gray-200 flex justify-end items-center">
      <div className="space-x-6 font-poppins font-bold">
        <a href="/">Home</a>
        <a href="/about">About</a>
      </div>
    </nav>
  )
}