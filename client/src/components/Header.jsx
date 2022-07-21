import logo from './assets/logo.png';

export default function Header() {
  return (
    <nav className='navbar bg-bright mb-4 p-1'>
      <div className='container'>
        <a className='navbar-brand' href='/'>
          <div className='d-flex'>
            <img src={logo} alt='logo' className='mr-2' />
            <div>ProjectMgmt</div>
          </div>
        </a>
      </div>
    </nav>
  );
}
