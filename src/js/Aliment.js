export default class Aliment {
    constructor(id, nom, qte, photo ) {
      this.id = id;
      this._nom = nom;
      this._qte = qte;
      this._photo = photo;

    }
  
    get nom() {
      return this._nom;
    }
  
    get qte() {
      return this._qte;
    }
    get photo() {
      return this._photo;
    }
  
  
    get pourAfficher() {
      return ` ${this._nom} : quantité ${this._qte}`;
    }
  
    add1l() {
      this._qte = this._qte + 1;
    }
  
    delete1() {
      this._qte = this._qte - 1;
    }
  }