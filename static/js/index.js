const setGA4 = async (value) => {
    window['ga-disable-G-0HTVBVVGX2'] = value;
    return;
};

const showCookieConfig = async () => {
    // wip
    return;
};

const copyEmailAddr = (el) => {
    navigator.clipboard
        .writeText('business@hiro527.jp')
        .catch((e) => console.error(e));
    el.innerText = 'Copied!';
    setTimeout(() => {
        el.innerText = 'Click to Copy';
    }, 3000);
};

const openNewUrl = (url) => {
    window.open(url);
    return;
};

window.onload = () => {
    // 初アクセス時の処理
    const searchParams = new URLSearchParams(window.location.search);
    const firstAccess = localStorage.getItem('firstAccess');
    if (!firstAccess || searchParams.has('debug')) {
        localStorage.setItem('firstAccess', new Date());
        showCookieConfig();
    }
};
