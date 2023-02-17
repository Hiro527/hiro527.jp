/**
 * GA4の有効化/無効化を行う
 * @param {Boolean} value
 */
const setGA4 = async (value) => {
    window['ga-disable-G-0HTVBVVGX2'] = value;
    return;
};

/**
 * Cookieの設定を表示する
 */
const showCookieConfig = async () => {
    // wip
    return;
};

window.onload = () => {
    // 初アクセス時の処理
    const firstAccess = localStorage.getItem('firstAccess');
    if (!firstAccess) {
        localStorage.setItem('firstAccess', new Date());
        showCookieConfig();
    }
};
