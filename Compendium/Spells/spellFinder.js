window.onload = function() {
	populateTables();

	document.getElementById("bard").addEventListener("click", function() {
		if(document.getElementById("bard").className == "w-100"){
			document.getElementById("bard").className = "w-100 btn-active";
		}
		else{
			document.getElementById("bard").className = "w-100"
		}
		populateTables();
	});
	document.getElementById("cleric").addEventListener("click", function() {
		if(document.getElementById("cleric").className == "w-100"){
			document.getElementById("cleric").className = "w-100 btn-active";
		}
		else{
			document.getElementById("cleric").className = "w-100"
		}
		populateTables();
	});
	document.getElementById("druid").addEventListener("click", function() {
		if(document.getElementById("druid").className == "w-100"){
			document.getElementById("druid").className = "w-100 btn-active";
		}
		else{
			document.getElementById("druid").className = "w-100"
		}
		populateTables();
	});
	document.getElementById("paladin").addEventListener("click", function() {
		if(document.getElementById("paladin").className == "w-100"){
			document.getElementById("paladin").className = "w-100 btn-active";
		}
		else{
			document.getElementById("paladin").className = "w-100"
		}
		populateTables();
	});
	document.getElementById("ranger").addEventListener("click", function() {
		if(document.getElementById("ranger").className == "w-100"){
			document.getElementById("ranger").className = "w-100 btn-active";
		}
		else{
			document.getElementById("ranger").className = "w-100"
		}
		populateTables();
	});
	document.getElementById("wizard").addEventListener("click", function() {
		if(document.getElementById("wizard").className == "w-100"){
			document.getElementById("wizard").className = "w-100 btn-active";
		}
		else{
			document.getElementById("wizard").className = "w-100"
		}
		populateTables();
	});
	document.getElementById("warlock").addEventListener("click", function() {
		if(document.getElementById("warlock").className == "w-100"){
			document.getElementById("warlock").className = "w-100 btn-active";
		}
		else{
			document.getElementById("warlock").className = "w-100"
		}
		populateTables();
	});
	document.getElementById("mage").addEventListener("click", function() {
		if(document.getElementById("mage").className == "w-100"){
			document.getElementById("mage").className = "w-100 btn-active";
		}
		else{
			document.getElementById("mage").className = "w-100"
		}
		populateTables();
	});

	document.getElementById("searchBox").addEventListener('input', () => {
		// Get the value of the input element
		const inputValue = document.getElementById("searchBox").value;
	  
		// Call the removeLiNotMatchingText function with the input value as the argument
		removeLiNotMatchingText(inputValue);
	});

	document.getElementById("searcher").addEventListener("click", openSpell(event))
};

function removeLiNotMatchingText(text) { // Search Function	
	let level;

	// I make all spell visible
	populateTables();

	if(!isNaN(text) && text <= 9){
		for (let i = 0; i < 10; i++) {
			if (text == i.toString()) {
			  level = Array.from(document.getElementsByClassName("uls"));
			  level.forEach(element => {
				if (element.id == text) return;
				element.parentNode.className = "spell-table visually-hidden";
			  });
			  break;
			}
		}
	}

	if(isNaN(text))
	{
		// Get all <ul> elements with class "uls"
		const uls = Array.from(document.getElementsByClassName("uls"));
		
		// Loop through each <ul> element
		uls.forEach(ul => {
			// Get all <li> elements inside the current <ul> element
			const lis = Array.from(ul.getElementsByTagName("li"));
			
			// Loop through each <li> element
			lis.forEach(li => {
				// If the text inside the <li> element does not match the given text, remove it
				if (!li.innerHTML.toLowerCase().includes(text)) {
					li.remove();
				}
			});
		});
	}

	level = Array.from(document.getElementsByClassName("uls")); // Makes uls with no elements invisible
	level.forEach(element => {
		if(!element.hasChildNodes()){
			element.parentNode.className = "spell-table visually-hidden";
		}
	});
}

function openSpell(e){	// Redirects to the spell page
	
	if(e.target.tagName == "LI"){ // Checks if the target's tag is a li
	
		let redirect = e.target.innerHTML; // Gets the target innerHTML

		redirect = redirect.replace(/ /g, "_"); // Replaces any blank spaces with an underscore

		redirect += ".html"; // Adds the .html extension

		document.getElementById("spellWindow").src = "Spells/" + redirect; // Finally we have the destination
	}
}

