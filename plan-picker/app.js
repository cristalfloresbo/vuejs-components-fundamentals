// Define a local component
let PlanPickerItemComponent = {
    template: '#plan-picker-item-template',
    props: {
        name: {
            type: String,
            required: true
        },
        selectedPlan: {
            type: String
        }
    },
    computed: {
        isSelected() {
            return this.name === this.selectedPlan
        }
    },
    methods: {
        select() {
            this.$emit('select', this.name)
        }
    }
}

// Create a parent Vue component
let PlanPickerComponent = {
    template: '#plan-picker-template',
    components: {
        'plan-picker-item': PlanPickerItemComponent
    },
    data() {
        return {
            plans: ['The Single', 'The Curious', 'The Addict'],
            selectedPlan: null
        }
    },
    methods: {
        selectPlan(plan) {
            this.selectedPlan = plan
        }
    }
}

// Create a Vue instance
new Vue({
    el: '#app',
    components: {
        'plan-picker': PlanPickerComponent
    }
})