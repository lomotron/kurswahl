var LASTPOS=0,POS=0,FILES=[];

function addfile(namen) {
	var i=FILES.length++;
	FILES[i]=namen;
}

//Reihenfolge der Seiten 
addfile("start.php"); //1
addfile("daten.htm"); //2
addfile("laufbahn1.htm");//3IMP raus
addfile("laufbahn2.htm");//4..haben Sie bis.. und nur en, fr, es, la
//addfile("laufbahn3.htm"); //5 raus
addfile("Leistung12.htm"); //6 bleibt
addfile("Leistung3.htm"); //7 raus: Ethik, Wirtschaft. Was fehlt: LATEIN, FRANZÖSISCH, SPANISCH
addfile("Muendlich1.htm");//8 bleibt
addfile("Muendlich2.htm");//9 bleibt
addfile("Pfaecher.htm");//10 bleibt
addfile("doppelt.htm");//11 bleibt
addfile("BesLL.htm");//12 bili/normal Ersten absatz streichen, 2ten anpassen
addfile("Naturw.htm");//13 bleibt
addfile("Fremdsp.htm");//14 bleibt
addfile("NatFs.htm");//15 bleibt
addfile("BkMu.htm");// bleibt
addfile("Sport.htm");// bleibt
addfile("Pflichtwahl.htm");// raus: Musik, Kunst, Vertiefung Mathe, Vertiefung Sprache, Philosophie, Literatur UND Theater, Philosophie, Latein, Alle Seminarkurse raus - dafür rein: Seminarkurs (bili), Seminarkurs (normal) 
addfile("Wahlbogen.htm");


function pos_ok() {
	var h=window.parent.inhalt.location.href,l=FILES[POS],r;
	r=(h.indexOf(l)>=0);
	return r;
}

function weiter() { 
    if(!window.parent.inhalt.weiter()) return;
	if(pos_ok()) {
			LASTPOS=POS;
			POS++;
			if(POS>=FILES.length) POS=FILES.length-1;
			}
	else alert("Nicht die Browsertasten benützen !");
	seiteladen();
}

function zurueck() {
    if(!window.parent.inhalt.zurueck()) return;
	if(pos_ok()) {
		LASTPOS=POS;
		POS--;
		if(POS<0) { POS=0; return;} 
		}
	else alert("Nicht die Browsertasten benützen !");
	seiteladen();
}


function seiteladen() {
	window.parent.inhalt.location=FILES[POS];
}


