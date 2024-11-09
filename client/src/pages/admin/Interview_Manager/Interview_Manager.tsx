import React from 'react'
import './Interview_Manager.css'
import Footer from '../../../layouts/footer/Footer'
export default function Interview_Manager() {
  return (
    <div>
        <>
  <meta charSet="utf-8" />
  <div className="dashboard-lch-phng">
    <div className="sidebar">
      <div className="button">
        <div className="infor">
          <div className="div-2">
            <img className="dropdown" src="\public\uploads\Interview_Manager\img-dropdown.svg" />
            <div className="name">
              <p className="text-wrapper-10">Công ty TNHH Rikkei Education</p>
              <div className="text-wrapper-11">rikkeiedu123@gmail.com</div>
            </div>
          </div>
        </div>
        <div className="sidebar-2">
          <div className="button-side">
            <img className="img-5" src="\public\uploads\Interview_Manager\img-personalcard.svg" />
            <div className="text">Thông tin doanh nghiệp</div>
          </div>
          <div className="button-side">
            <img className="img-5" src="\public\uploads\Interview_Manager\img-note-2.svg" />
            <div className="text">Tin tuyển dụng</div>
          </div>
          <div className="button-side-2">
            <img className="img-5" src="\public\uploads\Interview_Manager\img-calendar-2-2.svg" />
            <div className="text-2">Lịch phỏng vấn</div>
          </div>
        </div>
      </div>
    </div>
    <div className="heading-2">
      <p className="text-wrapper-12">Quản lý lịch phỏng vấn</p>
      <p className="label">
        Hãy xem và theo dõi để không bỏ lỡ lịch phỏng vấn.
      </p>
    </div>
    <div className="pagination">
      <div className="pagination-numbers">
        <div className="pagination-number">
          <div className="content">
            <div className="number">1</div>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="content">
            <div className="number-2">2</div>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="content">
            <div className="number-2">...</div>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="content">
            <div className="number-2">8</div>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="content">
            <div className="number-2">9</div>
          </div>
        </div>
      </div>
      <div className="img-wrapper">
        <img className="img-4" src="\public\uploads\Interview_Manager\img-arrow-left.svg" />
      </div>
      <div className="img-wrapper">
        <img className="img-4" src="\public\uploads\Interview_Manager\img-arrow-right.svg" />
      </div>
    </div>
    <div className="candidate">
      <div className="infor-wrapper">
        <div className="infor-2">
          <div className="IMG">
            <img className="logo" src="\public\uploads\img-logo.svg" />
          </div>
          <div className="name-2">
            <div className="text-wrapper-13">Front-end Developer</div>
            <p className="text-wrapper-14">Công ty Cổ phần Rikkeisoft</p>
          </div>
        </div>
      </div>
      <div className="more">
        <div className="div-3">
          <img className="img-4" src="\public\uploads\Interview_Manager\img-profile.svg" />
          <div className="div-2">
            <div className="text-wrapper-15">Tên ứng viên:</div>
            <div className="text-wrapper-16">Đỗ Phú Quý</div>
          </div>
        </div>
        <div className="div-3">
          <img className="img-4" src="\public\uploads\Interview_Manager\img-profile.svg" />
          <div className="frame-11">
            <div className="text-wrapper-17">CV:</div>
            <p className="http-zoom-meeting">
              <span className="span">
                http://zoom-meeting/fAfjvslsrg/jdjsaoijdjjfw-alPJF
              </span>
            </p>
          </div>
        </div>
        <div className="div-3">
          <img className="img-4" src="\public\uploads\Interview_Manager\img-calendar-2.svg" />
          <div className="div-2">
            <div className="text-wrapper-15">Ngày:</div>
            <div className="text-wrapper-16">15/09/2024</div>
          </div>
        </div>
        <div className="div-3">
          <img className="img-4" src="\public\uploads\Interview_Manager\img-clock.svg" />
          <div className="div-2">
            <div className="text-wrapper-15">Thời gian:</div>
            <div className="text-wrapper-16">15:00</div>
          </div>
        </div>
        <div className="certificate">
          <img className="img-4" src="\public\uploads\Interview_Manager\img-location.svg" />
          <div className="frame-12">
            <div className="text-wrapper-15">Địa điểm:</div>
            <p className="span-wrapper">
              <span className="span">
                http://zoom-meeting/fAfjvslsrg/jdjsaoijdjjfw-alPJF
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="button-2">
        <button className="button-base-wrapper">
          <div className="button-base">
            <div className="text-3">Chỉnh sửa</div>
          </div>
        </button>
        <button className="div-wrapper">
          <div className="button-base-2">
            <div className="text-4">Xóa</div>
          </div>
        </button>
      </div>
    </div>
    <header className="header">
      <div className="logo-menu">
        <img className="logo-2" src="\public\uploads\img-logo.svg" />
        <div className="menu-list">
          <div className="menu">
            <div className="jobs">Đăng tin</div>
          </div>
          <div className="menu">
            <div className="jobs">Tìm CV</div>
          </div>
        </div>
      </div>
      <button className="button-3">
        <div className="language">
          <img className="img-5" src="img/VN.svg" />
          <div className="VNI">
            <div className="text-wrapper-15">VN</div>
            <img className="img-4" src="img/arrow-down.svg" />
          </div>
        </div>
        <div className="avatar-wrapper">
          <div className="avatar" />
        </div>
      </button>
    </header>
  </div>
  <Footer></Footer>
</>
    </div>
  )
}
