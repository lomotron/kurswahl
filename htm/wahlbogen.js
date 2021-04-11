//Abkürzungen
var LF="Leistungsfach";
var LF2="Leistungsfach doppelt";
var MF="mündl. Prüfungsfach";
var SS="statt Sport";

function bogenzeile(fname,merkmal,s1,s2,s3,s4,h1,h2,h3,h4,apflicht,bpflicht,kuer) {
    this.fname=fname;
    this.merkmal=merkmal;
	this.s1=s1;
	this.s2=s2;
	this.s3=s3;
	this.s4=s4;
    this.h1=h1;
    this.h2=h2
    this.h3=h3;
    this.h4=h4;
	this.apflicht=apflicht;   //Abrechnungspflicht
    this.bpflicht=bpflicht;   //Besuchspflicht
    this.kuer=kuer;
	return this;
}


function addzeile(fname,merkmal,s1,s2,s3,s4,h1,h2,h3,h4,apflicht,bpflicht,kuer) {
    var i=WAHL.length++;
	WAHL[i]=new bogenzeile(fname,merkmal,s1,s2,s3,s4,h1,h2,h3,h4,apflicht,bpflicht,kuer);
}


function add(fname,merkmal,apflicht,bpflicht,kuer) {
    var i,s1=0;s2=0;s3=0;s4=0;
    if(merkmal==LF) {
        s1=5;s2=5;s3=5;s4=5;
        }
    else {
        for(i=0;i<FAECHER.length;i++) if(FAECHER[i].fname==fname) {
            s1=FAECHER[i].s1; s2=FAECHER[i].s2; s3=FAECHER[i].s3; s4=FAECHER[i].s4;
            }
        }
    addzeile(fname,merkmal,s1,s2,s3,s4,s1,s2,s3,s4,apflicht,bpflicht,kuer);
}

function addextra(index) {    //waehlbare Fächer, aber noch nicht gewaehlt
    var f=FAECHER[index];
    addzeile(f.fname,"",0,0,0,0,f.s1,f.s2,f.s3,f.s4,0,0,0);
}


function getindex(fname) {
    for(i=0;i<FAECHER.length;i++) if(FAECHER[i].fname==fname) return i;
    return -1;
}

