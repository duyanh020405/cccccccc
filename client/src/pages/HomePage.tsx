import React from 'react'
import './homepage.css'
import Footer from '../layouts/footer/Footer'
import Header from '../layouts/Header/Header'
import Experiences from '../components/Experiences'

const candidates = [
    {
        name: "Đỗ Hữu Duy",
        age: 26,
        position: "Project Manager",
        level: "Middle",
        language: "IELTS 7.0",
        imageUrl: "/public/uploads/homepage/img-candidate-2-tq0a2wui.png",
    },
    {
        name: "Nguyễn Việt An",
        age: 35,
        position: "Full-stack Developer",
        level: "Senior",
        language: "IELTS 7.0",
        imageUrl: "/public/uploads/homepage/img-candidate-3-b5cfkx2m.png",
    },
    {
        name: "Hồ Huy Anh",
        age: 30,
        position: "Tester",
        level: "Middle",
        language: "IELTS 7.0",
        imageUrl: "/public/uploads/homepage/img-candidate-1-c3ohofji.png",
    },
    {
        name: "Nguyễn Hồng Thái",
        age: 24,
        position: "Front-end Developer",
        level: "Junior",
        language: "IELTS 7.0",
        imageUrl: "/public/uploads/homepage/img-dta05369-1.png",
    }
];

const jobs = [
    {
        title: "Sales IT làm việc tại Tokyo - Nagoya - Osaka",
        updateTime: "3 giờ trước",
        remainingDays: 10,
        salary: "400 - 600 man",
        location: "Nhật Bản",
        type: "Toàn thời gian",
        level: "Fresher",
        imageUrl: "/public/uploads/homepage/img-image-643.png",
    },
    {
        title: "SE/BrSE (Outsystem) làm việc tại Tokyo/Nagoya",
        updateTime: "3 giờ trước",
        remainingDays: 10,
        salary: "400 - 600 man",
        location: "Nhật Bản",
        type: "Toàn thời gian",
        level: "Junior",
        imageUrl: "/public/uploads/homepage/img-image.png",
    },
    {
        title: "Marketing Executive (Korea)",
        updateTime: "3 giờ trước",
        remainingDays: 10,
        salary: "400 - 600 man",
        location: "Nhật Bản",
        type: "Toàn thời gian",
        level: "Middle",
        imageUrl: "/public/uploads/homepage/img-image-643-2.png",
    },
    {
        title: "Senior Java and zOS SW Engineers",
        updateTime: "3 giờ trước",
        remainingDays: 10,
        salary: "Thỏa thuận",
        location: "Mỹ",
        type: "Toàn thời gian",
        level: "Senior",
        imageUrl: "/public/uploads/homepage/img-image.png",
    },
    {
        title: "Business Analyst (Global Market)",
        updateTime: "3 giờ trước",
        remainingDays: 10,
        salary: "35 triệu",
        location: "Hà Nội",
        type: "Toàn thời gian",
        levels: ["Fresher", "Junior", "Middle", "+1"],
        imageUrl: "/public/uploads/homepage/img-image-643-2.png",
    },
    {
        title: "Senior .NET (Rikkei Huế)",
        updateTime: "3 giờ trước",
        remainingDays: 10,
        salary: "Thỏa thuận",
        location: "Huế",
        type: "Toàn thời gian",
        level: "Junior",
        imageUrl: "/public/uploads/homepage/img-image-643.png",
    },
    {
        title: "Tuyển dụng kỹ sư CAD làm việc tại Tokyo",
        updateTime: "3 giờ trước",
        remainingDays: 10,
        salary: "400 - 600 man",
        location: "Nhật Bản",
        type: "Toàn thời gian",
        level: "Fresher",
        imageUrl: "/public/uploads/homepage/img-image-643-2.png",
    },
    {
        title: "Junior/Middle VueJS",
        updateTime: "3 giờ trước",
        remainingDays: 10,
        salary: "30 triệu",
        location: "Hà Nội",
        type: "Toàn thời gian",
        levels: ["Junior", "Middle"],
        imageUrl: "/public/uploads/homepage/img-image.png",
    },
    {
        title: "Senior .NET Developer (Rikkei Huế)",
        updateTime: "3 giờ trước",
        remainingDays: 10,
        salary: "Thỏa thuận",
        location: "Huế",
        type: "Toàn thời gian",
        level: "Senior",
        imageUrl: "/public/uploads/homepage/img-image-643.png",
    },
];


