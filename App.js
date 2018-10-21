const list = [];

function randomLogo() {
    const logos = ['❤', '👌', '😍', '💪', '🏆', '⚡', '✨', '👍', '🍍', '🔥', '🎯'];
    const limit = logos.length;
    return logos[Math.floor(Math.random() * limit)];
}

const storageKey = "Favo-sites";
/*   Vue instance   */
new Vue({
    el: "#BMApp",
    data: {
        sitesList: list,
        newSiteName: '',
        newSiteUrl: '',
        logo: list.siteLogo,
        error: false
    },

    created() {
        this.sitesList = JSON.parse(localStorage.getItem(storageKey) || '[]');
    },
    methods: {
        addFavoSite: function () {
            if (!this.newSiteName || !this.newSiteUrl) {
                this.error = true;
            } else {
                function randomLogo() {
                    const logos = ['❤', '👌', '😍', '💪', '🏆', '⚡', '✨', '👍', '🍍', '🔥', '🎯'];
                    const limit = logos.length;
                    return logos[Math.floor(Math.random() * limit)];
                }
                this.sitesList.push({
                    siteLogo: randomLogo(),
                    siteName: this.newSiteName,
                    siteUrl: this.newSiteUrl
                });
                localStorage.setItem(storageKey, JSON.stringify(this.sitesList));
                this.newSiteName = '';
                this.newSiteUrl = '';
                this.error = false;
            }
        },
        removeSite: function (index) {
            this.sitesList.splice(index, 1);
            localStorage.setItem(storageKey, JSON.stringify(this.sitesList));
        }
    }
});
