
const App = {
	data() {
		return {
			title: 'Список заметок',
			placeholderStr: 'Название заметки',
			inputValue: '',
			notes: ['покакать','покак123ать'],
		}
	},

	methods: {
		inputChangeHandler(e) {
			this.inputValue = e.target.value;
		},
		
		addNewNote() {

			if (!this.inputValue) return;

			this.notes.push(this.inputValue);
			this.inputValue = ''

		},




		delNote(index) {
			this.notes.splice(index, 1)
		}

	},
}


Vue.createApp(App).mount('#app');


