class MobileNavBar {
    constructor(mobileButton, mobileNav, curtain) {
        this.mobileButton = $(mobileButton);
        this.mobileNav = $(mobileNav)
        this.curtain = $(curtain)

        this.activeClass = "active_menu";
        this.closeCurtain = "close"
        this.handleClick = this.handleClick.bind(this) 

    }


    handleClick() {
        this.mobileNav.toggleClass(this.activeClass);
        setTimeout(() => {
            this.curtain.toggleClass(this.closeCurtain);
        }, 250)
        this.mobileButton.toggle().attr(this.closeCurtain)

    }

    EventClick() {
        this.mobileButton.click(() => {this.handleClick()});
    }

    init() {
        if (this.mobileButton) {
            this.EventClick();
        }

        return this;
    }
}

const mobileNavBar = new MobileNavBar(
    ".responsive_menu",
    ".list",
    ".curtain",
)

mobileNavBar.init();