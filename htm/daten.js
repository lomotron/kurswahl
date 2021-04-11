var NAME="", VORNAME="", KLASSE="",GEBURT="";
var RELIGION="Ethik";       // In Klasse 10 besuchte Religion/Ethik als Name
//var IMP="nein";             // In Klasse 10 IMP oder Arbeitsgemeinschaft Informatik ja/nein
var SPORTBEFREIT="nein";
var FREMDSPRACHE=[];        //Fremdsprachen bis spätestens Kl. 8 als index
var WAHLSPRACHE=[];         //Fremdsprachen bis ab 10 oder AG als index
var DOPPELT=[];             //doppelt zählende Leistungsfächer als index
var L1=-1,L2=-1,L3=-1;      //Leistungsfächer als index von FAECHER
var M1=-1,M2=-1;            //mündliche Prüfungsfächer als index von FAECHER
var NW=-1,FS=-1,NWFS=-1;    //Naturwissenschaft Fremdsprache NW oder Fs
var BkMu=-1;                //Bk oder Musik
var S=-1;                   //Sport oder Profilfach
var WAHL=[];                //Daten für den Wahlbogen
var EXTRA=[]                //Fächer, die nach der Pflichtwahl gewählt wurden als index
var VERSION="23.5.2019";
var MAXWOSTD=36;            //Warnung bei mehr Wochenstunden
var MAXRESTKURSE=6;         //Warnung bei mehr zusätzlichen Kursen
var kkstbili=0;             //Sonderfall KKSt Italienisch bilingual
