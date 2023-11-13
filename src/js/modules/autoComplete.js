import autoComplete from "@tarekraafat/autocomplete.js";
import countryList from "./../helpers/countyList";

function autoCompleteFunc (){
	const autoCompleteJS = new autoComplete({
		// API Basic Configuration Object
		selector: "#autoCompleteCountry",
		placeHolder: "e.g Bali, Indonesia",
		data: {
		  src: countryList,
		},
		resultItem: {
		  highlight: true,
		},
		events: {
		  input: {
			 selection: (event) => {
				const selection = event.detail.selection.value;
				autoCompleteJS.input.value = selection;
			 },
		  },
		},
		searchEngine: "strickt",
	 });
}
export default autoCompleteFunc;
