export const SET_QR_CODE = 'SET_QR_CODE';
export const RESET_QR_DATA = 'RESET_QR_DATA';

export const setQRCode = (data) => ({
    type: SET_QR_CODE,
    payload: data
});

export const resetQRCode = () => ({
    type: RESET_QR_DATA,
});