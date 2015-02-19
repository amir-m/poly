(function () {
	Polymer({
		publish: {
			hidden: {
				value: false,
				reflect: true
			}
		},
		selectedProvince: 7,
		selectedCity: 0,
		selectedMarital: null,
		selectedDate: new Date(),
		ready: function() {
			// this._this_name = this.$.el.
			this.first_name_label = this.$.globals.element_names[this.$.globals.language]['user-profile']['first_name'];
			this.last_name_label = this.$.globals.element_names[this.$.globals.language]['user-profile']['last_name'];
			this.postal_code_label = this.$.globals.element_names[this.$.globals.language]['user-profile']['postal_code'];
			this.telephone_label = this.$.globals.element_names[this.$.globals.language]['user-profile']['telephone'];
			this.employer_label = this.$.globals.element_names[this.$.globals.language]['user-profile']['employer'];
			this.marital_status_label = this.$.globals.element_names[this.$.globals.language]['user-profile']['marital_status'];
			this.marital_statuses = this.$.globals.element_names[this.$.globals.language]['user-profile']['marital_statuses'];
			this.children_label = this.$.globals.element_names[this.$.globals.language]['user-profile']['children'];			
			this.height_label = this.$.globals.element_names[this.$.globals.language]['user-profile']['hight'];			
			this.date_of_birth_label = this.$.globals.element_names[this.$.globals.language]['user-profile']['date_of_birth'];
			this.cities = [];
			// var menu = document.querySelector('#provinceDropDown');
			// console.log(menu)
			// menu.addEventListener('core-select', function(e) {
			// 	console.log(e.detail.item);
			// });

		},
		provinceChanged: function(e, detail, sender) {
			var provinces = this.$.globals.provinces[this.selectedProvince];
			this.cities = this.$.globals.cities[provinces];
			this.$.cityDropDown.removeAttribute("hidden");
		},
		cityChanged: function(e, detail, sender) {
			console.log(detail.item.hidden);
		},
		maritalChanged: function(e, detail, sender) {
			console.log(detail.item.hidden);
		},

	});
})();