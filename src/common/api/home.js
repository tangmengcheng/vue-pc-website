import api from '../request'
export const apiHomePic = p => api('POST', '/commonAPI/advpicture/selectBySysAdvpicture', p)
