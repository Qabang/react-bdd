
interface linkItems {
	to: string;
	name: string;
}

function Navbar({appTitle, linkItems}: {appTitle:string, linkItems:linkItems[]}){

return (
  <nav>
    <h1>{appTitle}</h1>
    <ul>
      {linkItems && linkItems.map((item)=>(
        <li><a href={item.to}>{item.name}</a></li>
      ))
      }
    </ul>
  </nav>
)
}

export default Navbar
