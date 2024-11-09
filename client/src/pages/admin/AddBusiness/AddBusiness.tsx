import React from 'react'
import './AddBusiness.css'
import add from '../../../../public/uploads/addBusiness/img_add-circle.svg'
export default function AddBusiness() {
  return (
    <>
  <meta charSet="utf-8" />
  <link rel="stylesheet" href="globals.css" />
  <link rel="stylesheet" href="styleguide.css" />
  <div className="pop-up">
    <div className="input-dropdown">
      <div className="input-dropdown-base">
        <div className="input-with-label">
          <div className="label">Tên Doanh nghiệp</div>
          <div className="input">
            <div className="content">
              <p className="text">Công ty Cổ phần Rikkeisoft</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="frame">
      <div className="text-wrapper">Thêm Doanh Nghiệp</div>
    </div>
    <button className="button">
      <div className="button-base">
        <img className="add-circle" src={add} />
        <div className="div">Thêm Doanh nghiệp</div>
      </div>
    </button>
    <button className="button-base-wrapper">
      <div className="div-wrapper">
        <div className="text-2">Hủy</div>
      </div>
    </button>
  </div>
</>

  )
}