// write a function that copies all content within spellWindow and replaces all <b> and </b> with ** and **, respectively, and <i> and </i> with * and *, respectively. Then, it should copy the content to the clipboard.
function copySpell(){ // Copies the spell to the clipboard

	// get first element with 'container' class and save it under spell
	let spell = document.getElementsByClassName("container")[0].innerHTML; // Gets the spell description
	// get all text from the paragraphs in spell
	spell = spell.replace(/<p>/g, ""); // Replaces the <p> with nothing

	// remove all </p> tags from spell
	spell = spell.replace(/<\/p>/g, ""); // Replaces the </p> with nothing

	spell = spell.replace(/<b>/g, "**"); // Replaces the <b> with **
	// Replace the <strong> and </strong> tags with ** and **, respectively
	spell = spell.replace(/<strong>/g, "**"); // Replaces the <strong> with **
	spell = spell.replace(/<\/strong>/g, "**"); // Replaces the </strong> with **
	spell = spell.replace(/<\/b>/g, "**"); // Replaces the </b> with **
	spell = spell.replace(/<i>/g, "*"); // Replaces the <i> with *
	spell = spell.replace(/<\/i>/g, "*"); // Replaces the </i> with *

	// remove all <br> tags from spell and replace them with a newline character
	spell = spell.replace(/<br>/g, "\n"); // Replaces the <br> with a newline character

	// remove all <span> tags from spell
	spell = spell.replace(/<span>/g, ""); // Replaces the <span> with nothing

	// remove all </span> tags from spell
	spell = spell.replace(/<\/span>/g, ""); // Replaces the </span> with nothing

	// remove all <div> tags from spell
	spell = spell.replace(/<div>/g, ""); // Replaces the <div> with nothing

	// remove all </div> tags from spell
	spell = spell.replace(/<\/div>/g, ""); // Replaces the </div> with nothing

	// remove all <ul> tags from spell
	spell = spell.replace(/<ul>/g, ""); // Replaces the <ul> with nothing

	// remove all </ul> tags from spell

	spell = spell.replace(/<\/ul>/g, ""); // Replaces the </ul> with nothing

	// remove all <li> tags from spell
	spell = spell.replace(/<li>/g, ""); // Replaces the <li> with nothing

	// remove all </li> tags from spell
	spell = spell.replace(/<\/li>/g, ""); // Replaces the </li> with nothing

	// remove all <h1> tags from spell
	spell = spell.replace(/<h1>/g, ""); // Replaces the <h1> with nothing

	// remove all </h1> tags from spell
	spell = spell.replace(/<\/h1>/g, ""); // Replaces the </h1> with nothing

	navigator.clipboard.writeText(spell); // Copies the spell to the clipboard

}

function buildSpell(){ // Writes the description of the spell

	let path = window.location.pathname; // We get the title
	let page = path.split("/").pop();
	page = page.replace(".html", "");
	page = page.replace(/_/g, " 	");
	

	if(document.getElementsByClassName("dont")[0]){ // If it finds the class "dont" the function stops as that class marks for manually added text and it doesn't need the rest of this function
		document.getElementById("spell-title").innerHTML = page;

		return;
	}
	
	let area = document.getElementById("spell").innerHTML; // There is a straw textarea element that we use to format the text
	
    area = area.trim();

    let n = area.split("\n"); // We split the area into rows for easier placement

	
	document.getElementById("spell-title").innerHTML = page; // Puts every row in the places

	document.getElementById("spell-school").innerHTML = n[0];
	
	document.getElementById("spell-components-time").innerHTML = n[1].replace("Tempo di Lancio:", "");

	document.getElementById("spell-components-range").innerHTML = n[2].replace("Gittata:", "");

	document.getElementById("spell-components-components").innerHTML = n[3].replace("Componenti:", "");

	document.getElementById("spell-components-duration").innerHTML = n[4].replace("Durata:", "");



	let fullText = area; // I save the spell description as a clean text
	fullText = fullText.slice(fullText.lastIndexOf(n[5]))

	n = n.slice(5); // I slice out the rows I already placed
	
	let desc = document.getElementById("spell-description");

	desc.innerHTML = fullText;

	if(findSubstringIndex(desc.innerHTML, "Ai Livelli Superiori.") != -1){ // This part makes so that the string gets inserted inside a span because we need it to be bold
		let index = findSubstringIndex(desc.innerHTML, "Ai Livelli Superiori.");
		
		let a = desc.innerHTML.slice(0, index);
		let b = "<span id=\"als\"class=\"bold\"> Ai Livelli Superiori. <span>";
		let c = desc.innerHTML.slice(index+22);

		desc.innerHTML = a;
		desc.innerHTML += b;
		desc.innerHTML += c;
	}

	desc.innerHTML = addLineBreaks(desc.innerHTML); // Replace all occurrences of '.' with '.\n' to add a line break after each period
	
}

function addLineBreaks(text) { 
	// Replace all occurrences of '.' with '.\n' to add a line break after each period
	const textWithBreaks = text.replace(/\./g, '.<br><br>');
  
	// Return the updated text
	return textWithBreaks;
}

