import styled from "@emotion/styled";
import { defaultStyle } from "../../assets/globalStyle";

export const ListWrapper = styled.div`
    max-width: 100%;
    .title{
        font-weight: 700;
        padding-left: 6px;
        font-size: 14px;
        line-height: 60px;

    }

`
export const Lists = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`
export const ListItem = styled.div`
    position: relative;
    width: 32%;
    .img_wrapper{
        .decorate{
            position: absolute;
            top: 0;
            width: 100%;
            height: 35px;
            border-radius: 3px;
            background: linear-gradient(hsla(0,0,43%,.4),hsla(0,0,100%,0));
        }
        position: relative;
        height: 0;
        padding-bottom: 100%;
        .play_count{
            position: absolute;
            right: 2px;
            top: 2px;
            color: ${defaultStyle['font-color-light']};
            .play{
                vertical-align: top;
            }
        }
        img{
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 3px;
        }
    }
    .desc{
        overflow: hidden;
        margin-top: 2px;
        padding: 0 2px;
        height: 50px;
        text-align: left;
        font-size: ${defaultStyle['font-size-s']};
        line-height: 1.4;
        color: ${defaultStyle['font-color-desc']};
    }

`