import { Carousel } from "zarm"
import { SliderContainer } from './style'
type SliderProps = {
    imageUrl: string,
    typeTitle: string
}

export type SliderList = SliderProps[]

export const Slider = (props: { list: SliderList }) => {
    const { list } = props

    return <SliderContainer>
         <div className="before"/>
        <div className="slider-container">
           
            <Carousel>
                {
                    list.map((item) => (<div key={item.imageUrl}>
                        <img src={item.imageUrl} alt={item.typeTitle} />
                    </div>))
                }
            </Carousel>
        </div>
    </SliderContainer>
}