function wahlbogenerstellen() {
    var anznw=0,fs,anzfs=0,z,i,zfn,zfn2;
    WAHL=[];
    EXTRA=[];
   //Deutsch
    zfn="Deutsch";
    if((FAECHER[L1].fname==zfn) || (FAECHER[L2].fname==zfn) || (FAECHER[L3].fname==zfn)) {  
            add(zfn,LF,4,4,0);
            } 
    else if((FAECHER[M1].fname==zfn) || (FAECHER[M2].fname==zfn)) {  
            add(zfn,MF,4,4,0);
            } 
    else alert("**** Kurswahlfehler: Deutsch nicht belegt ******"); 
    

   //Mathematik
    zfn="Mathematik";
    if((FAECHER[L1].fname==zfn) || (FAECHER[L2].fname==zfn) || (FAECHER[L3].fname==zfn)) {  
            add(zfn,LF,4,4,0);
            } 
    else if((FAECHER[M1].fname==zfn) || (FAECHER[M2].fname==zfn)) {  
            add(zfn,MF,4,4,0);
            } 
    else alert("**** Kurswahlfehler: Mathematik nicht belegt ******");

    //Fremdsprachen
    for(i=0;i<FREMDSPRACHE.length;i++) {
        
            // KKST bili Sonderfall -------------------------------------------------
            if(kkstbili==1) {
                if(FAECHER[FREMDSPRACHE[i]].fname=="Italienisch") continue;
                }
            else if(FAECHER[FREMDSPRACHE[i]].fname=="Italienisch bilingual") continue;            
            //-----------------------------------------------------------------------
        
            if((L1==FREMDSPRACHE[i]) || (L2==FREMDSPRACHE[i]) || (L3==FREMDSPRACHE[i]))  { add(FAECHER[FREMDSPRACHE[i]].fname,LF,4,4,0); anzfs++;}
            else if((M1==FREMDSPRACHE[i]) || (M2==FREMDSPRACHE[i]))     { add(FAECHER[FREMDSPRACHE[i]].fname,MF,4,4,0); anzfs++;}
            else if((FS==FREMDSPRACHE[i]) || (NWFS==FREMDSPRACHE[i]))   { add(FAECHER[FREMDSPRACHE[i]].fname,"",4,4,0); anzfs++;}
            else if(S==FREMDSPRACHE[i]) add(FAECHER[FREMDSPRACHE[i]].fname,SS,0,4,4);
            else addextra(FREMDSPRACHE[i]);
            }

            

    //Naturwissenschaften
    for(i=0;i<FAECHER.length;i++) {
            if(FAECHER[i].typ!="Naturwissenschaft") continue;
            if((L1==i) || (L2==i) || (L3==i))  { add(FAECHER[i].fname,LF,4,4,0); anznw++;}
            else if((M1==i) || (M2==i))        { add(FAECHER[i].fname,MF,4,4,0); anznw++;}
            else if((NW==i) || (NWFS==i))      { add(FAECHER[i].fname,"",4,4,0); anznw++;}
            else if(S==i) add(FAECHER[i].fname,SS,0,4,4);
            else  addextra(i);
    }

    if((anzfs<2) && (anznw<2)) alert("**** Kurswahlfehler: Keine 2 Naturwissenschaften oder Fremdsprachen belegt ******");

    //Religion
    for(i=0;i<FAECHER.length;i++) {
            if(FAECHER[i].fname!=RELIGION) continue;
            if((L1==i) || (L2==i) || (L3==i))   add(FAECHER[i].fname,LF,4,4,0);
            else if((M1==i) || (M2==i))         add(FAECHER[i].fname,MF,4,4,0);
            else add(RELIGION,"",0,4,4);
    }

  
    //Sonderfall Wirtschaft
    zfn="Wirtschaft";
    if(FAECHER[L3].fname==zfn) {
            add(zfn,LF,4,4,0);
            zfn="Geschichte";
            if((FAECHER[M1].fname==zfn) || (FAECHER[M2].fname==zfn)) z=MF; else z="";
            add(zfn,z,4,4,0);

            //Gemeinschaftskunde/Geographie
            zfn="Gemeinschaftskunde";
            zfn2="Geographie";
            if((FAECHER[M1].fname==zfn) || (FAECHER[M2].fname==zfn) 
                    || (FAECHER[M1].fname==zfn2)|| (FAECHER[M2].fname==zfn2)) addzeile("Geographie und Gemeinschaftskunde",MF,2,0,2,0,2,0,2,0,2,2,0);
            else {
                addzeile(zfn, "",2,0,0,0,2,0,0,0,1,1,0);
                addzeile(zfn2,"",0,0,2,0,0,0,2,0,1,1,0);
                }
           }
    //GW
    else {
            zfn="Geschichte";
            if(FAECHER[L3].fname==zfn) add(zfn,LF,4,4,0);
            else {
                if((FAECHER[M1].fname==zfn) || (FAECHER[M2].fname==zfn)) z=MF; else z="";
    //Sonderfall KKSt bili -------------------------
                if(kkstbili==1) addzeile("Geschichte (ital.)",z,3,3,3,3,3,3,3,3,4,4,0);
                else add(zfn,z,4,4,0);
    //----------------------------------------------             
                }
                
    
            //Gemeinschaftskunde/Geographie

            zfn="Gemeinschaftskunde";
            zfn2="Geographie";
            var geotext="Geographie und Gemeinschaftskunde";
            
     //Sonderfall KKSt bili -------------------------
            if(kkstbili) geotext="Geographie (ital.) und Gemeinschaftskunde"; 
     //----------------------------------------------                
            
            if((FAECHER[M1].fname==zfn) || (FAECHER[M2].fname==zfn) 
                    || (FAECHER[M1].fname==zfn2)|| (FAECHER[M2].fname==zfn2)) addzeile(geotext,MF,2,2,2,2,2,2,2,2,4,4,0);
            else {
                    if(FAECHER[L3].fname==zfn)  add(zfn,LF,4,4,0);
                    else add(zfn,"",2,2,0);     

                    if(FAECHER[L3].fname==zfn2)  add(zfn2,LF,4,4,0);
                    else {
     //Sonderfall KKSt bili -------------------------
                        if(kkstbili) addzeile(zfn2+" (ital.)","",0,2,2,0,0,2,2,0,2,2,0);  
                        else add(zfn2,"",2,2,0); 
     //----------------------------------------------
                        }
                }
        }

    if(S<0)    S=0;     //Kein Fehler im Index. Sport wird Deutsch zugewiesen, was nichts macht.
    if(BkMu<0) BkMu=0;  //Kein Fehler im Index. Sport wird Deutsch zugewiesen, was nichts macht.

    //BK 
    zfn="Bildende Kunst";
    if(FAECHER[L3].fname==zfn) add(zfn,LF,4,4,0);
    else if((FAECHER[M1].fname==zfn)||(FAECHER[M2].fname==zfn)) add(zfn,MF,4,4,0);
    else if(FAECHER[S].fname==zfn) add(zfn,SS,0,4,4);
    else if(FAECHER[BkMu].fname==zfn) add(zfn,"",2,4,2);
    else addextra(getindex(zfn));

    //Musik
    zfn="Musik";
    if(FAECHER[L3].fname==zfn) add(zfn,LF,4,4,0);
    else if((FAECHER[M1].fname==zfn)||(FAECHER[M2].fname==zfn)) add(zfn,MF,4,4,0);
    else if(FAECHER[S].fname==zfn) add(zfn,SS,0,4,4);
    else if(FAECHER[BkMu].fname==zfn) add(zfn,"",2,4,2);
    else addextra(getindex(zfn));

    //Sport
    zfn="Sport";
    if(SPORTBEFREIT=="ja") addextra(getindex(zfn));
    else {
         if(FAECHER[L3].fname==zfn) add(zfn,LF,4,4,0);
         else if((FAECHER[M1].fname==zfn)||(FAECHER[M2].fname==zfn)) add(zfn,MF,4,4,0);
         else add(zfn,"",0,4,4);
    }

    //Informatik
    for(i=0;i<FAECHER.length;i++) {
        if(FAECHER[i].typ!="Informatik") continue;
        if((M1==i) || (M2 == i)) add(FAECHER[i].fname,MF,4,4,0); 
        else addextra(i);
    }

    //Nicht gewählte Wahlfächer
    for(i=0;i<FAECHER.length;i++) {
        if(FAECHER[i].typ!="Wahl") continue;
        if((M1==i) || (M2 == i)) add(FAECHER[i].fname,MF,4,4,0); 
        else addextra(i);
    }

    //Nicht gewählte Wahlsprachen
    for(i=0;i<WAHLSPRACHE.length;i++) {
        if((M1==WAHLSPRACHE[i]) || (M2 == WAHLSPRACHE[i])) add(FAECHER[WAHLSPRACHE[i]].fname,MF,4,4,0); 
        else addextra(WAHLSPRACHE[i]); 
    }

    //Seminarkurse als Leerzeilen
    for(i=0;i<FAECHER.length;i++) if((FAECHER[i].typ=="Seminar1") ||(FAECHER[i].typ=="Seminar2")) addextra(i); 
           
    //doppelte Wertung eintragen
    var dopp0=FAECHER[DOPPELT[0]].fname, dopp1=FAECHER[DOPPELT[1]].fname;
    for(i=0;i<WAHL.length;i++) {
        if((WAHL[i].fname==dopp0) ||(WAHL[i].fname==dopp1)) WAHL[i].merkmal=LF2;
    }
}

function wahldaten() {
    var i,sum1=0,sum2=0,sum3=0,sum4=0,sump=0,sumb=0,sumk=0;
    for(i=0;i<WAHL.length;i++) {
        sum1+=WAHL[i].s1; sum2+=WAHL[i].s2; sum3+=WAHL[i].s3; sum4+=WAHL[i].s4;
        sump+=WAHL[i].apflicht; sumb+=WAHL[i].bpflicht; sumk+=WAHL[i].kuer;
        }
    return [sum1,sum2,sum3,sum4,sump,sumb,sumk];
}

function extrawahl(index,gewaehlt) {
    var w=WAHL[index];
    w.s1=0; w.s2=0; w.s3=0; w.s4=0; w.apflicht=0; w.bpflicht=0; w.kuer=0;
    if(gewaehlt) {
        w.s1=w.h1; w.s2=w.h2; w.s3=w.h3; w.s4=w.h4;
        if(w.s1>0) w.kuer++;  if(w.s2>0) w.kuer++; if(w.s3>0) w.kuer++; if(w.s4>0) w.kuer++;
        }
}

