class Person {
  constructor (givenName, givenNazwisko, givenWiek) {
    this.name = givenName
    this.nazwisko = givenNazwisko
    this.wiek = givenWiek
  }

  Show () {
    return `Witam ${this.name} ${this.nazwisko} mam ${this.wiek}!`
  }
}
const p = new Person('John', 'Blake', 11)
p.Show()
document.body.innerHTML = p.Show()