function findSubstringIndex(text, substring) {
	// Use the indexOf method to find the index of the substring
	const index = text.indexOf(substring);
  
	// Return the index or -1 if the substring is not found
	return index;
}

function downloadFile(){ // Supposedly downloads the PDF        --- WORKING ON ---
	
	const anchor = document.createElement('a');

	let download = "pdf/";

	download += document.title;

	download = download.replace(/ /g, "_")

	download += ".pdf";


    anchor.href = download;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}

function populateTables(e){
	let counter = 0;
	const Cbard = new bard();
	const Ccleric = new cleric();
	const Cdruid = new druid();
	const Cpaladin = new paladin();
	const Cranger = new ranger();
	const Cwizard = new wizard();
	const Cwarlock = new warlock();
	const Cmage = new mage();

	for (let i = 0; i < 10; i++) {
		document.getElementById(i.toString()).parentNode.className = "spell-table";
	}

	Cbard.clearTable();
	if(document.getElementById("bard").className == "w-100 btn-active"){
		Cbard.loadClass();
		counter++;
	}
	if(document.getElementById("cleric").className == "w-100 btn-active"){
		Ccleric.loadClass();
		counter++;
	}
	if(document.getElementById("druid").className == "w-100 btn-active"){
		Cdruid.loadClass();
		counter++;
	}
	if(document.getElementById("paladin").className == "w-100 btn-active"){
		Cpaladin.loadClass();
		counter++;
	}
	if(document.getElementById("ranger").className == "w-100 btn-active"){
		Cpaladin.loadClass();
		counter++;
	}
	if(document.getElementById("wizard").className == "w-100 btn-active"){
		Cwizard.loadClass();
		counter++;
	}
	if(document.getElementById("warlock").className == "w-100 btn-active"){
		Cwarlock.loadClass();
		counter++;
	}
	if(document.getElementById("mage").className == "w-100 btn-active"){
		Cmage.loadClass();
		counter++;
	}
	if(counter == 0){
		Cbard.clearTable();
		Ccleric.loadClass();
		Cdruid.loadClass();
		Cdruid.loadClass();
		Cpaladin.loadClass();
		Cranger.loadClass();
		Cwizard.loadClass(); 
		Cwarlock.loadClass();
		Cmage.loadClass();
	}


	let level = Array.from(document.getElementsByClassName("uls")); // Makes uls with no elements invisible
	level.forEach(element => {
		if(!element.hasChildNodes()){
			element.parentNode.className = "spell-table visually-hidden";
		}
	});
}

// CLASSES @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

class spellUtils{ // Includes utils
	// an array to store all the spells
	spell = [];
  
	// a method to clear all the tables
	clearTable(){
	  let index = 0;
	  let table = document.getElementById(index);
	  // loop over each table element and remove all child nodes
	  while(table && index < 10){
		while(table.hasChildNodes()){
		  table.removeChild(table.lastChild);
		}
		index++;
		table = document.getElementById(index);
	  }
	}
  
	// a method to load all spells into the UI
	loadClass(){
	  // an array of all spells organized by spell level
	  let allSpells = [this.Phb0, this.Phb1, this.Phb2, this.Phb3, this.Phb4, this.Phb5, this.Phb6, this.Phb7, this.Phb8, this.Phb9];
	  // call the displaySpells method to display all spells in the UI
	  this.displaySpells(allSpells);
	};
  
	// a method to display all the spells in the UI
	displaySpells(allSpells) {
	  // a set to keep track of spells that have already been displayed
	  let seenSpells = new Set();
	  // loop over each spell level and add all spells to the corresponding UI element
	  allSpells.forEach((level, levelIndex) => {
		if (!level) {
			return;
		}
		let table = document.getElementById(levelIndex);
		level.forEach((spell) => {
		  if (!seenSpells.has(spell)) {
			seenSpells.add(spell);
			let li = document.createElement("li");
			li.innerHTML = spell;
			// check if the spell already exists in the <ul> element
			if (![...table.getElementsByTagName("li")].some(el => el.innerHTML === spell)) {
			  table.appendChild(li);
			}
		  }
		});
		this.sortListAlphabetically(levelIndex);
	  });
	}
  
	// a method to sort the spell list alphabetically
	sortListAlphabetically(ulId){
	  const ul = document.getElementById(ulId);
	  const lis = ul.getElementsByTagName("li");
	  // sort the list items alphabetically by their text content
	  const sortedLis = Array.from(lis).sort((a, b) => a.textContent.localeCompare(b.textContent));
	  // append the sorted list items back to the list
	  sortedLis.forEach(li => ul.appendChild(li));
	}
  }

/*	Phb0 = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
	Phb1 = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
	Phb2 = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
	Phb3 = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
	Phb4 = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
	Phb5 = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
	Phb6 = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
	Phb7 = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
	Phb8 = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
	Phb9 = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]; */

