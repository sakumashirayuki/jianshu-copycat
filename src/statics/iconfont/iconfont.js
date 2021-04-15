import { createGlobalStyle } from "styled-components"

const GlobalIconFont = createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1618498362239'); /* IE9 */
    src: url('./iconfont.eot?t=1618498362239#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAWoAAsAAAAACuAAAAVaAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCEGAqHSIZCATYCJAMoCxYABCAFhG0Heht6CcgOJQUKhiwKAIBC8Dyf53du3mubn37IA2EFth1AXgnOaMWVMqVT31ZQCsMXiOUwyAUSvGSZ5Hu/w7gCTWUXiCYCuzz1MqXDEvz/D/fcOh7YvPYsl/eac1JRJyuhzgfa2+cGHEIfiP9Duqq9cBLOhwAWqaxGVzeroAIEoOE2E0D6qgoPAmxGdAhTMDVun301shAXpjHLeAssUH9fvlFaTDBwKbgLNemeKQHW9nxuSrU4E2mrWpmYnx24HQQKKApAg6z1dS5H6cmiUFifv9f0BhBJGBSG7bFD7GQ7w86xy9gVPjedd8BNLz+ImxUi+UQUAFXxICZBLf3H86BB3DBlMDLGpoLA9ogICuwQBAPsZAQX2BkIJtg5wnSqMqhHUFUe9bhRVQERPPC5qXheKi25LhpADEBUl2yDU1dFpfApA4WWt4sK9kREWFqZZow3NjgcnzchOFq3UYb7o7sNjrr7Yrq30tJA34Xx+mDKMoIJMbwqZAySOEU2Vlc8/saDBy10FZU67+NAq8fPWQtavjU1PvE8vxCo91/oW96i0nixtcZXzdWIXCjtD6qgLcyBg0Mp1tr4lvxDph8ssc5Ys2/JpECgle6r6rvlBhN3Mf3nRcZwT73y6JE/yxW/PfT1e2v4BvsvtuJ8CSMeV+95NCbo9Ik4verkkpAdpxNdq0/VWH27Wy8yzJxdLW7jxAE6aPZyne+kFUzwnGWg02wuH7tnUiCt3TvH97R/m9jiafraPm/iZfc86pn4PRIkMHwxNsCc2RVPxVJ3lL/CaOz3zcwcTZhVv15vfFbiyhIl0ZUstTIxOwFW7l++PFjIIXZLv4+f+JNPaLSprpr6WjB9olWrPyWGGPTdR29169lm7lvsY5+Zv/pkmzonpifbRudjHRvsnZLcIL/bMONY+6dPj3WoMWwVlj09FUi9PuHKOvzGmsePwZnu2Z/y637qFjIv1PH03ltcqU8T1L1e/af6EPK6Yglx1VqrreDU4CNMPrvzX3sjeZMQ8ycx53tOKjsWxh4/bi8kadTojRurFI9lk1pl+tLIygn/5S4k+5Jndhh1p07VSTI9c1B1FCMKxg1BiSHs5JtVoZOhq96ozWHiPjYkPDkiVM67u8gcNX+L6sO0HXBSWxTA3BSMU3JhgVvASi7GuakFqW7EqMdYshe4U03is1xKASyfWqJeXVBLeCwTSWreSLF8d9Qqw6/tRLGsu3ZbP7hS+fomU+t8nrE369BdQ627IHAGbnnVVM8B4KxVJVTNPNzNRA3UJHAcdUYBzhO1VaUAnDOqFsUC4LxV61XyLr4eM+4NPH0sbPdv07ugIi/WD62s9uQTxsRYTSp26EUaOA7ou4QzWfo9SJzqOG7xeaOqZhHmLbf+E7AjeyP5S+qY2HEQTJvoBgYeUkBhkk3RjKLgwktZcGNSAyyKkH2wlygwFKKDgEI6AYRwroJBKKdBEc47imb8ARex/Ac34aLAwi+Rx/SSK73odIx4giQo1EJV1OyyYCG0VlmGFJeVx1aJyuIQdqoRuKF4SWcmG9kRzmMHZ5WykRAZylizwSy4GLJaNejAmhmJZK2JEMfOdSW6+93QWlGzAZo6YBA8BIQERKAWiIqIhh1Znk+gXT9fBkLBhRUeHDLww8+BwDhRlw7ZwFrWx6BkK+2xBtZlZSdVKGyEQJDZRjIYDRuQLLQjrHxSA+LwX8sMQoSwFlOKuIOdrKNxclzl2vLVtqktOVCGcJdqiSFKtLjELR4xJUgs8eIdgVRB5TWibtrkHq3Wuni7v1mVjk00l4/TodopB7LrDTwt83ZF4s3qNebnNGkuTeZv02smDwMAAAA=') format('woff2'),
    url('./iconfont.woff?t=1618498362239') format('woff'),
    url('./iconfont.ttf?t=1618498362239') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1618498362239#iconfont') format('svg'); /* iOS 4.1- */
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

