import './index.css';
import AdSense from 'react-adsense';

function Header() {
  return (
    <header>
      <AdSense.Google
        client='ca-pub-8890383931402371'
        slot='3747311734'
        style={{width: 522, height: 90, display: "inline-block"}}
      />
    </header>
  )
}

export default Header;