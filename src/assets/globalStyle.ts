import { css } from "@emotion/react";

export const globalStyle = css`
    html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		line-height: 1;
	}
	html, body {
		background: #f2f3f4;;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	a {
		text-decoration: none;
		color: #fff;
	}

`
export const extendClick = () => {
    return `
      position: relative;
      &:before{
        content: '';
        position: absolute;
        top: -10px; bottom: -10px; left: -10px; right: -10px;
      };
    `;
};

export const noWrap = () => {
    return `
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    `;
};

export const bgFull = () => {
    return `
      background-position: 50%;
      background-size: contain;
      background-repeat: no-repeat;
    `
};

export const defaultStyle = {
    "theme-color": "#d44439",
    "theme-color-shadow": "rgba(212, 68, 57, .5)",
    "font-color-light": "#f1f1f1",
    "font-color-light-shadow": "rgba(241, 241, 241, 0.6)",//略淡
    "font-color-desc": "#2E3030",
    "font-color-desc-v2": "#bba8a8", //略淡
    "font-size-ss": "10px",
    "font-size-s": "12px",
    "font-size-m": "14px",
    "font-size-l": "16px",
    "font-size-ll": "18px",
    "border-color": "#e4e4e4",
    "border-color-v2": "rgba(228, 228, 228, 0.1)",
    "background-color": "#f2f3f4",
    "background-color-shadow": "rgba(0, 0, 0, 0.3)",
    "highlight-background-color": "#fff",
    "official-red": "#E82001",
}