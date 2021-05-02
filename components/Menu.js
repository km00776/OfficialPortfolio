const Menu = () => {
  if(typeof window !== 'undefined') {
    const menuToggle = document.querySelector('.toggle');
    const showcase = document.querySelector('.showcase');

    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      showcase.classList.toggle('active');
    })
  }
 

 
  

  return (
    <div class="menu">
      <ul>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Future Projects</a></li>
      </ul>
    </div>
  )
}

export default Menu;