// Containers all of their class spell
class bard extends spellUtils{ 
	Phb0 = ["Amicizia", "Beffa Crudele", "Colpo Accurato", "Illusione Minore", "Interdizione alle Lame", "Luce", "Luci Danzanti", "Mano Magica", "Messaggio", "Prestidigitazione", "Riparare"];
	Phb1 = ["Amicizia con gli Animali", "Anatema", "Caduta Morbida", "Camuffare Se Stesso", "Charme su Persone", "Comprensione dei Linguaggi", "Cura Ferite", "Eroismo", "Identificare", "Immagine Silenziosa", "Individuazione del Magico", "Luminescenza", "Onda Tonante", "Parlare con gli Animali", "Parola Guaritrice", "Passo Veloce", "Risata Incontenibile di Tasha", "Scritto Illusorio", "Servitore Inosservato", "Sonno", "Sussurri Dissonanti"];
	Phb2 = ["Allucinazione di Forza", "Animale Messaggero", "Blocca Persone", "Bocca Magica", "Calmare Emozioni", "Caratteristica Potenziata", "Cecità Sordità", "Corona di Follia", "Estasiare", "Frantumare", "Individuazione dei Pensieri", "Invisibilità", "Localizza Animali o Vegetali", "Localizza Oggetto", "Nube di Pugnali", "Riscaldare il Metallo", "Ristorare Inferiore", "Scassinare", "Silenzio", "Suggestione", "Vedere Invisibilità", "Zona di Verità"];
	Phb3 = ["Anti-Individuazione", "Capanna di Leomund", "Chiaroveggenza", "Crescita Vegetale", "Dissolvi Magie", "Glifo di Interdizione", "Immagine Maggiore", "Inviare", "Linguaggi", "Morte Apparente", "Nube Maleodorante", "Parlare con i Morti", "Parlare con i Vegetali", "Paura", "Scagliare Maledizione", "Trama Ipnotica"];
	Phb4 = ["Compulsione", "Confusione", "Invisibilità Superiore", "Libertà di Movimento", "Localizza Creatura", "Metamorfosi", "Porta Dimensionate", "Terreno Illusorio"];
	Phb5 = ["Animare Oggetti", "Blocca Mostri", "Cerchio di Teletrasporto", "Conoscenza delle Leggende", "Costrizione", "Cura Ferite di Massa", "Dominare Persone", "Fuorviare", "Legame Planare", "Modificare Memoria", "Rianimare Morti", "Ristorare Superiore", "Risveglio", "Scrutare", "Sembrare", "Sogno"];
	Phb6 = ["Danza Irresistibile di Otto", "Illusione Programmata", "Scopri il Percorso", "Sguardo Penetrante", "Suggestione di Massa", "Vigilanza e Interdizione", "Visione del Vero"];
	Phb7 = ["Forma Eterea", "Gabbia di Forza", "Immagine Proiettata", "Miraggio Arcano", "Reggia Meravigliosa di Mordenkainen", "Resurrezione", "Rigenerazione", "Simbolo", "Spada di Mordenkainen", "Teletrasporto"];
	Phb8 = ["Dominare Mostri", "Loquacità", "Parola del Potere Stordire", "Regressione Mentale", "Vuoto Mentale"];
	Phb9 = ["Metamorfosi Pura", "Parola del Potere Guarire", "Parola del Potere Uccidere", "Previsione"];
}

