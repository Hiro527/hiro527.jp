const setGA4 = async (value) => {
    window['ga-disable-G-0HTVBVVGX2'] = value;
    return;
};

const showCookieConfig = async () => {
    // wip
    return;
};

const copyEmailAddr = () => {
    navigator.clipboard
        .writeText('business@hiro527.jp')
        .catch((e) => console.error(e));
};

const openNewUrl = (url) => {
    window.open(url);
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
