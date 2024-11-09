import { useNavigate } from 'react-router-dom'
import './header.css'
export default function Header() {
  const navigate = useNavigate()

  return (
    <>
        <div className="header">
    <div className="logo-menu">
      <img className="logo" src="./uploads/img_logo.svg" />
      <div className="menu-list">
        <div className="menu">
          <div className="jobs">Việc làm</div>
        </div>
        <div className="menu">
          <div className="jobs">Hồ sơ &amp; CV</div>
        </div>
        <div className="menu">
          <div className="jobs">Về chúng tôi</div>
        </div>
        <div className="menu">
          <div className="jobs">Liên hệ</div>
        </div>
      </div>
    </div>
    <div className="div">
      <div className="language">
        <img className="VN" src="./uploads/img_VN.svg" />
        <div className="VNI">
          <div className="text-wrapper">VN</div>
          <img className="arrow-down" src="./uploads/img_arrow-down.svg" />
        </div>
      </div>
      <div className="div">
        <button onClick={()=>(navigate('/register'))} className="button">
          <div className="button-base">
            <div className="text">Đăng ký</div>
          </div>
        </button>
        <button onClick={()=>(navigate('/login'))} className="button">
          <div className="div-wrapper">
            <div className="text-2">Đăng nhập</div>
          </div>
        </button>
      </div>
    </div>
  </div>
    </>
  )
}