class cleric extends spellUtils{
	Phb0 = ["Fiamma Sacra", "Guida", "Luce", "Resistenza", "Riparare", "Salvare i Morenti", "Taumaturgia"];
	Phb1 = ["Anatema", "Benedizione", "Comando", "Creare o Distruggere Acqua", "Cura Ferite", "Dardo Tracciante", "Individuazione del Bene e del Male", "Individuazione del Magico", "Individuazione delle Malattie e dei Veleni", "Infliggi Ferite", "Parola Guaritrice", "Protezione dal Bene e dal Male", "Purificare Cibo e Bevande", "Santuario", "Scudo della Fede"];
	Phb2 = ["Aiuto", "Arma Spirituale", "Blocca Persone", "Calmare Emozioni", "Caratteristica Potenziata", "Cecità Sordità", "Fiamma Perenne", "Localizza Oggetto", "Preghiera di Guarigione", "Presagio", "Protezione dai Veleni", "Riposo Inviolato", "Ristorare Inferiore", "Scopri Trappole", "Silenzio", "Vincolo di lnterdizione", "Zona di Verità"];
	Phb3 = ["Animare Morti", "Camminare sull'Acqua", "Cerchio Magico", "Chiaroveggenza", "Creare Cibo e Acqua", "Dissolvi Magie", "Faro di Speranza", "Fondersi nella Pietra", "Glifo di Interdizione", "Guardiani Spirituali", "Inviare", "Linguaggi", "Luce Diurna", "Morte Apparente", "Parlare con i Morti", "Parola Guaritrice di Massa", "Protezione dall'Energia", "Rimuovi Maledizione", "Rinascita", "Scagliare Maledizione"];
	Phb4 = ["Controllare Acqua", "Divinazione", "Esilio", "Guardiano della Fede", "Interdizione alla Morte", "Libertà di Movimento", "Localizza Creatura", "Scolpire Pietra"];
	Phb5 = ["Colpo Infuocato", "Comunione", "Conoscenza delle Leggende", "Contagio", "Costrizione", "Cura Ferite di Massa", "Dissolvi il Bene e il Male", "Legame Planare", "Piaga degli Insetti", "Rianimare Morti", "Ristorare Superiore", "Santificare", "Scrutare"];
	Phb6 = ["Alleato Planare", "Banchetto degli Eroi", "Barriera di Lame", "Creare Non Morti", "Ferire", "Guarigione", "Parola del Ritiro", "Proibizione", "Scopri il Percorso", "Visione del Vero"];
	Phb7 = ["Evoca Celestiale", "Forma Eterea", "Parola Divina", "Resurrezione", "Rigenerazìone", "Simbolo", "Spostamento Planare", "Tempesta di Fuoco"];
	Phb8 = ["Aura Sacra", "Campo Anti-Magia", "Controllare Tempo Atmosferico", "Terremoto"];
	Phb9 = ["Guarigione di Massa", "Portale", "Proiezione Astrale", "Resurrezione Pura"];
}

class druid extends spellUtils{
	Phb0 = ["Artificio Druidico", "Frusta di Spine", "Guida", "Produrre Fiamma", "Randello Incantato", "Resistenza", "Riparare", "Spruzzo Velenoso"];
	Phb1 = ["Amicizia con gli Animali", "Bacche Benefiche", "Charme su Persone", "Creare o Distruggere Acqua", "Cura Ferite", "Individuazione del Magico", "Individuazione delle Malattie e dei Veleni", "Intralciare", "Luminescenza", "Nube di Nebbia", "Onda Tonante", "Parlare con gli Animali", "Parola Guaritrice", "Passo Veloce", "Purificare Cibo e Bevande", "Saltare"];
	Phb2 = ["Animale Messaggero", "Bagliore Lunare", "Blocca Persone", "Caratteristica Potenziata", "Crescita dì Spine", "Folata di Vento", "Lama Infuocata", "Localizza Animali o Vegetali", "Localizza Oggetto", "Passare Senza Tracce", "Pelle Coriacea", "Percezione delle Bestie", "Protezione dai Veleni", "Riscaldare il Metallo", "Ristorare Inferiore", "Scopri Trappole", "Scurovisione", "Sfera Infuocata"];
	Phb3 = ["Camminare sull'Acqua", "Crescita Vegetale", "Dissolvi Magie", "Evoca Animali", "Fondersi nella Pietra", "Invocare il Fulmine", "Luce Diurna", "Morte Apparente", "Muro di Vento", "Parlare con i Vegetali", "Parlare con i Vegetali", "Protezione dall'Energia", "Respirare sott'Acqua", "Tempesta dì Nevischio"];
	Phb4 = ["Confusione", "Controllare Acqua", "Dominare Bestie", "Evoca Creature Boschive", "Evoca Elementali Minori", "Inaridire", "Insetto Gigante", "Libertà di Movimento", "Localizza Creatura", "Metamorfosi", "Muro di Fuoco", "Pelle di Pietra", "Rampicante Afferrante", "Scolpire Pietra", "Tempesta di Ghiaccio", "Terreno Illusorio"];
	Phb5 = ["Comunione con la Natura", "Contagio", "Costrizione", "Cura Ferite di Massa", "Evoca Elementale", "Guscio Anti-Vìta", "Legame Planare", "Muro di Pietra", "Piaga degli Insetti", "Reincarnazione", "Ristorare Superiore", "Risveglio", "Scrutare", "Traslazione Arborea"];
	Phb6 = ["Bagliore Solare", "Banchetto degli Eroi", "Camminare nel Vento", "Evoca Folletto", "Guarigione", "Muovere il Terreno", "Muro di Spine", "Scopri il Percorso", "Trasporto Vegetale"];
	Phb7 = ["Inversione della Gravità", "Miraggio Arcano", "Rigenerazione", "Spostamento Planare", "Tempesta di Fuoco"];
	Phb8 = ["Antipatia Simpatia", "Controllare Tempo Atmosferico", "Esplosione Solare", "Forme Animali", "Regressione Mentale", "Terremoto", "Tsunami"];
	Phb9 = ["Previsione", "Resurrezione Pura", "Tempesta di Vendetta", "Trasformazione"];
}