export default function HomePage() {
    return (
        <div>
            <Header></Header>
            <div className="homepage">
                <div className="element-banner">
                    <div className="overlap-4">
                        <div className="overlap-group-3">
                            <img className="decor-2" src="\public\uploads\homepage\img-decor-3.png" />
                            <img className="decor-3" src="\public\uploads\homepage\img-decor-2.png" />
                            <div className="search-box">
                                <p className="heading-3">Tìm kiếm việc làm cùng Rikkei Jobs!</p>
                                <div className="search">
                                    <div className="search-add">
                                        <div className="input-field-base-wrapper">
                                            <div className="div-6">
                                                <div className="div-6">
                                                    <div className="input-2">
                                                        <div className="content-2">
                                                            <img className="img-5" src="\public\uploads\homepage\search-normal.png" />
                                                            <input type="text" className='text-16' placeholder='Vị trí ứng tuyển' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-field-2">
                                            <div className="input-field-base">
                                                <div className="div-6">
                                                    <div className="input-3">
                                                        <div className="div-2">
                                                            <img className="img-5" src="\public\uploads\homepage\location.png" />
                                                            <div className="text-17">Tất cả địa điểm</div>
                                                        </div>
                                                        <img className="img-4" src="\public\uploads\homepage\arrow-down.png" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="button-2">
                                        <div className="button-base-4"><div className="text-18">Tìm kiếm</div></div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <img className="decor-4" src="\public\uploads\homepage\img-decor.png" />
                    </div>
                </div>

                <div className="element-hot-job">
                    <div className="div-4-job">
                        <div className="text-wrapper-10">Việc làm nổi bật</div>
                        <button className="button">
                            <div className="button-base">
                                <div className="text">Xem tất cả</div>
                                <img className="img-5" src="\public\uploads\homepage\img-arrow-up-right.svg" />
                            </div>
                        </button>
                    </div>
                    <div className="filters">
                        <div className="frame-4">
                            <button className="button-base-wrapper">
                                <div className="button-base-2"><div className="text-13">Ngẫu nhiên</div></div>
                            </button>
                            <button className="button-base-wrapper">
                                <div className="button-base-3"><div className="text-14">Hà Nội</div></div>
                            </button>
                            <button className="button-base-wrapper">
                                <div className="button-base-3"><div className="text-14">TP Hồ Chí Minh</div></div>
                            </button>
                            <button className="button-base-wrapper">
                                <div className="button-base-3"><div className="text-14">Miền Bắc</div></div>
                            </button>
                            <button className="button-base-wrapper">
                                <div className="button-base-3"><div className="text-14">Miền Nam</div></div>
                            </button>
                        </div>
                        <div className="input-field">
                            <div className="div-6">
                                <div className="div-6">
                                    <div className="input">
                                        <div className="div-2">
                                            <p className="text-15">
                                                <span className="text-wrapper-21">Lọc theo:</span> <span className="text-wrapper-22"> Địa điểm</span>
                                            </p>
                                        </div>
                                        <img className="img-4" src="\public\uploads\homepage\arrow-down.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="job-list">
                        {jobs.slice(0,9).map((job, index) => (
                            <div className="job-card" key={index}>
                                <div className="love">
                                    <img className="img-4" src="/public/uploads/homepage/img-heart.svg" alt="Heart icon" />
                                </div>
                                <p className="time">
                                    <span className="span">Cập nhật {job.updateTime} - Còn </span>
                                    <span className="text-wrapper-18">{job.remainingDays}</span>
                                    <span className="span"> ngày để ứng tuyển</span>
                                </p>
                                <div className="frame-12">
                                    <div className="div-2">
                                        <img className="img-4" src="/public/uploads/homepage/img-money.svg" alt="Money icon" />
                                        <div className="text-wrapper-19">{job.salary}</div>
                                    </div>
                                    <div className="div-2">
                                        <img className="img-4" src="/public/uploads/homepage/img-JP.svg" alt="Location icon" />
                                        <div className="text-wrapper-19">{job.location}</div>
                                    </div>
                                    <div className="div-2">
                                        <img className="img-4" src="/public/uploads/homepage/img-briefcase.svg" alt="Briefcase icon" />
                                        <div className="text-wrapper-19">{job.type}</div>
                                    </div>
                                </div>
                                <div className="image-wrapper">
                                    <img className="image" src={job.imageUrl} alt={job.title} />
                                </div>
                                <div className="job-name">
                                    <p className="heading-2">{job.title}</p>
                                    <div className="div-3">
                                        <div className="badge-2">
                                            <div className="badge-base-5">
                                                <div className="text-6">{job.level}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="pagination">
                        <div className="pagination-numbers">
                            <div className="pagination-number">
                                <div className="content"><div className="number-7">1</div></div>
                            </div>
                            <div className="content-wrapper">
                                <div className="content"><div className="number-8">2</div></div>
                            </div>
                            <div className="content-wrapper">
                                <div className="content"><div className="number-8">3</div></div>
                            </div>
                            <div className="content-wrapper">
                                <div className="content"><div className="number-8">...</div></div>
                            </div>
                            <div className="content-wrapper">
                                <div className="content"><div className="number-8">8</div></div>
                            </div>
                            <div className="content-wrapper">
                                <div className="content"><div className="number-8">9</div></div>
                            </div>
                        </div>
                        <div className="img-wrapper"><img className="img-4" src="\public\uploads\homepageimg-arrow-left.svg" /></div>
                        <div className="img-wrapper"><img className="img-4" src="\public\uploads\homepageimg-arrow-right.svg" /></div>
                    </div>
                </div>
                <div className="element-hot-candidates">
                    <div className="overlap-2">
                        <img className="decor" src="\public\uploads\login\img-decor.svg" />
                        <div className="div-4">
                            <div className="text-wrapper-10">Ứng viên nổi bật</div>
                            <button className="button">
                                <div className="button-base">
                                    <div className="text">Xem tất cả</div>
                                    <img className="img-5" src="\public\uploads\homepage\img-arrow-up-right.svg" />
                                </div>
                            </button>
                        </div>
                        <div className="overlap-3">
                            {candidates.map((candidate, index) => {
                                return (<div key={index} className="candidate">
                                    <div className="name">
                                        <div className="infor">
                                            <div className="IMG">
                                                <div className="overlap-group-2"><img className="img-6" src={candidate.imageUrl} /></div>
                                            </div>
                                            <div className="name-2">
                                                <div className="text-wrapper-14">{candidate.name}</div>
                                                <div className="text-wrapper-15">{candidate.age} tuổi</div>
                                            </div>
                                        </div>
                                        <div className="badge">
                                            <div className="badge-base"><div className="text-2">{candidate.position}</div></div>
                                        </div>
                                    </div>
                                    <div className="more">
                                        <div className="div-5">
                                            <img className="img-4" src="\public\uploads\homepage\img-teacher.svg" />
                                            <div className="frame-11">
                                                <div className="text-wrapper-16">Trình độ:</div>
                                                <div className="text-wrapper-17">{candidate.level}</div>
                                            </div>
                                        </div>
                                        <div className="div-5">
                                            <img className="img-4" src="\public\uploads\homepage\img-archive-book.svg" />
                                            <div className="div-2">
                                                <div className="text-wrapper-16">Ngoại ngữ:</div>
                                                <div className="text-wrapper-17">{candidate.language}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            })}
                        </div>
                    <div className="pagination-dot-group">
                        <div className="pagination-dot"></div>
                        <div className="pagination-dot-2"></div>
                        <div className="pagination-dot-2"></div>
                    </div>
                    </div>
                </div>
                <Experiences></Experiences>
                <div className="element-i-tc">
                    <div className="text-wrapper-10">Đối tác tuyển dụng</div>
                    <div className="i-tc">
                        <div className="background"><div className="USMH-png"></div></div>
                        <div className="div-wrapper"><div className="png"></div></div>
                        <div className="background"><div className="sunloft-png"></div></div>
                        <div className="background"><div className="systena-png"></div></div>
                        <div className="div-wrapper"><div className="fujikin-png"></div></div>
                        <div className="background"><div className="clouds-png"></div></div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}