import { getCount } from "../../utils"
import { ListWrapper, Lists, ListItem } from "./style"

type RecommendProps = {
    id: number,
    picUrl: string,
    name: string,
    playCount: number,
}

export type RecommendList = RecommendProps[]

export const List = (props: { list: RecommendList }) => {
    const { list } = props
    return <ListWrapper>
        <h1 className="title">推荐歌单</h1>
        <Lists>
            {
                list.map(item => (<ListItem key={item.id}>
                    <div className="img_wrapper">
                        <div className="decorate" />
                        <img src={item.picUrl + "?param=300*300"} width="100%" height="100%" alt="" />
                        <div className="play_count">
                            <i className="iconfont play">&#xe885;</i>
                            <span className="count">{getCount(item.playCount)}</span>
                        </div>
                    </div>
                    <div className="desc">{item.name}</div>
                </ListItem>))
            }
        </Lists>
    </ListWrapper>
}