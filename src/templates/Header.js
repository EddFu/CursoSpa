import pic from "../img/logorickandmorty.png"

const Header = () => {
    const view = `
        <div class="Header-main">
            <div class="Header-logo">
                <h1>
                    <a href="/">
                        <img src="${pic}" alt="logo">
                    </a>
                </h1>
            </div>
            <div class="header-nav">
                <a href="#/about/">
                    About
                </a>
            </div>
        </div>
    `;
    return view;
};

export default Header;