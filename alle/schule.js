var LOGO="../alle/logo.png";
var G89="10";  //Letzte Klasse vor Kursstufe G8:  10,  G9:  11
var SPORTBEREICHE="Leichtathletik - Schwimmen - Gymnastik/Tanz";

var FAECHER=[];

function addfach(fname,s1,s2,s3,s4,typ) {
	var i=FAECHER.length++;
	FAECHER[i]=new fach(fname,s1,s2,s3,s4,typ);
}

function fach(fname,s1,s2,s3,s4,typ) {
	this.fname=fname;
	this.s1=s1;
	this.s2=s2;
	this.s3=s3;
	this.s4=s4;
	this.typ=typ;

	return this;
}

addfach("Deutsch",3,3,3,3,"Deutsch");   
addfach("Mathematik",3,3,3,3,"Mathematik"); 

addfach("Englisch",3,3,3,3,"Sprache");
addfach("Französisch",3,3,3,3,"Sprache");
addfach("Latein",3,3,3,3,"Sprache");
//addfach("Griechisch",3,3,3,3,"Sprache");
//addfach("Russisch",3,3,3,3,"Sprache");
addfach("Spanisch",3,3,3,3,"Sprache");
//addfach("Italienisch",3,3,3,3,"Sprache");
//addfach("Italienisch bilingual",5,5,5,5,"Sprache");
//addfach("Portugiesisch",3,3,3,3,"Sprache");

addfach("Bildende Kunst",2,2,2,2,"BkMu");
addfach("Musik",2,2,2,2,"BkMu");

addfach("Geschichte",2,2,2,2,"Gesellschaft");
addfach("Gemeinschaftskunde",2,0,0,2,"Gesellschaft");
addfach("Geographie",0,2,2,0,"Gesellschaft");
//addfach("Wirtschaft",5,5,5,5,"Wirtschaft");


addfach("Religion (ev)",2,2,2,2,"Religion");
addfach("Religion (rk)",2,2,2,2,"Religion");
addfach("Ethik",2,2,2,2,"Religion");
//addfach("Religion (jüd)",2,2,2,2,"Religion");

addfach("Physik",3,3,3,3,"Naturwissenschaft");
addfach("Chemie",3,3,3,3,"Naturwissenschaft");
addfach("Biologie",3,3,3,3,"Naturwissenschaft");

addfach("Sport",2,2,2,2,"Sport");

addfach("Seminarkurs (bili): NN",3,3,0,0,"Seminar1");
addfach("Seminarkurs (normal): NN",3,3,0,0,"Seminar2");

// addfach("Vertiefungskurs Mathematik",2,2,2,2,"Wahl");
// addfach("Vertiefungskurs Sprache",2,2,2,2,"Wahl");
addfach("Astronomie",2,2,0,0,"Wahl");
addfach("Darstellende Geometrie",2,2,0,0,"Wahl");
//addfach("Computer-Algebra-System",2,2,0,0,"Wahl");
//addfach("Geologie",2,2,0,0,"Wahl");
//addfach("Informatik",2,2,0,0,"Informatik");
addfach("Informatik in J1/J2",2,2,2,2,"Informatik");
    
// addfach("Literatur u. Theater",2,2,2,2,"Wahl");
addfach("Literatur",2,2,0,0,"Wahl");
// addfach("Philosophie",2,2,0,0,"Wahl");
addfach("Psychologie",0,0,2,2,"Wahl");

addfach("Latein (ab 10)",3,3,3,3,"Wahlsprache");
addfach("Italienisch (ab 10)",3,3,3,3,"Wahlsprache");
addfach("Spanisch (ab 10)",3,3,3,3,"Wahlsprache");
addfach("Portugiesisch (ab 10)",3,3,3,3,"Wahlsprache");
addfach("Chinesisch (ab 10)",3,3,3,3,"Wahlsprache");
addfach("Japanisch (ab 10)",3,3,3,3,"Wahlsprache");
addfach("Türkisch (ab 10)",3,3,3,3,"Wahlsprache");	

