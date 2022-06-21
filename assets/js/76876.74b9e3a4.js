"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[76876],{57728:function(e,t,n){n.d(t,{Z:function(){return N}});var a=n(63366),r=n(67294),l=n(86010),i=n(34983),c=n(88746),s=n(11614),o="sidebar_TMXw",m="sidebarItemTitle_V4zb",u="sidebarItemList_uHd5",d="sidebarItem_spIe",p="sidebarItemLink_eqrF",f="sidebarItemLinkActive_XZSJ";function v(e){var t=e.sidebar;return r.createElement("aside",{className:"col col--3"},r.createElement("nav",{className:(0,l.Z)(o,"thin-scrollbar"),"aria-label":(0,s.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(m,"margin-bottom--md")},t.title),r.createElement("ul",{className:(0,l.Z)(u,"clean-list")},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:d},r.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:p,activeClassName:f},e.title))})))))}var h=n(82306);function g(e){var t=e.sidebar;return r.createElement("ul",{className:"menu__list"},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:"menu__list-item"},r.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function E(e){return r.createElement(h.Zo,{component:g,props:e})}var Z=n(94980);function b(e){var t=e.sidebar,n=(0,Z.i)();return null!=t&&t.items.length?"mobile"===n?r.createElement(E,{sidebar:t}):r.createElement(v,{sidebar:t}):null}var _=["sidebar","toc","children"];function N(e){var t=e.sidebar,n=e.toc,c=e.children,s=(0,a.Z)(e,_),o=t&&t.items.length>0;return r.createElement(i.Z,s,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement(b,{sidebar:t}),r.createElement("main",{className:(0,l.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},c),n&&r.createElement("div",{className:"col col--2"},n))))}},87983:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(67294),r=n(86010),l=n(88746);function i(e){return e.href?a.createElement(l.Z,e):a.createElement(a.Fragment,null,e.children)}function c(e){var t=e.author,n=t.name,r=t.title,l=t.url,c=t.imageURL,s=t.email,o=l||s&&"mailto:"+s||void 0;return a.createElement("div",{className:"avatar margin-bottom--sm"},c&&a.createElement(i,{href:o,className:"avatar__photo-link"},a.createElement("img",{className:"avatar__photo",src:c,alt:n})),n&&a.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},a.createElement("div",{className:"avatar__name"},a.createElement(i,{href:o,itemProp:"url"},a.createElement("span",{itemProp:"name"},n))),r&&a.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))}var s="authorCol_FlmR",o="imageOnlyAuthorRow_trpF",m="imageOnlyAuthorCol_S2np";function u(e){var t=e.authors,n=e.assets;if(0===t.length)return null;var l=t.every((function(e){return!e.name}));return a.createElement("div",{className:(0,r.Z)("margin-top--md margin-bottom--sm",l?o:"row")},t.map((function(e,t){var i;return a.createElement("div",{className:(0,r.Z)(!l&&"col col--6",l?m:s),key:t},a.createElement(c,{author:Object.assign({},e,{imageURL:null!=(i=n.authorsImageUrls[t])?i:e.imageURL})}))})))}},76725:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(67294),r=n(11614),l=n(88584),i=n(18015);function c(e){var t=e.editUrl;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:i.k.common.editThisPage},a.createElement(l.Z,null),a.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},38676:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(87462),r=n(63366),l=n(67294),i=n(86010),c=n(11614),s=n(96793),o="anchorWithStickyNavbar_mojV",m="anchorWithHideOnScrollNavbar_R0VQ",u=["as","id"];function d(e){var t=e.as,n=e.id,d=(0,r.Z)(e,u),p=(0,s.L)().navbar.hideOnScroll;return"h1"!==t&&n?l.createElement(t,(0,a.Z)({},d,{className:(0,i.Z)("anchor",p?m:o),id:n}),d.children,l.createElement("a",{className:"hash-link",href:"#"+n,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(t,(0,a.Z)({},d,{id:void 0}))}},88584:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(87462),r=n(63366),l=n(67294),i=n(86010),c="iconEdit_dcUD",s=["className"];function o(e){var t=e.className,n=(0,r.Z)(e,s);return l.createElement("svg",(0,a.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(c,t),"aria-hidden":"true"},n),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}},38181:function(e,t,n){n.d(t,{Z:function(){return T}});var a=n(87462),r=n(67294),l=n(63366),i=n(32411),c=["mdxType","originalType"];var s=n(31531);var o=n(88746);var m=n(86010),u=n(5730),d=n(17940),p="details_lb9f",f="isBrowser_bmU9",v="collapsibleContent_i85q",h=["summary","children"];function g(e){return!!e&&("SUMMARY"===e.tagName||g(e.parentElement))}function E(e,t){return!!e&&(e===t||E(e.parentElement,t))}function Z(e){var t=e.summary,n=e.children,a=(0,l.Z)(e,h),i=(0,u.Z)(),c=(0,r.useRef)(null),s=(0,d.u)({initialState:!a.open}),o=s.collapsed,Z=s.setCollapsed,b=(0,r.useState)(a.open),_=b[0],N=b[1];return r.createElement("details",Object.assign({},a,{ref:c,open:_,"data-collapsed":o,className:(0,m.Z)(p,i&&f,a.className),onMouseDown:function(e){g(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;g(t)&&E(t,c.current)&&(e.preventDefault(),o?(Z(!1),N(!0)):Z(!0))}}),t||r.createElement("summary",null,"Details"),r.createElement(d.z,{lazy:!1,collapsed:o,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){Z(e),N(!e)}},r.createElement("div",{className:v},n)))}var b="details_BAp3";function _(e){var t=Object.assign({},e);return r.createElement(Z,(0,a.Z)({},t,{className:(0,m.Z)("alert alert--info",b,t.className)}))}var N=n(38676);function k(e){return r.createElement(N.Z,e)}var y="img_E7b_";var T={head:function(e){var t=r.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var a=e.props,i=(a.mdxType,a.originalType,(0,l.Z)(a,c));return r.createElement(e.props.originalType,i)}return e}(e)}));return r.createElement(i.Z,e,t)},code:function(e){var t=["a","b","big","i","span","em","strong","sup","sub","small"];return r.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")||(0,r.isValidElement)(e)&&t.includes(e.props.mdxType)}))?r.createElement("code",e):r.createElement(s.Z,e)},a:function(e){return r.createElement(o.Z,e)},pre:function(e){var t;return r.createElement(s.Z,(0,r.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(t=e.children)?void 0:t.props:Object.assign({},e))},details:function(e){var t=r.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),l=r.createElement(r.Fragment,null,t.filter((function(e){return e!==n})));return r.createElement(_,(0,a.Z)({},e,{summary:n}),l)},ul:function(e){return r.createElement("ul",(0,a.Z)({},e,{className:(t=e.className,(0,m.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&"clean-list"))}));var t},img:function(e){return r.createElement("img",(0,a.Z)({loading:"lazy"},e,{className:(t=e.className,(0,m.Z)(t,y))}));var t},h1:function(e){return r.createElement(k,(0,a.Z)({as:"h1"},e))},h2:function(e){return r.createElement(k,(0,a.Z)({as:"h2"},e))},h3:function(e){return r.createElement(k,(0,a.Z)({as:"h3"},e))},h4:function(e){return r.createElement(k,(0,a.Z)({as:"h4"},e))},h5:function(e){return r.createElement(k,(0,a.Z)({as:"h5"},e))},h6:function(e){return r.createElement(k,(0,a.Z)({as:"h6"},e))}}},61428:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),r=n(86010),l=n(88746);function i(e){var t=e.permalink,n=e.title,i=e.subLabel,c=e.isNext;return a.createElement(l.Z,{className:(0,r.Z)("pagination-nav__link",c?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},i&&a.createElement("div",{className:"pagination-nav__sublabel"},i),a.createElement("div",{className:"pagination-nav__label"},n))}},63865:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),r=n(86010),l=n(88746),i="tag_hD8n",c="tagRegular_D6E_",s="tagWithCount_i0QQ";function o(e){var t=e.permalink,n=e.label,o=e.count;return a.createElement(l.Z,{href:t,className:(0,r.Z)(i,o?s:c)},n,o&&a.createElement("span",null,o))}},41921:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),r=n(86010),l=n(11614),i=n(63865),c="tags_XVD_",s="tag_JSN8";function o(e){var t=e.tags;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,r.Z)(c,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,n=e.permalink;return a.createElement("li",{key:n,className:s},a.createElement(i.Z,{label:t,permalink:n}))}))))}},57880:function(e,t,n){n.d(t,{c:function(){return o}});var a=n(67294),r=n(6832),l=["zero","one","two","few","many","other"];function i(e){return l.filter((function(t){return e.includes(t)}))}var c={locale:"en",pluralForms:i(["one","other"]),select:function(e){return 1===e?"one":"other"}};function s(){var e=(0,r.Z)().i18n.currentLocale;return(0,a.useMemo)((function(){try{return t=e,n=new Intl.PluralRules(t),{locale:t,pluralForms:i(n.resolvedOptions().pluralCategories),select:function(e){return n.select(e)}}}catch(a){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+a.message+"\n"),c}var t,n}),[e])}function o(){var e=s();return{selectMessage:function(t,n){return function(e,t,n){var a=e.split("|");if(1===a.length)return a[0];a.length>n.pluralForms.length&&console.error("For locale="+n.locale+", a maximum of "+n.pluralForms.length+" plural forms are expected ("+n.pluralForms+"), but the message contains "+a.length+": "+e);var r=n.select(t),l=n.pluralForms.indexOf(r);return a[Math.min(l,a.length-1)]}(n,t,e)}}}}}]);