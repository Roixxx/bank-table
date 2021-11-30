
const App = {
	data() {
		return {
			title: 'Список заметок',
			placeholderStr: 'Название заметки',
			inputValue: '',
			notes: ['заметка 1','заметка 2'],
		}
	},

	methods: {

		
		addNewNote() {

			if (!this.inputValue) return;

			this.notes.push(this.inputValue);
			this.inputValue = ''

		},

		delNote(index) {
			this.notes.splice(index, 1)
		}

	},

	computed: {
		doubleCount() {
			return this.notes.length * 2;
		}
	},

	watch: {
		inputValue(val) {
			if (val.length > 10) {
				this.inputValue = '';
			}
		}
	}
}


Vue.createApp(App).mount('#app');


