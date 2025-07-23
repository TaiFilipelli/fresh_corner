const Navbar = () => {
  return (
    <nav class="bg-[--obscur-color] p-4 flex justify-around items-center">
      <div class="text-white font-bold"><a href="/" class="hover:cursor-pointer">The Dev's Corner</a></div>
      <ul class="flex space-x-4 text-white">
        <li><a href="/">Inicio</a></li>
        <li><a href="/tier-list">Tier List</a></li>
      </ul>
    </nav>
  )
}

export default Navbar