class paladin extends spellUtils{
	Phb1 = ["Benedizione", "Comando", "Cura Ferite", "Duello Obbligato", "Eroismo", "Favore Divino", "Individuazione del Bene e del Male", "Individuazione del Magico", "Individuazione delle Malattie e dei Veleni", "Protezione dal Bene e dal Male", "Punizione Collerica", "Punizione Incandescente", "Punizione Tonante", "Purificare Cibo e Bevande", "Scudo della Fede"];
	Phb2 = ["Aiuto", "Arma Magica", "Localizza Oggetto", "Protezione dai Veleni", "Punizione Marchiante", "Ristorare Inferiore", "Trova Cavalcatura", "Zona di Verità"];
	Phb3 = ["Arma Elementale", "Aura di Vitalità", "Cerchio Magico", "Creare Cibo e Acqua", "Dissolvi Magie", "Luce Diurna", "Manto del Crociato", "Punlzione Accecante", "Rimuovi Maledizione", "Rinascita"];
	Phb4 = ["Aura di Purezza", "Aura di Vita", "Esilio", "Interdizione alla Morte", "Localizza Creatura", "Punizione Demoralizzante"];
	Phb5 = ["Cerchio di Potere", "Costrizione", "Dissolvi il Bene e il Male", "Onda Distruttiva", "Punizione Esiliante", "Rianimare Morti"];
}

class ranger extends spellUtils{
	Phb1 = ["Allarme", "Amicizia con gli Animali", "Bacche Benefiche", "Colpo Intrappolante", "Cura Ferite", "Individuazione del Magico", "Individuazione delle Malattie e dei Veleni", "Marchio del Cacciatore", "Nube di Nebbia", "Parlare con gli Animali", "Passo Veloce", "Raffica di Spine", "Saltare"];
	Phb2 = ["Animale Messaggero", "Cordone di Frecce", "Crescita di Spine", "Localizza Animali o Vegetali", "Localizza Oggetto", "Passare Senza Tracce", "Pelle Coriacea", "Percezione delle Bestie", "Protezione dai Veleni", "Ristorare Inferiore", "Scopri Trappole", "Scurovisione", "Silenzio"];
	Phb3 = ["Anti-Individuazione", "Camminare sull'Acqua", "Crescita Vegetale", "Evoca Animali", "Evoca Raffica", "Freccia Folgorante", "Luce Diurna", "Muro di Vento", "Parlare con i Vegetali", "Protezìone dall'Energia", "Respirare sott'Acqua"];
	Phb4 = ["Evoca Creature Boschive", "Libertà di Movimento", "Localizza Creatura", "Pelle di Pietra", "Rampicante Afferrante"];
	Phb5 = ["Comunione con la Natura", "Evoca Pioggia di Armi", "Faretra Rapida", "Traslazione Arborea"];
}

class wizard extends spellUtils{
	Phb0 = ["Amicizia", "Colpo Accurato", "Dardo di Fuoco", "Fiotto Acido", "Illusione Minore", "Interdizione alle Lame", "Luce", "Luci Danzanti", "Mano Magica", "Messaggio", "Prestidigitazione", "Raggio di Gelo", "Riparare", "Spruzzo Velenoso", "Stretta Folgorante", "Tocco Gelido"];
	Phb1 = ["Armatura Magica", "Caduta Morbida", "Camuffare Se Stesso", "Charme su Persone", "Comprensione dei Linguaggi", "Dardo Incantato", "Dardo Stregato", "Globo Cromatico", "Immagine Silenziosa", "Individuazione del Magico", "Mani Brucianti", "Nube di Nebbia", "Onda Tonante", "Raggio di Infermità", "Ritirata Rapida", "Saltare", "Scudo", "Sonno", "Spruzzo Colorato", "Vita Falsata"];
	Phb2 = ["Allucinazione di Forza", "Alterare Se Stesso", "Blocca Persone", "Caratteristica Potenziata", "Cecità Sordità", "Corona di Follia", "Folata di Vento", "Frantumare", "Immagine Speculare", "Individuazione dei Pensieri", "Ingrandire Ridurre", "lnvisibilità", "levitazione", "Movimenti del Ragno", "Nube dl Pugnali", "Oscurità", "Passo Velato", "Raggio Rovente", "Ragnatela", "Scassinare", "Scurovisione", "Sfocatura", "Suggestione", "Vedere Invisibilità"];
	Phb3 = ["Camminare sull'Acqua", "chiaroveggenza", "Controincantesimo", "Dissolvi Magie", "Forma Gassosa", "Fulmine", "Immagine Maggiore", "Intermittenza", "Lentezza", "Linguaggi", "Luce Diurna", "Nube Maleodorante", "Palla di Fuoco", "Paura", "Protezione dall'Energia", "Respirare sott'Acqua", "Tempesta di Nevischio", "Trama Ipnotica", "Velocità", "Volare"];
	Phb4 = ["Confusione", "Dominare Bestie", "Esilio", "Inaridire", "Invisibilità Superiore", "Metamorfosi", "Muro di Fuoco", "Pelle di Pietra", "Porta Dimensionale", "Tempesta di Ghiaccio"];
	Phb5 = ["Animare Oggetti", "Blocca Mostri", "Cerchio di Teletrasporto", "Cono di Freddo", "Creazione", "Dominare Persone", "Muro di Pietra", "Nube Mortale", "Piaga degli Insetti", "Sembrare", "Telecinesi"];
	Phb6 = ["Bagliore Solare", "Catena di Fulmini", "Cerchio di Morte", "Disintegrazione", "Globo di Invulnerabilità", "Muovere il Terreno", "Portale Arcano", "Sguardo Penetrante", "Suggestione di Massa", "Visione del Vero"];
	Phb7 = ["Dito della Morte", "Forma Eterea", "Inversione della Gravità", "Palla di Fuoco Ritardata", "Spostamento Planare", "Spruzzo Prismatico", "Teletrasporto", "Tempesta di Fuoco"];
	Phb8 = ["Dominare Mostri", "Esplosione Solare", "Nube Incendiaria", "Parola del Potere Stordire", "Terremoto"];
	Phb9 = ["Desiderio", "Fermare il Tempo", "Parola del Potere Uccidere", "Portale", "Sciame di Meteore"];
}

