var groceryList = new Vue({
    el: '#List',
    data: {
        Name: 'Гость',
        newName: '',
        newItem: '',
        newId: 0,
        isActive: false,
        items: [],
        count: 0,
        isNamed: false
    },
    methods: {
        inputName: function () {
            if (this.count === 0) {
                if (this.newName !== '') {
                    this.Name = this.newName;
                    this.newName = '';
                    this.isNamed = !this.isNamed;
                    this.count++
                }
            }
        },
        inputItem: function () {
            if (this.newItem != null) {
                this.items.push({
                    name: this.newItem,
                    purchased: false
                });
            }
            this.newItem = '';
            this.newId += 1
        },
        crossItem: function (item) {
            item.purchased = !item.purchased
        }
    }
});
