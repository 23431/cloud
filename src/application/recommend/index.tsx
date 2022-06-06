import styled from "@emotion/styled"
import { useEffect, useState } from "react"
import ScrollViewer from "../../baseUI/scroll"
import { List, RecommendList } from "../../components/recommendList"
import { Slider } from "../../components/slider"
import { SliderList } from "../../components/slider"
import { Get } from "../../http"

type BannerResult = {
    code: number,
    banners: SliderList
}

type RecommendResult = {
    code: number,
    result: RecommendList
}

export const Content = styled.div`

    position: fixed;
    top: 90px;
    bottom: 0;
    width: 100%;

`

export const Recommend = () => {

    const [bannerList, SetBannerList] = useState<SliderList>([])
    const [recommendList, setRecommnedList] = useState<RecommendList>([])
    useEffect(() => {

        Get<BannerResult>('/banner').then(r => {
            if (r.code === 200) SetBannerList(r.banners)
        }).catch(e => { })

        Get<RecommendResult>('/personalized').then(r => {
            if (r.code === 200) setRecommnedList(r.result)

        }).catch(() => { })

    }, [])

    return <Content>
        <ScrollViewer>
            <div>
                <Slider list={bannerList} />
                <List list={recommendList} />
            </div>
        </ScrollViewer>

    </Content>
}