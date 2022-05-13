import React from 'react';
import Particles from "react-tsparticles";
import particleConfig from '../Helpers/ParticalConfig';

export default function particleBackground(){
    return(
        <Particles params={particleConfig}></Particles>
    );
}