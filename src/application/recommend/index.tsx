import styled from "@emotion/styled"
import ScrollViewer from "../../baseUI/scroll"
import { List } from "../../components/recommendList"
import { Slider } from "../../components/slider"
import { useLoadData } from "./hooks"

export const Content = styled.div`

    position: fixed;
    top: 90px;
    bottom: 0;
    width: 100%;

`

export const Recommend = () => {

    const { bannerList, recommendList } = useLoadData()

    return <Content>
        <ScrollViewer>
            <div>
                <Slider list={bannerList} />
                <List list={recommendList} />
            </div>
        </ScrollViewer>

    </Content>
}