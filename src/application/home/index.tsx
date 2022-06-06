import { css } from "@emotion/react"
import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom"
import { Rank } from "../rank"
import { Recommend } from "../recommend"
import { Singer } from "../singer"
import { Tab, Top, TabItem } from "./style"

export const Home = (props: { children: any }) => {


    return <BrowserRouter>
        <Top>
            <span className="iconfont menu">&#xe65c;</span>
            <span className="title">WebApp</span>
            <span className="iconfont search">&#xe62b;</span>
        </Top>
        <Tab>
            <NavLink to="/recommend" ><TabItem><span > 推荐 </span></TabItem></NavLink>
            <NavLink to="/singer" ><TabItem><span > 歌手 </span></TabItem></NavLink>
            <NavLink to="/rank" ><TabItem><span > 排行榜 </span></TabItem></NavLink>
        </Tab>
        <Routes>
            <Route path="/" element={<Navigate replace to="/recommend" />} />
            <Route path="/recommend"  element={<Recommend />} />
            <Route path="/singer" element={<Singer />} />
            <Route path='/rank'  element={<Rank />} />
        </Routes>
        {props.children && props.children}
    </BrowserRouter>

}