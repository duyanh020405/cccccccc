import apiAxios from "../apis/instance"

// Đăng nhập
export const loginAPI = async (user: any) => {
    const response = await apiAxios.get("users")
    const allUser = response.data
    const check = allUser.find((item: any) => (item.email === user.email && item.password === user.password)||(item.userName === user.email && item.password === user.password))
    return check
}

// Đăng ký
export const registerAPI = async (user: any) => {
    const response = await apiAxios.post("users", user)
    return response.data
}

// Cập nhật thông tin ứng viên
export const updateUserInfo = async (idUser:any, user:any) => {
    const response = await apiAxios.put(`users/${idUser}`,user)
    return response.data
}
// lấy thông tin user đăng nhập 
export const getUserLogin = async (idUser: number) => {
    const response = await apiAxios.get(`users/${idUser}`)
    return response.data
} 