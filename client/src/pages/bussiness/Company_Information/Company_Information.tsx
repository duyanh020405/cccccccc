import React from 'react'
import './Company_Information.css'
import Footer from '../../../layouts/footer/Footer'
export default function Company_Information() {
  return (
    <div>
        <>
  <meta charSet="utf-8" />
  <div className="dashboard-cng-ty">
    <div >
        <img className='avatar' src="\public\uploads\Infor_Company\img-avatar.png" alt="" />
      <img className="frame-11" src="\public\uploads\Infor_Company\img-frame-3705.png" />
    </div>
    <div className="frame-12">
      <div className="frame-6">
        <div className="text-wrapper-10">Mã số thuế</div>
        <div className="text-wrapper-11">0109978855</div>
      </div>
      <div className="frame-13">
        <div className="text-wrapper-10">Lĩnh vực hoạt động</div>
        <div className="text-wrapper-12">Giáo dục</div>
      </div>
      <div className="frame-6">
        <div className="text-wrapper-10">Số điện thoại</div>
        <div className="text-wrapper-11">0862 069 233</div>
      </div>
    </div>
    <div className="frame-14">
      <div className="frame-13">
        <div className="text-wrapper-10">Email</div>
        <div className="text-wrapper-12">academy@rikkeisoft.com</div>
      </div>
      <div className="frame-6">
        <div className="text-wrapper-10">Quy mô công ty</div>
        <div className="text-wrapper-11">50-100 nhân viên</div>
      </div>
      <div className="frame-13">
        <div className="text-wrapper-10">Địa chỉ</div>
        <p className="text-wrapper-12">
          Tòa nhà sông Đà, Mỹ Đình, Nam Từ Liêm, Hà Nội
        </p>
      </div>
    </div>
    <div className="frame-15">
      <p className="text-wrapper-13">Công ty TNHH Rikkei Education</p>
      <button className="button">
        <div className="button-base">
          <img className="img-5" src="\public\uploads\Infor_Company\img-edit-2.svg" />
          <div className="text">Chỉnh sửa</div>
        </div>
      </button>
    </div>
    <div className="sidebar">
      <div className="button-2">
        <div className="infor">
          <div className="avt">
            <img className="dropdown" src="\public\uploads\Infor_Company\img-dropdown.svg" />
            <div className="name">
              <p className="text-wrapper-14">Công ty TNHH Rikkei Education</p>
              <div className="text-wrapper-15">rikkeiedu123@gmail.com</div>
            </div>
          </div>
        </div>
        <div className="sidebar-2">
          <div className="button-side">
            <img className="img-5" src="\public\uploads\Infor_Company\img-personalcard.svg" />
            <div className="text-2">Thông tin doanh nghiệp</div>
          </div>
          <div className="button-side-2">
            <img className="img-5" src="\public\uploads\Infor_Company\img-note-2.svg" />
            <div className="text-3">Tin tuyển dụng</div>
          </div>
          <div className="button-side-2">
            <img className="img-5" src="\public\uploads\Infor_Company\img-calendar-2.svg" />
            <div className="text-3">Lịch phỏng vấn</div>
          </div>
        </div>
      </div>
    </div>
    <header className="header">
      <div className="logo-menu">
        <img className="logo" src="\public\uploads\Infor_Company\img-logo.svg" />
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
          <img className="img-5" src="\public\uploads\Infor_Company\img-vn.svg" />
          <div className="VNI">
            <div className="text-wrapper-16">VN</div>
            <img className="img-4" src="img/arrow-down.svg" />
          </div>
        </div>
        <div className="avatar-wrapper">
          <img src='\public\uploads\Infor_Company\img-avatar.png' className="avatar-2" />
        </div>
      </button>
    </header>
  </div>
  <Footer></Footer>
</>


    </div>
  )
}
