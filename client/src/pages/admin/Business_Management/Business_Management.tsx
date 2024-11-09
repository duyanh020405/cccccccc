import React from 'react'
import './Business_Management.css'
import Header from '../../../layouts/Header/Header'
import Footer from '../../../layouts/footer/Footer'
export default function Business_Management() {
  return (
    <>
  <meta charSet="utf-8" />
  <link rel="stylesheet" href="globals.css" />
  <link rel="stylesheet" href="styleguide.css" />
  <link rel="stylesheet" href="style.css" />
  <Header></Header>
  <div className="homepage-qun-l-doanh">
    <div className="sidebar">
      <div className="button">
        <div className="infor">
          <div className="avt">
            <div className="dropdown">
              <div className="avatar" />
            </div>
            <div className="name">
              <div className="text-wrapper-10">Phú Quý</div>
              <div className="text-wrapper-11">phuquy1232@gmail.com</div>
            </div>
          </div>
        </div>
        <div className="sidebar-2">
          <div className="button-side">
            <img className="img-5" src="./public/uploads/businessManagement/img-personalcard.svg" />
            <div className="text">Thông tin cá nhân</div>
          </div>
          <div className="button-side">
            <img className="img-5" src="./public/uploads/businessManagement/img-document-text.svg" />
            <div className="text">Quản lý CV</div>
          </div>
          <div className="button-side">
            <img className="img-5" src="./public/uploads/businessManagement/img-calendar-2.svg" />
            <div className="text">Lịch phỏng vấn</div>
          </div>
          <div className="button-side-2">
            <img className="img-5" src="./public/uploads/businessManagement/img-building.svg" />
            <div className="text-2">Quản lý doanh nghiệp</div>
          </div>
          <div className="button-side">
            <img className="img-5" src="./public/uploads/businessManagement/img-lock.svg" />
            <div className="text">Đổi mật khẩu</div>
          </div>
        </div>
      </div>
    </div>
    <div className="table">
      <div className="row">
        <div className="table-name">
          <div className="text-wrapper-12">STT</div>
        </div>
        <img className="divider" src="./public/uploads/businessManagement/img-divider.svg" />
        <div className="div-wrapper">
          <div className="text-wrapper-12">Tên Doanh nghiệp</div>
        </div>
        <img className="divider" src="./public/uploads/businessManagement/img-divider.svg" />
        <img className="divider" src="./public/uploads/businessManagement/img-divider.svg" />
        <div className="div-wrapper">
          <div className="text-wrapper-12">Trạng thái</div>
        </div>
        <img className="divider" src="./public/uploads/businessManagement/img-divider.svg" />
        <img className="divider" src="./public/uploads/businessManagement/img-divider.svg" />
        <div className="div-wrapper">
          <div className="text-wrapper-12">Action</div>
        </div>
      </div>
      <div className="row-2">
        <div className="table-name">
          <div className="text-wrapper-13">1</div>
        </div>
        <div className="div-wrapper">
          <p className="text-wrapper-14">Công ty TNHH Rikkei Education</p>
        </div>
        <div className="div-wrapper">
          <div className="badge">
            <div className="badge-base">
              <div className="text-3">Chờ xác nhận</div>
            </div>
          </div>
        </div>
        <div className="div-wrapper">
          <button className="button-base-wrapper">
            <div className="button-base">
              <div className="text-4">Xem chi tiết</div>
              <img className="img-5" src="./public/uploads/businessManagement/img-arrow-right.svg" />
            </div>
          </button>
        </div>
      </div>
      <div className="row-2">
        <div className="table-name">
          <div className="text-wrapper-13">2</div>
        </div>
        <div className="div-wrapper">
          <p className="text-wrapper-14">Công ty Cổ phần Rikkeisoft</p>
        </div>
        <div className="div-wrapper">
          <div className="badge">
            <div className="badge-base-2">
              <div className="text-5">Đã xác nhận</div>
            </div>
          </div>
        </div>
        <div className="div-wrapper">
          <button className="button-base-wrapper">
            <div className="button-base">
              <div className="text-4">Xem chi tiết</div>
              <img className="img-5" src="./public/uploads/businessManagement/img-arrow-right.svg" />
            </div>
          </button>
        </div>
      </div>
      <div className="row-2">
        <div className="table-name">
          <div className="text-wrapper-13">3</div>
        </div>
        <div className="div-wrapper">
          <p className="text-wrapper-14">Công ty TNHH Rikkei Education</p>
        </div>
        <div className="div-wrapper">
          <div className="badge">
            <div className="badge-base">
              <div className="text-3">Chờ xác nhận</div>
            </div>
          </div>
        </div>
        <div className="div-wrapper">
          <button className="button-base-wrapper">
            <div className="button-base">
              <div className="text-4">Xem chi tiết</div>
              <img className="img-5" src="./public/uploads/businessManagement/img-arrow-right.svg" />
            </div>
          </button>
        </div>
      </div>
      <div className="row-2">
        <div className="table-name">
          <div className="text-wrapper-13">4</div>
        </div>
        <div className="div-wrapper">
          <p className="text-wrapper-14">Công ty Cổ phần Rikkeisoft</p>
        </div>
        <div className="div-wrapper">
          <div className="badge">
            <div className="badge-base-2">
              <div className="text-5">Đã xác nhận</div>
            </div>
          </div>
        </div>
        <div className="div-wrapper">
          <button className="button-base-wrapper">
            <div className="button-base">
              <div className="text-4">Xem chi tiết</div>
              <img className="img-5" src="./public/uploads/businessManagement/img-arrow-right.svg" />
            </div>
          </button>
        </div>
      </div>
      <div className="row-2">
        <div className="table-name">
          <div className="text-wrapper-13">5</div>
        </div>
        <div className="div-wrapper">
          <p className="text-wrapper-14">Công ty Cổ phần Rikkeisoft</p>
        </div>
        <div className="div-wrapper">
          <div className="badge">
            <div className="badge-base-2">
              <div className="text-5">Đã xác nhận</div>
            </div>
          </div>
        </div>
        <div className="div-wrapper">
          <button className="button-base-wrapper">
            <div className="button-base">
              <div className="text-4">Xem chi tiết</div>
              <img className="img-5" src="./public/uploads/businessManagement/img-arrow-right.svg" />
            </div>
          </button>
        </div>
      </div>
      <div className="row-2">
        <div className="table-name">
          <div className="text-wrapper-13">6</div>
        </div>
        <div className="div-wrapper">
          <p className="text-wrapper-14">Công ty Cổ phần Rikkeisoft</p>
        </div>
        <div className="div-wrapper">
          <div className="badge">
            <div className="badge-base-2">
              <div className="text-5">Đã xác nhận</div>
            </div>
          </div>
        </div>
        <div className="div-wrapper">
          <button className="button-base-wrapper">
            <div className="button-base">
              <div className="text-4">Xem chi tiết</div>
              <img className="img-5" src="./public/uploads/businessManagement/img-arrow-right.svg" />
            </div>
          </button>
        </div>
      </div>
      <div className="row-2">
        <div className="table-name">
          <div className="text-wrapper-13">7</div>
        </div>
        <div className="div-wrapper">
          <p className="text-wrapper-14">Công ty Cổ phần Rikkeisoft</p>
        </div>
        <div className="div-wrapper">
          <div className="badge">
            <div className="badge-base-2">
              <div className="text-5">Đã xác nhận</div>
            </div>
          </div>
        </div>
        <div className="div-wrapper">
          <button className="button-base-wrapper">
            <div className="button-base">
              <div className="text-4">Xem chi tiết</div>
              <img className="img-5" src="./public/uploads/businessManagement/img-arrow-right.svg" />
            </div>
          </button>
        </div>
      </div>
      <div className="row-2">
        <div className="table-name">
          <div className="text-wrapper-13">8</div>
        </div>
        <div className="div-wrapper">
          <p className="text-wrapper-14">Công ty Cổ phần Rikkeisoft</p>
        </div>
        <div className="div-wrapper">
          <div className="badge">
            <div className="badge-base-2">
              <div className="text-5">Đã xác nhận</div>
            </div>
          </div>
        </div>
        <div className="div-wrapper">
          <button className="button-base-wrapper">
            <div className="button-base">
              <div className="text-4">Xem chi tiết</div>
              <img className="img-5" src="./public/uploads/businessManagement/img-arrow-right.svg" />
            </div>
          </button>
        </div>
      </div>
      <div className="row-2">
        <div className="table-name">
          <div className="text-wrapper-13">9</div>
        </div>
        <div className="div-wrapper">
          <p className="text-wrapper-14">Công ty Cổ phần Rikkeisoft</p>
        </div>
        <div className="div-wrapper">
          <div className="badge">
            <div className="badge-base-2">
              <div className="text-5">Đã xác nhận</div>
            </div>
          </div>
        </div>
        <div className="div-wrapper">
          <button className="button-base-wrapper">
            <div className="button-base">
              <div className="text-4">Xem chi tiết</div>
              <img className="img-5" src="./public/uploads/businessManagement/img-arrow-right.svg" />
            </div>
          </button>
        </div>
      </div>
      <div className="row-2">
        <div className="table-name">
          <div className="text-wrapper-13">10</div>
        </div>
        <div className="div-wrapper">
          <p className="text-wrapper-14">Công ty Cổ phần Rikkeisoft</p>
        </div>
        <div className="div-wrapper">
          <div className="badge">
            <div className="badge-base-2">
              <div className="text-5">Đã xác nhận</div>
            </div>
          </div>
        </div>
        <div className="div-wrapper">
          <button className="button-base-wrapper">
            <div className="button-base">
              <div className="text-4">Xem chi tiết</div>
              <img className="img-5" src="./public/uploads/businessManagement/img-arrow-right.svg" />
            </div>
          </button>
        </div>
      </div>
      <div className="row-2">
        <div className="table-name">
          <div className="text-wrapper-13">11</div>
        </div>
        <div className="div-wrapper">
          <p className="text-wrapper-14">Công ty Cổ phần Rikkeisoft</p>
        </div>
        <div className="div-wrapper">
          <div className="badge">
            <div className="badge-base-2">
              <div className="text-5">Đã xác nhận</div>
            </div>
          </div>
        </div>
        <div className="div-wrapper">
          <button className="button-base-wrapper">
            <div className="button-base">
              <div className="text-4">Xem chi tiết</div>
              <img className="img-5" src="./public/uploads/businessManagement/img-arrow-right.svg" />
            </div>
          </button>
        </div>
      </div>
      
    </div>
    <div className="frame-11">
      <div className="text-wrapper-15">Danh sách Doanh nghiệp</div>
      <p className="label">Hãy xem và cập nhật doanh nghiệp của bạn.</p>
    </div>
    
    <button className="button-2">
      <div className="button-base-2">
        <img className="img-5" src="./public/uploads/businessManagement/img-add-circle.svg" />
        <div className="text-6">Thêm Doanh nghiệp</div>
      </div>
    </button>
  </div>
  <div>
    <Footer></Footer>
  </div>
</>


  )
}
