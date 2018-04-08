const cookieName = 'chocolate_chips';

function renderValue() {
    const getElement = document.getElementById('c1');
    getElement.innerHTML = getCookie();
}

function getCookie() {
    return Cookies.get(cookieName) || 0;
}

function addChips() {
    let cookieCount = getCookie();
    Cookies.set(cookieName, parseInt(cookieCount)+1 );
    cookieCount = getCookie();

    renderValue(cookieCount);
}

function rmChips() {
    Cookies.remove(cookieName);
    renderValue();
}

window.onload = function() {
    document.querySelector('#add1').addEventListener('click', addChips);
    document.querySelector('#clear').addEventListener('click', rmChips);
    renderValue();
};