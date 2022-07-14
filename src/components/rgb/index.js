import React, { Component } from 'react';
import { Section, Par, Btn, Container, BtnRgb } from "./style";


class Rgb extends Component {


    state = {

        red: 105,
        blue: 105,
        green: 105

    }

    // this.setState({ red: this.state.red+1 : this.state.red, blue:typeRgb=== "blue" ?  this.state.blue+1 : this.state.blue, green:typeRgb=== "green" ?  this.state.green+1 : this.state.green })
    handleIncreaseRed = (typeRgb) => {
        switch (typeRgb) {
            case "red":
                if (this.state.red === 255) {
                    this.setState({ red: 0, blue: this.state.blue, green: this.state.green });

                }
                else {

                    this.setState({ red: this.state.red + 1, blue: this.state.blue, green: this.state.green })
                }
                break;
            case "blue":
                if (this.state.blue === 255) {
                    this.setState({ red: this.state.red, blue: 0, green: this.state.green });

                }
                else {

                    this.setState({ red: this.state.red, blue: this.state.blue + 1, green: this.state.green })
                }
                break;
            case "green":
                if (this.state.green === 255) {
                    this.setState({ red: this.state.red, blue: this.state.blue, green: 0 });

                }
                else {

                    this.setState({ red: this.state.red, blue: this.state.blue, green: this.state.green + 1 })
                }
                break;
            default: break;
        }
    }

    handleDecreaseRed = (typeRgb) => {

        this.setState({
            red: typeRgb === "red" ? this.state.red === 0 ? this.state.red = 255 : this.state.red - 1 : this.state.red,
            blue: typeRgb === "blue" ? this.state.blue === 0 ? this.state.blue = 255 : this.state.blue - 1 : this.state.blue,
            green: typeRgb === "green" ? this.state.green === 0 ? this.state.green = 255 : this.state.green - 1 : this.state.green
        })
    }

    render() {
        return (

            <Container>
                <div>
                    <Section>
                        <Par color={"red"}>RED </Par>
                        <Btn onClick={() => this.handleIncreaseRed("red")}>+</Btn>
                        <Btn onClick={() => this.handleDecreaseRed("red")}>-</Btn>
                    </Section>

                    <Section>
                        <Par color={"blue"}>BLUE </Par>
                        <Btn onClick={() => this.handleIncreaseRed("blue")}>+</Btn>
                        <Btn onClick={() => this.handleDecreaseRed("blue")}>-</Btn>
                    </Section>

                    <Section>
                        <Par color={"green"}>GREEN </Par>
                        <Btn onClick={() => this.handleIncreaseRed("green")}>+</Btn>
                        <Btn onClick={() => this.handleDecreaseRed("green")}>-</Btn>
                    </Section>
                </div>
                <BtnRgb color={(this.state.red<=112 && this.state.blue<=112 && this .state.green<=112) ? "#fff" : "#000"} bgColor={`rgb(${this.state.red},${this.state.blue},${this.state.green})`}>
                    RGB ({this.state.red}, {this.state.blue}, {this.state.green})
                </BtnRgb>
            </Container>

        );
    }
}

export default Rgb;

