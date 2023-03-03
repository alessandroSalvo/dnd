function openSpell(e){	// Redirects to the spell page
	
	if(e.target.tagName == "LI"){ // Checks if the target's tag is a li
	
		let redirect = e.target.innerHTML; // Gets the target innerHTML

		redirect = redirect.replace(/ /g, "_"); // Replaces any blank spaces with an underscore

		redirect += ".html"; // Adds the .html extension

		document.getElementById("spellWindow").src = "Spells/" + redirect; // Finally we have the destination
	}
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

function addLineBreaks(text) { // Chat GPT made this
	// Replace all occurrences of '.' with '.\n' to add a line break after each period
	const textWithBreaks = text.replace(/\./g, '.<br><br>');
  
	// Return the updated text
	return textWithBreaks;
}

function findSubstringIndex(text, substring) { // Chat GPT made this
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