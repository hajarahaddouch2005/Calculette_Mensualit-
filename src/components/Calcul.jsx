import React, { Component } from "react";

class Calcul extends Component {
  state = {
    montant: "",
    taux: "",
    duree: "",
    mensualite: null
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  calculMensualite = () => {
    const { montant, taux, duree } = this.state;
    const tauxMensuel = taux / 100 / 12;
    const dureeEnMois = duree * 12;
    const mensualite =
      (montant * tauxMensuel) /
      (1 - Math.pow(1 + tauxMensuel, -dureeEnMois));
    this.setState({ mensualite: mensualite.toFixed(2) });
  };

  render() {
    const { montant, taux, duree, mensualite } = this.state;
    return (
      <div className="calcul">
        <h2>Calcul de la mensualité</h2>
        <div className="form-group">
          <label>Montant du prêt :</label>
          <input
            type="number"
            name="montant"
            value={montant}
            onChange={this.handleInputChange}
            placeholder="Entrez le montant"
          />
        </div>
        <div className="form-group">
          <label>Taux d'intérêt (%) :</label>
          <input
            type="number"
            name="taux"
            value={taux}
            onChange={this.handleInputChange}
            placeholder="Entrez le taux"
          />
        </div>
        <div className="form-group">
          <label>Durée (en années) :</label>
          <input
            type="number"
            name="duree"
            value={duree}
            onChange={this.handleInputChange}
            placeholder="Entrez la durée"
          />
        </div>
        <button onClick={this.calculMensualite}>Calculer</button>
        {mensualite && (
          <div className="resultat">
            <h3>Mensualité : {mensualite} MAD</h3>
          </div>
        )}
        
      </div>

    );
  }
}

export default Calcul;
