import React, { useState, useEffect } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { loginAPI } from '../../../services/user.service';

export default function Login() {
    const navigate = useNavigate();
    
    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const [saveAccount, setSaveAccount] = useState(false);
    const [errorNull, setErrorNull] = useState(false);
    const [errorFalse, setErrorFalse] = useState(false);
    const [errorTrue, setErrorTrue] = useState(false);
    const [eye1, setEye1] = useState(true);

    // Sử dụng useEffect để kiểm tra và tải dữ liệu lưu trữ khi trang tải lên
    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('save') ?? 'null');
        if (savedData) {
            setUser({
                email: savedData.email || '',
                password: savedData.password || '',
            });
            setSaveAccount(true);
        }
    }, []);

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            email: event.target.value,
        });
    };

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            password: event.target.value,
        });
    };

    const handleSubmit = async () => {
        setErrorNull(false);
        setErrorFalse(false);
        setErrorTrue(false);

        if (user.email === '' || user.password === '') {
            setErrorNull(true);
        } else {
            try {
                const result = await loginAPI(user);

                if (result) {
                    setErrorTrue(true);
                    setErrorFalse(false);

                    // Loại bỏ mật khẩu trước khi lưu vào localStorage cho userLogin
                    const userLogin = { ...result, password: '' };
                    localStorage.setItem('userLogin', JSON.stringify(userLogin));

                    // Lưu tài khoản và mật khẩu nếu saveAccount được chọn
                    if (saveAccount) {
                        localStorage.setItem('save', JSON.stringify({ email: result.email, password: user.password }));
                    } else {
                        localStorage.removeItem('save'); // Xóa thông tin lưu trữ nếu không chọn "Ghi nhớ đăng nhập"
                    }

                    setTimeout(() => {
                        setErrorTrue(false);
                        navigate('/');
                    }, 500);
                } else {
                    setErrorFalse(true);
                }
            } catch (error) {
                console.log("Lỗi khi đăng nhập:", error);
            }
        }
    };

    const changeShowPass1 = () => {
        setEye1(!eye1);
    };

    return (
        <div>
            <div className="ng-nhp">
                <div className="overlap">
                    <img className="decor" src='\public\uploads\login\img-decor.svg' alt="Decor" />

                    <div className="content">
                        <div className="login-form">
                            <div className="title">
                                <img className="logo" src='\public\uploads\login\img-logo.svg' alt="Logo" />
                                <div className="frame">
                                    <div className="text-wrapper">Đăng nhập</div>
                                    <p className="div">Cùng phát triển con đường sự nghiệp với Rikkei Jobs</p>
                                </div>
                            </div>

                            <div className="div-2">
                                <div className="input-field">
                                    <label className='label'>Email</label>
                                    <div className="input">
                                        <div className="content-2">
                                            <img className="img" src='\public\uploads\login\img-sms.svg' alt="Sms" />
                                            <input
                                                className="text"
                                                placeholder="you@company.com"
                                                type="email"
                                                onChange={handleEmail}
                                                value={user.email}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="input-field">
                                    <label className='label'>Mật khẩu</label>
                                    <div className="input">
                                        <div className="content-2">
                                            <img className="img" src='\public\uploads\login\img-lock.svg' alt="Lock" />
                                            <input
                                                className="text"
                                                placeholder="password"
                                                type={eye1 ? "password" : "text"}
                                                onChange={handlePassword}
                                                value={user.password}
                                            />
                                        </div>
                                        <div onClick={changeShowPass1} className='box-eye'>
                                            {eye1 ? (
                                                <img
                                                    className="eye-slash"
                                                    alt="Eye slash"
                                                    src='\public\uploads\login\img-eye-slash.svg'
                                                />
                                            ) : (
                                                <i className="fa-regular fa-eye"></i>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="remember">
                                <div className="checkbox">
                                    <div className="checkbox-base-wrapper">
                                        <input
                                            className="checkbox-base"
                                            type="checkbox"
                                            id="customCheckbox"
                                            checked={saveAccount}
                                            onChange={() => setSaveAccount(!saveAccount)}
                                        />
                                        <label htmlFor="customCheckbox"></label>
                                    </div>
                                    <div className="text-3">Ghi nhớ đăng nhập</div>
                                </div>
                                <div className="text-wrapper-2">Quên mật khẩu?</div>
                            </div>

                            <div className="button-group">
                                <button onClick={handleSubmit} className="button">
                                    <div className="button-base">
                                        <div className="text-4">Đăng nhập</div>
                                    </div>
                                </button>
                            </div>
                            {errorNull && <div className='errorMessegerNull'>Mật khẩu hoặc tài khoản không được để trống</div>}
                            {errorFalse && <div className='errorMessegerFalse'>Mật khẩu hoặc tài khoản không đúng</div>}
                            {errorTrue && <div className='messegerTrue'>Đăng nhập thành công</div>}
                            <div className="sign-up">
                                <p className="p">Bạn chưa có tài khoản?</p>
                                <div onClick={() => navigate('/register')} className="text-wrapper-3">Đăng ký</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="IMG">
                    <div className="overlap-group">
                        <div className="rectangle" />
                    </div>
                </div>
            </div>
        </div>
    );
}
