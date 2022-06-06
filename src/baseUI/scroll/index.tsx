import React, { forwardRef, PropsWithChildren, useEffect, useImperativeHandle, useRef, useState } from "react"
import Bscroll from 'better-scroll'
import styled from "@emotion/styled"
interface ScrollProps {
    direction?: 'vertical' | 'horizental',
    click?: boolean,
    refresh?: boolean,
    onScroll?: (scroll: any) => void,
    pullUp?: () => void, // 上拉加载逻辑
    pullDown?: () => void, //下拉加载逻辑
    pullUpLoading?: boolean, // 显示上拉loading 动画
    pullDownLoading?: boolean,// 是否显示下拉 loading 动画
    bounceTop?: boolean,// 是否支持向上吸顶
    bounceBottom?: boolean// 是否支持向下吸底

}


export type ScrollRef = React.ForwardedRef<{ refresh: Function, getBscroll: () => Bscroll | undefined }>
const ScrollContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`
const ScrollViewer = forwardRef((props: PropsWithChildren<ScrollProps>, ref: ScrollRef) => {

    const defaultProps: ScrollProps = {
        direction: "vertical",
        click: true,
        refresh: true,
        pullUpLoading: false,
        pullDownLoading: false,
        bounceTop: true,
        bounceBottom: true
    }

    const { direction, click, refresh, pullDownLoading, pullUpLoading, bounceTop, bounceBottom, children, pullUp, pullDown, onScroll } = Object.assign({}, defaultProps, props)


    const [bScroll, setBScroll] = useState<Bscroll | null>(null)

    const scrollContaninerRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const scroll = new Bscroll(scrollContaninerRef.current!, {
            scrollX: direction === 'horizental',
            scrollY: direction === 'vertical',
            probeType: 3,
            click: click,
            bounce: {
                top: bounceTop,
                bottom: bounceBottom
            }
        })
        setBScroll(scroll)

        return () => {
            setBScroll(null)
        }

    }, [])



    useEffect(() => {
        if (refresh && bScroll) {
            bScroll.refresh()
        }
    })

    useEffect(() => {

        if (!bScroll || !onScroll) return

        bScroll.on('scroll', (scroll: any) => {
            onScroll(scroll)
        })

        return () => {
            bScroll.off('scroll')
        }

    }, [onScroll, bScroll])

    useEffect(() => {
        if (!bScroll || !pullUp) return
        bScroll.on('scrollEnd', () => {
            if (bScroll.y <= bScroll.maxScrollY + 100) {
                pullUp()
            }
        })

        return () => {
            bScroll.off('scrollEnd')
        }

    }, [pullUp, bScroll])

    useEffect(() => {
        if (!bScroll || !pullDown) return
        bScroll.on('touchEnd', (pos: { y: number }) => {
            if (pos.y > 50) {
                pullDown()
            }
        })

        return () => {
            bScroll.off('touchEnd')
        }

    }, [pullDown, bScroll])


    useImperativeHandle(ref, () => {
        return {
            refresh() {
                if (bScroll) {
                    bScroll.refresh()
                    bScroll.scrollTo(0, 0)
                }
            },
            getBscroll() {
                if (bScroll) return bScroll
            }
        }
    })




    return <ScrollContainer ref={scrollContaninerRef}>{
        children
    }</ScrollContainer>
})

export default ScrollViewer