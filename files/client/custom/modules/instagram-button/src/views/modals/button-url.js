define('instagram-button:views/modals/button-url', ['views/modal'], (Dep) => {
    return class extends Dep {

        template = 'instagram-button:modals/button-url'
        fitHeight = true
        isCollapsable = true
        
        data() {
            return {
                ...super.data(),
                url: this.options.url
            };
        }

        setup() {
            super.setup();
            this.headerText = document.title || this.options.buttonLabel || 'Modal';
        }
    };
});