class warlock extends spellUtils{
	Phb0 = ["Amicizia", "Colpo Accurato", "Deflagrazione Occulta", "Illusione Minore", "Interdizione alle Lame", "Mano Magica", "Prestidigitazione", "Spruzzo Velenoso", "Tocco Gelido"];
	Phb1 = ["Armatura di Agathys", "Braccia di Hadar", "Charme su Persone", "Comprensione dei Linguaggi", "Dardo Stregato", "Intimorire Infernale", "Protezione dal Bene e dal Male", "Ritirata Rapida", "Scritto Illusorio", "Servitore Inosservato", "Sortilegio"];
	Phb2 = ["Blocca Persone", "Corona di Follia", "Estasiare", "Frantumare", "Immagine Speculare", "Invisibilità", "Movimenti del Ragno", "Nube di Pugnali", "Oscurità", "Passo Velato", "Raggio di Affaticamento", "Suggestione"];
	Phb3 = ["Forma Gassosa", "Immagine Maggiore", "Linguagg", "Paura", "Rimuovi Maledizione", "Tocco del Vampiro", "Trama Ipnotica", "Volare"];
	Phb4 = ["Esilio", "Inaridire", "Porta Dimensionale", "Terreno Illusorio"];
	Phb5 = ["Blocca Mostri", "Contattare Altri Piani", "Scrutare", "Sogno"];
	Phb6 = ["Carne in Pietra", "Cerchio di Morte", "Creare Non Morti", "Evoca Folletto", "Portale Arcano", "Sguardo Penetrante", "Suggestione di Massa", "Visione del Vero"];
	Phb7 = ["Dito della Morte", "Forma Eterea", "Gabbia di Forza", "Spostamento Planare"];
	Phb8 = ["Dominare Mostri", "Loquacità", "Parola del Potere Stordire", "Regressione Mentale", "Semipiano"];
	Phb9 = ["Imprigionare", "Metamorfosi Pura", "Parola del Potere Uccidere", "Previsione", "Proiezione Astrale"];
}

