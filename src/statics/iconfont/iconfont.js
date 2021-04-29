import { createGlobalStyle } from "styled-components"

const GlobalIconFont = createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1619709503365'); /* IE9 */
    src: url('./iconfont.eot?t=1619709503365#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
    url('./iconfont.woff?t=1619709503365') format('woff'),
    url('./iconfont.ttf?t=1619709503365') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1619709503365#iconfont') format('svg'); /* iOS 4.1- */
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

