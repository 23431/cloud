import { useState, useEffect } from "react"
import { RecommendList } from "../../components/recommendList"
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

export function useLoadData() {
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

    return { bannerList, recommendList }
}