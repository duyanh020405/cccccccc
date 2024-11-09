import { useSelector } from "react-redux"
import Footer from "../../../layouts/footer/Footer"
import Header from "../../../layouts/Header/Header"
import "./userInfo.css"
import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { loginUser } from "../../../store/reducers/userReducer"
import { User } from "../../../interfaces/User"
export default function UserInfo() {
  const data:any = useSelector(state => state)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loginUser(3))
  },[])
  const userLogin = data.userReducer.userLogin;
  const [logUser, setLogUser] = useState<User>({ 
    ...userLogin, 
    updateAt: new Date().toLocaleDateString('vi-VN')
  });
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const newAvatar = URL.createObjectURL(e.target.files[0]);
      setLogUser({ ...logUser, avatar: newAvatar });
      console.log(logUser);
      
    }
  };
  return (
    <>
    <Header/>
  <div className="homepage-thng-tin-c">
    <div className="infor">
      <div className="div-2">
        <p className="text-wrapper-10">Cập nhật thông tin cá nhân</p>
        <p className="label">Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
      </div>
      <div className="frame-11">
        <div className="frame-12">
          <div className="input-field">
            <div className="div-3">
              <div className="div-3">
                <div className="label-2">Tên đăng nhập</div>
                <div className="input">
                  <div className="content">
                    <div className="text">phuquy1232</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="input-field">
            <div className="div-3">
              <div className="div-3">
              <div className="label-2">Email</div>
                <div className="input-2">
                  <div className="content">
                    <input className="text-2" defaultValue={logUser.email} type="email" id="input-2"/>
                  </div>
                  <img className="img-4" src="./uploads/userInfo/img-edit-2.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className="input-field">
            <div className="div-3">
              <div className="div-3">
                <div className="label-2">Số điện thoại</div>
                <div className="input-2">
                  <div className="content">
                    <input className="text-2" defaultValue={logUser.phone} type="email" id="input-2"/>
                  </div>
                  <img className="img-4" src="./uploads/userInfo/img-edit-2.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-12">
          <div className="input-field">
            <div className="div-3">
              <div className="div-3">
                <div className="label-2">Tên</div>
                <div className="input-2">
                  <div className="content">
                    <input className="text-2"  type="email" id="input-2"/>
                  </div>
                  <img className="img-4" src="./uploads/userInfo/img-edit-2.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className="input-field">
            <div className="div-3">
              <div className="div-3">
                <div className="label-2">Ngày sinh</div>
                <div className="input-2">
                  <div className="content">
                    <input className="text-2" defaultValue={logUser.dateOfBirth} type="email" id="input-2"/>
                  </div>
                  <img className="img-4" src="./uploads/userInfo/img-edit-2.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className="input-field">
          <div className="div-3">
            <div className="label-2">Giới tính</div>
                <select className="input-2-1">
                  <option value="Nam">Nam</option>
                  <option value="Nữ">Nữ</option>
                  <option value="Khác">Khác</option>
                </select>
          </div>
        </div>
        </div>
      </div>
    </div>
    <div className="sidebar">
      <div className="button">
        <div className="avt-wrapper">
          <div className="avt">
            <div className="dropdown">
              <img className="avatar" src="./uploads/userInfo/img-avatar.png" alt=""/>
            </div>
            <div className="name">
              <div className="text-wrapper-11">Phú Quý</div>
              <div className="text-wrapper-12">phuquy1232@gmail.com</div>
            </div>
          </div>
        </div>
        <div className="div-2">
          <div className="button-side">
            <img className="img-5" src="./uploads/userInfo/img-personalcard.svg" />
            <div className="text-4">Thông tin cá nhân</div>
          </div>
          <div className="button-side-2">
            <img className="img-5" src="./uploads/userInfo/img-document-text.svg" />
            <div className="text-5">Quản lý CV</div>
          </div>
          <div className="button-side-2">
            <img className="img-5" src="./uploads/userInfo/img-award.svg" />
            <div className="text-5">Quản lý chứng chỉ</div>
          </div>
          <div className="button-side-2">
            <img className="img-5" src="./uploads/userInfo/img-calendar-2.svg" />
            <div className="text-5">Lịch phỏng vấn</div>
          </div>
          <div className="button-side-2">
            <img className="img-5" src="./uploads/userInfo/img-lock.svg" />
            <div className="text-5">Đổi mật khẩu</div>
          </div>
        </div>
      </div>
    </div>
    <div className="profile-picture">
          <div className="text-wrapper-10">Ảnh đại diện</div>
          <div className="frame-wrapper">
            <img className="frame-wrapper" src="./uploads/userInfo/img-avatar.png" alt="" />
            <label htmlFor="avatar-upload">
              <img className="frame-13" src="./uploads/userInfo/img-frame-3705.png" alt="Edit icon" />
            </label>
            <input id="avatar-upload" type="file" accept="image/png, image/jpeg" onChange={handleImageChange} style={{ display: "none" }}/>
          </div>
          <p className="text-wrapper-13">Kích thước ảnh nhỏ nhất: 200 x 200px, định dạng PNG hoặc JPG</p>
        </div>
    <div className="button-2">
      <button className="button-base-wrapper">
        <div className="button-base">
          <div className="text-6">Hủy</div>
        </div>
      </button>
      <button className="div-wrapper">
        <div className="button-base-2">
          <div className="text-7">Cập nhật</div>
        </div>
      </button>
    </div>
  </div>
  <Footer></Footer>
</>
  )
}
