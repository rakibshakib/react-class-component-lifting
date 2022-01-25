import React, { Component } from 'react';
import { coverter, toCelicus, toFahrenheit } from '../../library/tempConverter';
import InputField from '../InputField/InputField';
import IsBoiledWater from '../IsBoiledWater/IsBoiledWater';

export default class TempApp extends Component {
    state = {
        temparute: '',
        scale: 'c',
    };
    handleChangeTemp = (e, scale) => {
        this.setState({
            temparute: e.target.value,
            scale,
        });
    };
    render() {
        const { temparute, scale } = this.state;
        const celicus =
            scale === 'f' ? coverter(temparute, toCelicus) : temparute;
        const fahrenheit =
            scale === 'c' ? coverter(temparute, toFahrenheit) : temparute;
        return (
            <div className="container">
                <InputField
                    scale="c"
                    temperature={celicus}
                    handleChangeTemp={this.handleChangeTemp}
                />
                <InputField
                    scale="f"
                    temperature={fahrenheit}
                    handleChangeTemp={this.handleChangeTemp}
                />
                <IsBoiledWater celsius={temparute} />
            </div>
        );
    }
}
