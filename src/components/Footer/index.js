import './index.css';
import AdSense from 'react-adsense';
import AdfitWebComponent from 'react-adfit-web-component'

function Footer() {
  return (
    <footer>
      {/* <AdSense.Google
        client='ca-pub-8890383931402371'
        slot='3747311734'
        style={{width: 522, height: 90, display: "inline-block"}}
      /> */}
      <AdfitWebComponent
        adUnit="DAN-dkjyNszAMRwOChYh"
      />
      <div className="copyright">
        Copyright <a href="https://github.com/teamhide" target="_blank">@teamhide</a>, all right reserved
      </div>
    </footer>
  )
}

export default Footer;