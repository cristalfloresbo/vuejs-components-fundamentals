// Define a local component
let PlanComponent = {
    template: '#plan-template',
    props: {
        name: {
            type: String,
            required: true
        }
    }
}

// Create a parent Vue component
let PlanPickerComponent = {
    template: '#plan-picker-template',
    components: {
        plan: PlanComponent
    },
    data() {
        return {
            plans: ['The Single', 'The Curious', 'The Addict']
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