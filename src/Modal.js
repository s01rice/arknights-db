// Modal.js
import React from "react";

const baseUrl = "https://gamepress.gg";
export default class Modal extends React.Component {

    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    }

    displayTalents = talentObject => {
        if (talentObject.length === 0) return "None";
        return (
            <React.Fragment>
                {talentObject.map((talent) => {
                    return (
                        <React.Fragment>
                            <h4>{talent.name}</h4>
                            <p>{talent.desc}</p>
                        </React.Fragment>
                    )
                })}
            </React.Fragment>
        )
    }

    displaySkills = skillObject => {
        if (skillObject.length === 0) return "None";
        return (
            <React.Fragment>
                {skillObject.map((skill) => {
                    return (
                        <div className="skill">
                            <div className="flex flex-center">
                                <img src={baseUrl + skill.icon} className="skill-icon" />
                                <div className="skill-info">
                                    <h4>{skill.name}</h4>
                                    <p>Initial SP: {skill.spInitial}<br />SP Cost: {skill.spCost}<br />Charge Type: {skill.chargeType}<br />Activation: {skill.activation}<br />Duration: {skill.duration}</p>
                                </div>
                            </div>
                            <div className="skill-description">
                                <p>Description: {skill.desc}</p>
                            </div>
                        </div>
                    )
                })}
            </React.Fragment>
        )
    }


    render() {
        if (!this.props.show) return null;
        return (
            <div className="modal">
                <div className="modal-content wrapper flex flex-start">
                    <div className="profile modal-module">

                        <img src={baseUrl + this.props.op.icon} alt={this.props.op.name} className={`modal-icon rarity-${this.props.op.stats.rarity}`} />

                        <p>{this.props.op.name}<br />
                            Type: {this.props.op.stats.type}<br />
                            Rarity: {this.props.op.stats.rarity}&#x2606;</p>
                        <p>Stats (at Max)</p>
                        <p>HP: {this.props.op.stats.hp}<br />
                        ATK: {this.props.op.stats.atk}<br />
                        DEF: {this.props.op.stats.def}<br />
                        RES: {this.props.op.stats.res}<br />
                        Cost: {this.props.op.stats.cost}<br />
                        Block: {this.props.op.stats.block}<br /></p>

                        <p>Traits: {this.props.op.traits}</p>
                    </div>
                    <div className="description modal-module">
                        <h3>Talents:</h3>
                        <p>{this.displayTalents(this.props.op.talents)}</p>
                        <h3>Skills: </h3>
                        <p>{this.displaySkills(this.props.op.skills)}</p>
                    </div>
                </div>
                <button className="modal-close" onClick={this.onClose}>X</button>
            </div>
        );
    }
}