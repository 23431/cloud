import styled from "@emotion/styled";
import { defaultStyle } from "../../assets/globalStyle";

export const SliderContainer = styled.div`

    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    margin: auto;
    background: white;
    .before{
        position: absolute;
        top: -300px;
        height: 400px;
        width: 100%;
        background: ${defaultStyle['theme-color']};
    }
    .slider-container{
        position: relative;
        width: 98%;
        height: 160px;
        overflow: hidden;
        margin: auto;
        border-radius: 6px;
        img{
            height: 160px;
        }
    }


`