function fitText(div) {
	var sz = 1;
	while(div.scrollHeight <= div.offsetHeight) {
		sz++;
		div.style.fontSize = sz + "px";
	}
	div.style.fontSize = (sz-1) + "px";
}
