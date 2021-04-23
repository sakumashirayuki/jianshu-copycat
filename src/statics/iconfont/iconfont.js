import { createGlobalStyle } from "styled-components"

const GlobalIconFont = createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1619198479748'); /* IE9 */
    src: url('./iconfont.eot?t=1619198479748#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
    url('./iconfont.woff?t=1619198479748') format('woff'),
    url('./iconfont.ttf?t=1619198479748') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1619198479748#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
export default GlobalIconFont;



/* .iconpen:before {
  content: "\e61c";
}

.iconAa:before {
  content: "\e636";
}

.iconfangdajing:before {
  content: "\e637";
}

.iconshouji:before {
  content: "\e621";
}

.icondaohang:before {
  content: "\e625";
} */