class mage extends spellUtils{
	Phb0 = ["Amicizia", "Colpo Accurato", "Dardo di Fuoco", "Fiotto Acido", "Illusione Minore", "Interdizione alle Lame", "Luce", "Luci Danzanti", "Mano Magica", "Messaggio", "Prestidigitazione", "Raggio di Gelo", "Riparare", "Spruzzo Velenoso", "Stretta Folgorante", "Tocco Gelido"];
	Phb1 = ["Allarme", "Armatura Magica", "Caduta Morbida", "Camuffare Se Stesso", "Charme su Persone", "Comprensione dei Linguaggi", "Dardo Incantato", "Dardo Stregato", "Disco Fluttuante di Tenser", "Globo Cromatico", "Identificare", "Immagine Silenziosa", "Individuazione del Magico", "Mani Brucianti", "Nube di Nebbia", "Onda Tonante", "Passo Veloce", "Protezione dal Bene e dal Male", "Raggio di Infermità", "Risata Incontenibile di Tasha", "Ritirata Rapida", "Saltare", "Scritto Illusorio", "Scudo", "Servitore Inosservato", "Sonno", "Spruzzo Colorato", "Trova Famiglio", "Unto", "Vita Falsata"];
	Phb2 = ["Allucinazione di Forza", "Alterare Se Stesso", "Arma Magica", "Aura Magica di Nystul", "Blocca Persone", "Bocca Magica", "Cecità Sordità", "Corona di Follia", "Fiamma Perenne", "Folata di Vento", "Frantumare", "Freccia Acida di Melf", "Immagine Speculare", "Individuazione dei Pensieri", "Ingrandire Ridurre", "Invisibilità", "Levitazione", "Localizza Oggetto", "Movimenti del Ragno", "Nube di Pugnali", "Oscurità", "Passo Velato", "Raggio di Affaticamento", "Raggio Rovente", "Ragnatela", "Riposo Inviolato", "Scassinare", "Scurovisione", "Serratura Arcana", "Sfera Infuocata", "Sfocatura", "Suggestione", "Trucco della Corda", "Vedere Invisibilità"];
	Phb3 = ["Animare Morti", "Anti-Individuazione", "Capanna di Leomund", "Cerchio Magico", "Chiaroveggenza", "Controincantesimo", "Destriero Fantomatico", "Dissolvi Magie", "Forma Gassosa", "Fulmine", "Glifo di Interdizione", "Immagine Maggiore", "Intermittenza", "Inviare", "lentezza", "Linguaggi", "Morte Apparente", "Nube Maleodorante", "Palla di Fuoco", "Paura", "Protezione dall'Energia", "Respirare sott'Acqua", "Rimuovi Maledizione", "Scagliare Maledizione", "Tempesta di Nevischio", "Tocco del Vampiro", "Trama Ipnotica", "Velocità", "Volare"];
	Phb4 = ["Allucinazione Mortale", "Confusione", "Controllare Acqua", "Esilio", "Evoca Elementali Minori", "Fabbricare", "Inaridire", "Invisibilità Superiore", "Localizza Creatura", "Metamorfosi", "Muro di Fuoco", "Occhio Arcano", "Pelle di Pietra", "Porta Dimensionale", "Santuario Privato di Mordenkainen", "Scolpire Pietra", "Scrigno Segreto di Leomund", "Scudo di Fuoco", "Segugio Fedele di Mordenkainen", "Sfera Elastica di Otiluke", "Tempesta di Ghiaccio", "Tentacoli Neri di Evard", "Terreno Illusorio"];
	Phb5 = ["Animare Oggetti", "Blocca Mostri", "Cerchio di Teletrasporto", "Cono di Freddo", "Conoscenza delle Leggende", "Contattare Altri Piani", "Costrizione", "Creazione", "Dominare Persone", "Evoca Elementate", "Fuorviare", "Legame Planare", "legame Telepatico di Rary", "Mano dì Bigby", "Modificare Memoria", "Muro di Forza", "Muro di Pietra", "Nube Mortale", "Passapareti", "Scrutare", "Sembrare", "Sogno", "Telecinesi"];
	Phb6 = ["Bagliore Solare", "Carne in Pietra", "Catena di Fulmini", "Cerchio di Morte", "Contingenza", "Creare Non Morti", "Danza Irresistibile di Otto", "Disintegrazione", "Evocazioni Istantanee di Drawmij", "Giara Magica", "Globo di Invulnerabilità", "Illusione Programmata", "Muovere il Terreno", "Muro di Ghiaccio", "Portale Arcano", "Sfera Congelante dì Otiluke", "Sguardo Penetrante", "Suggesttone di Massa", "Vigilanza e Interdizione", "Visione del Vero"];
	Phb7 = ["Celare", "Dito delta Morte", "Forma Eterea", "Gabbia di Forza", "Immagine Proiettata", "Inversione della Gravità", "Miraggio Arcano", "Palla di Fuoco Ritardata", "Reggia Meravigliosa di Mordenkainen", "Simbolo", "Simulacro", "Spada di Mordenkainen", "Spostamento Planare", "Spruzzo Prismatico", "Teletrasporto"];
	Phb8 = ["Antipatia Simpatia", "Campo Anti·Magia", "Clone", "Controllare Tempo Atmosferico", "Dominare Mostri", "Esplosione Solare", "Labirinto", "Nube Incendiaria", "Parola del Potere Stordire", "Regressione Mentale", "Semipiano", "Telepatia", "Vuoto Mentale"];
	Phb9 = ["Desiderio", "Fatale", "Fermare il Tempo", "Imprigionare", "Metamorfosi Pura", "Muro Prismatico", "Parola del Potere Uccidere", "Portale", "Previsione", "Proiezione Astrale", "Sciame di Meteore", "Trasformazione"];
}