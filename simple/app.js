const app = {
    data() {
        return {
            title: "Vue twitter",
            item: "",
            items: []
        }
    },
    methods: {
        onSubmit() {
            this.items.push({
                id: this.items.length + 1,
                avatar: `https://avatars.dicebear.com/api/avataaars/${Date.now()}.svg`,
                body: this.item,
                date: new Date(Date.now()).toLocaleString()
            });
            this.item = "";
        }
    }
};
Vue.createApp(app).mount("#app");
