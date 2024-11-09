import React, { useState } from 'react'
import './register.css'
import apiAxios from "../../../apis/instance"
import { User } from '../../../interfaces/User';
import { registerAPI } from '../../../services/user.service';
import { useNavigate } from 'react-router-dom';
import {getCurrentDate} from '../../../utils/formatDate'

export default function Register() {
    const navigate = useNavigate()

    const [newUser, setNewUser] = useState({
        id: Math.ceil(Math.random() * 9999999),
        firstName: "",
        lastName: "",
        email: "",
        userName: "",
        status: 'active',
        createAt: getCurrentDate(),
        updateAt: "",
        password: "",
        avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png",
        address: "",
        emailVerified: false,
        phone: '',
        role: 'user',
        deletedAt: undefined,
        permissionList: [],
    })
    // giá trị nhập lại mk
    const [rePassword, setRePassword] = useState('')

    // validate
    const [errorNoName, setErrorNoName] = useState(false)
    const [errorSomeName, setErrorSomeName] = useState(false)
    const [errorNoEmail, setErrorNoEmail] = useState(false)
    const [errorSomeEmail, setErrorSomeEmail] = useState(false)
    const [errorNoPassword, setErrorNoPassword] = useState(false)
    const [errorNoRePassword, setErrorNoRePassword] = useState(false)

    const [errorTrue, setErrorTrue] = useState(false)
    const [eye1, setEye1] = useState(true)
    const [eye2, setEye2] = useState(true)

    // lưu giá trị tên người dùng nhập
    const handleSetName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewUser({
            ...newUser,
            userName: event.target.value
        });
    };
    // lưu giá trị email người dùng nhập
    const handleSetEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewUser({
            ...newUser,
            email: event.target.value
        });
    };
    // lưu giá trị mk người dùng nhập
    const handleSetPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewUser({
            ...newUser,
            password: event.target.value
        });
    };
    // Hàm validate định dạng email
    const validateEmailFormat = (email: string) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };
    // nút Lưu 
    const handleSubmit = async () => {
        const response = await apiAxios.get("users");
        const allUser = response.data;
        // Reset tất cả lỗi
        setErrorNoName(false);
        setErrorSomeName(false);
        setErrorNoEmail(false);
        setErrorSomeEmail(false);
        setErrorNoPassword(false);
        setErrorNoRePassword(false);

        // Kiểm tra tên đăng nhập rỗng
        if (newUser.userName === '') {
            setErrorNoName(true);
            return;
        }
        // Kiểm tra tên đăng nhập trùng
        const checkName = allUser.some((item: User) => item.userName === newUser.userName);
        if (checkName) {
            setErrorSomeName(true);
            return;
        }
        // Kiểm tra email rỗng
        if (newUser.email === '') {
            setErrorNoEmail(true);
            return;
        }
        // Kiểm tra email không đúng định dạng
        if (!validateEmailFormat(newUser.email)) {
            setErrorNoEmail(true);
            return;
        }
        // Kiểm tra email trùng
        const checkEmail = allUser.some((item: User) => item.email === newUser.email);
        if (checkEmail) {
            setErrorSomeEmail(true);
            return;
        }
        // Kiểm tra mật khẩu rỗng và độ dài tối thiểu
        if (newUser.password === '' || newUser.password.length < 6) {
            setErrorNoPassword(true);
            return;
        }
        // Kiểm tra mật khẩu xác nhận
        if (rePassword !== newUser.password) {
            setErrorNoRePassword(true);
            return;
        }

        // nếu hợp lệ
        setErrorTrue(true)
        setTimeout(() => {
            registerAPI(newUser)
            navigate('/login');
        }, 500);
    };

    // thay đổi trạng thái hiển thị mk
    const changeShowPass1=()=>{
        setEye1(!eye1)
    }
    const changeShowPass2=()=>{
        setEye2(!eye2)
    }

    return (
        <div>
            <div className="ng-k">
                <div className="overlap">
                    <div className="content">
                        <div className="login-form">
                            <div className="title">
                                <img className="logo" src='\public\uploads\login\img-logo.svg' alt="Logo" />
                                <div className="frame">
                                    <div className="text-wrapper">Đăng ký</div>
                                    <p className="div">
                                        Cùng phát triển con đường sự nghiệp với Rikkei Jobs
                                    </p>
                                </div>
                            </div>

                            <div className="div-2">
                                <div className="div-2">

                                    <div className="input-field">
                                        <div className="div-3">
                                            <div className="div-3">
                                                <div className="label-2">Tên đăng nhập</div>

                                                <div className="input">
                                                    <div className="content-2">
                                                        <i className="fa-regular fa-user"></i>
                                                        <input
                                                            className="text"
                                                            id="input-2"
                                                            placeholder="your name"
                                                            type="text"
                                                            onChange={handleSetName}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {errorNoName ? <div className='errorMesseger'>Tên đăng nhập không được để trống</div> : ''}
                                        {errorSomeName ? <div className='errorMesseger'>Tên đăng nhập không được phép trùng</div> : ''}
                                    </div>

                                    <div className="input-field">
                                        <div className="div-3">
                                            <div className="div-3">
                                                <div className="label-2">Email</div>

                                                <div className="input">
                                                    <div className="content-2">
                                                        <img className="img" src='\public\uploads\login\img-sms.svg' alt="Sms" />

                                                        <input
                                                            className="text"
                                                            id="input-2"
                                                            placeholder="you@company.com"
                                                            type="email"
                                                            onChange={handleSetEmail}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {errorNoEmail ? <div className='errorMesseger'>Email để trống hoặc không đúng định dạng</div> : ''}
                                        {errorSomeEmail ? <div className='errorMesseger'>Email không được phép trùng</div> : ''}
                                    </div>

                                    <div className="input-field">
                                        <div className="div-3">
                                            <div className="div-3">
                                                <div className="label-2">Mật khẩu</div>

                                                <div className="input">
                                                    <div className="content-2">
                                                        <img className="img" alt="Lock" src='\public\uploads\login\img-lock.svg' />

                                                        <input
                                                            className="text"
                                                            id="input-2"
                                                            placeholder=""
                                                            type={eye1?"password":"text"}
                                                            onChange={handleSetPassword}
                                                        />
                                                    </div>

                                                    <div onClick={changeShowPass1} className='box-eye'>
                                                        {eye1?<img
                                                            className="eye-slash"
                                                            alt="Eye slash"
                                                            src='\public\uploads\login\img-eye-slash.svg'
                                                        />:<i className="fa-regular fa-eye"></i>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {errorNoPassword ? <div className='errorMesseger'>Mật khẩu không được để trống và phải nhiều hơn 6 kí tự</div> : ''}
                                    </div>

                                    <div className="input-field">
                                        <div className="div-3">
                                            <div className="div-3">
                                                <div className="label-2">Xác nhận mật khẩu</div>

                                                <div className="input">
                                                    <div className="content-2">
                                                        <img className="img" alt="Lock" src='\public\uploads\login\img-lock.svg' />

                                                        <input
                                                            className="text"
                                                            id="input-2"
                                                            placeholder=""
                                                            type={eye2?"password":"text"}
                                                            onChange={(e) => setRePassword(e.target.value)}
                                                        />
                                                    </div>
                                                    
                                                    <div onClick={changeShowPass2} className='box-eye'>
                                                        {eye2?<img
                                                            className="eye-slash"
                                                            alt="Eye slash"
                                                            src='\public\uploads\login\img-eye-slash.svg'
                                                        />:<i className="fa-regular fa-eye"></i>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {errorNoRePassword ? <div className='errorMesseger'>Mật khẩu không trùng khớp</div> : ''}
                                    </div>
                                </div>
                            </div>
                            {errorTrue ? <div className='messegerTrue'>Đăng ký thành công</div> : ''}

                            <div className="button-group">
                                <button onClick={handleSubmit} className="button">
                                    <div className="button-base">
                                        <div className="text-3">Đăng ký</div>
                                    </div>
                                </button>
                            </div>

                            <div className="sign-in">
                                <p className="p">Bạn đã có tài khoản?</p>
                                <div onClick={()=>(navigate('/login'))} className="text-wrapper-3">Đăng nhập</div>
                            </div>
                        </div>
                    </div>

                    <img className="decor" alt="Decor" src='\public\uploads\login\img-decor.svg' />
                </div>

                <div className="IMG">
                    <div className="overlap-group">
                        <div className='rectangle' />
                    </div>
                </div>
            </div>
        </div>
    )
}
