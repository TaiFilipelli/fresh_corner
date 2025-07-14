const Navbar = () => {
  return (
    <nav class="bg-[--obscur-color] p-4 flex justify-around items-center">
      <div class="text-white font-bold">The Dev's Corner</div>
      <ul class="flex space-x-4 text-white">
        <li><a href="/">Inicio</a></li>
        <li><a href="/tier_list">Tier List</a></li>
      </ul>
    </nav>
  )
}

export default Navbar