class MobileNavBar {
    constructor(mobileList, list) {
        this.mobileList = $(mobileList);
        this.list = $(list);
        this.activeClass = "active";
        
    }

    EventClick() {
        this.mobileList.click(() => {
            console.log("heyyy");})
    }

    init() {
        if (this.mobileList) {
            this.EventClick();

        }

        return this;
    }
}

const mobileNavBar = new MobileNavBar(
    ".list",
    ".nav-list",
    ".nav-list li",
)

mobileNavBar.init();