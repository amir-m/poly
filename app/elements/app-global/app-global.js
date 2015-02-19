(function () {
	var language = 'fr';
	var element_names = {
		'fr': {
			'user-profile': {
				first_name: 'Prenom',
				last_name: 'Nom',
				email: 'Courriel',
				address: 'Address',
				city: 'Ville',
				province: 'Province',
				country: 'Pays',
				postal_code: 'Code Postal',
				telephone: 'Téléphone',
				employer: 'Employer',
				marital_status: 'État Civil',
				children: 'Enfants',
				hight: 'Taille',
				date_of_birth: 'Date de Naissance',
				marital_statuses: ['Célibataire', 'Marié', 'Conjoint de fait', 'Séparé', 'Divorcé', 'Mariage annulé', 'Veuf']

			}
		}
	};

	var provinces = ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Nova Scotia", "Ontario", "Quebec", "Saskatchewan"];
	var cities = {
		'Alberta': ["Calgary", "Edmonton", "Red Deer", "Lethbridge", "Sherwood Park", "Saint Albert", "Grande Prairie", "Fort McMurray", "Airdrie", "Spruce Grove", "Cochrane", "Camrose", "Leduc"],
		"British Colombia": ["Vancouver", "Surrey", "Victoria", "Burnaby", "Richmond", "Abbotsford", "Coquitlam", "Kelowna", "Langley", "Delta", "Nanaimo", "Maple Ridge", "Kamloops", "White Rock", "New Westminster"],
		"Manitoba": ["Winnipeg", "Brandon", "Portage la Prairie", "Thompson", "Selkirk", "Dauphin", "Winkler", "Morden", "The Pas", "Swan River", "Stonewall", "Altona", "Virden"], 
		"New Brunswick": ["Saint John", "Moncton", "Fredericton", "Bathurst", "Miramichi Edmundston", "Campbellton", "Oromocto", "Grand Falls", "Shediac	Caraquet", "Saint Stephen", "Dalhousie", "Sussex", "Sackville"],
		"Newfoundland and Labrador": ["Saint Johns", "Mount Pearl", "Conception Bay South", "Corner Brook", "Bay Roberts", "Paradise", "Gander", "Goose Bay", "Labrador City", "Stephenville", "Deer Lake", "Grand Bank", "Marystown"], 
		"Nova Scotia": ["Halifax", "Dartmouth", "Sydney", "Glace Bay", "Truro", "Sydney Mines", "Kentville", "New Waterford", "Amherst", "Yarmouth", "North Sydney", "Greenwood", "Antigonish"], 
		"Ontario": ["Toronto", "Ottawa", "Hamilton", "Scarborough", "Mississauga	Brampton", "Kitchener", "Etobicoke", "London", "Windsor	Markham", "Vaughan", "Oshawa", "Richmond Hill", "Oakville"], 
		'Quebec': ["Montreal", "Quebec City", "Laval", "Gatineau", "Longueuil", "Saguenay", "Levis", "Sherbrooke", "Saint-Jean-sur-Richelieu", "Chicoutimi", "Drummondville", "Saint-jerome", "Granby", "Saint-Hyacinthe"],
		"Saskatchewan": ["Saskatoon", "Regina", "Prince Albert", "Moose Jaw", "Lloydminster	North Battleford", "Yorkton", "Swift Current", "Estevan", "Weyburn	Melfort", "Humboldt", "Meadow Lake", "Melville", "Kindersley"]
	};


	Polymer({
		ready: function() {
			this.language = language;
			this.element_names = element_names;
			this.provinces = provinces;
			this.cities = cities;
		}
	});
})();