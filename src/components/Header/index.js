import './index.css';
import AdSense from 'react-adsense';
import AdfitWebComponent from 'react-adfit-web-component'

function Header() {
  return (
    <header>
      {/* <AdSense.Google
        client='ca-pub-8890383931402371'
        slot='3747311734'
        style={{width: 522, height: 90, display: "inline-block"}}
      /> */}
      <AdfitWebComponent
        adUnit="DAN-13GKQ9fa1KfsuQiY"
      />
    </header>
  )
}

export default Header;