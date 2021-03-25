class Personn {  
    imie:string;
    nazwisko:string;
    wiek:number;


    constructor(givenName:string, givenNazwisko:string, givenWiek:number) {
        this.imie = givenName;
        this.nazwisko = givenNazwisko;
        this.wiek = givenWiek;
    }

    Show():string {  
            return `Witam ${this.imie} i ${this.nazwisko} mam ${this.wiek}!`;
    }
}

let p = new Personn("John", "Blake", 11); 
p.Show();
document.body.innerHTML = p.Show();

