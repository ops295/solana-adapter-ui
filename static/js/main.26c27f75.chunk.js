/*! For license information please see main.26c27f75.chunk.js.LICENSE.txt */
(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{160:function(e,t,n){},166:function(e,t,n){},169:function(e,t){},173:function(e,t){},207:function(e,t){},208:function(e,t){},228:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/fi-rr-copy-alt-1.93615552.svg"},229:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/walletDisconnect.e7dd0eb6.svg"},232:function(e,t,n){},233:function(e,t,n){},234:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(45),c=n.n(o),l=(n(160),n(60)),i=n(29),s=n(49),u=n(3),d=n.n(u),b=n(6);function j(e,t){return new Promise((function(t){return setTimeout((function(){return t({data:{userName:"abc",email:e,name:"Om prakash",jwt_token:"ajfksdjflfk",role:"admin"}})}),500)}))}function f(e,t){return new Promise((function(n){return setTimeout((function(){return n({data:{userName:"abc",email:"a@b.com",walletAddress:e,publicKey:t,jwt_token:"ajfksdjflfk",role:"user"}})}),500)}))}var h=Object(s.b)("user/get",function(){var e=Object(b.a)(d.a.mark((function e(t){var n,r,a,o,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.email,r=t.password,a=t.walletAddress,o=t.publicKey,!n||!r){e.next=5;break}return e.next=4,j(n);case 4:c=e.sent;case 5:if(!a||!o){e.next=9;break}return e.next=8,f(a,o);case 8:c=e.sent;case 9:return e.abrupt("return",c.data);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),O=Object(s.c)({name:"user",initialState:{status:"idle",wallet:null,data:null,token:null},reducers:{addWallet:function(e,t){e.wallet=t.payload},disconnectWallet:function(e){e.wallet=null},removeUserToken:function(e){e.token=null},removeUserData:function(e){e.data=null}},extraReducers:function(e){e.addCase(h.pending,(function(e){e.status="loading"})).addCase(h.fulfilled,(function(e,t){e.status="idle",e.data=t.payload,e.token=t.payload.jwt_token}))}}),g=O.actions,m=g.addWallet,p=g.disconnectWallet,x=g.removeUserToken,v=g.removeUserData,w=function(e){return e.user.wallet},k=function(e){return e.user.data},C=function(e){return e.user.token},y=function(e){return e.user.status},S=O.reducer,E=Object(s.c)({name:"notification",initialState:{error:null,warning:null,success:null},reducers:{addError:function(e,t){e.error=t.payload},removeError:function(e){e.error=null},addWarning:function(e,t){e.warning=t.payload},removeWarning:function(e){e.warning=null},addSuccess:function(e,t){e.success=t.payload},removeSuccess:function(e){e.success=null}}}),_=E.actions,T=_.addError,M=_.removeError,N=_.addWarning,D=_.removeWarning,A=_.addSuccess,P=_.removeSuccess,F=function(e){return e.notification.error},W=function(e){return e.notification.warning},z=function(e){return e.notification.success},B=E.reducer,L=Object(s.a)({reducer:{user:S,notification:B}}),I=(n(166),n(282)),H=n(281),R=n(280),G=n(283),K=n(93),U=n.n(K),V=n(8),J=n(2),X=a.a.createContext({error:null,addError:function(){},removeError:function(){},success:null,addSuccess:function(){},removeSuccess:function(){},warning:null,addWarning:function(){},removeWarning:function(){}});function q(e){var t=e.children,n=a.a.useState(null),o=Object(V.a)(n,2),c=o[0],l=o[1],i=a.a.useState(null),s=Object(V.a)(i,2),u=s[0],d=s[1],b=a.a.useState(null),j=Object(V.a)(b,2),f=j[0],h=j[1],O={error:c,success:f,warning:u,addError:Object(r.useCallback)((function(e,t,n){return function(e,t,n){return l({message:e,label:t,status:n})}(e,t,n)}),[]),removeError:Object(r.useCallback)((function(){return l(null)}),[]),addWarning:Object(r.useCallback)((function(e,t,n){return function(e,t,n){return d({message:e,label:t,status:n})}(e,t,n)}),[]),removeWarning:Object(r.useCallback)((function(){return d(null)}),[]),addSuccess:Object(r.useCallback)((function(e,t,n){return function(e,t,n){return h({message:e,label:t,status:n})}(e,t,n)}),[]),removeSuccess:Object(r.useCallback)((function(){return h(null)}),[])};return Object(J.jsx)(X.Provider,{value:O,children:t})}function Q(){var e=a.a.useContext(X);return{error:e.error,addError:e.addError,removeError:e.removeError,success:e.success,addSuccess:e.addSuccess,removeSuccess:e.removeSuccess,warning:e.warning,addWarning:e.addWarning,removeWarning:e.removeWarning}}function Y(){var e=Object(i.c)(F),t=Object(i.c)(W),n=Object(i.c)(z),a=Object(i.b)();return{addError:Object(r.useCallback)((function(e,t,n){a(T({message:e,label:t,status:n}))}),[a]),addSuccess:Object(r.useCallback)((function(e,t,n){a(N({message:e,label:t,status:n}))}),[a]),addWarning:Object(r.useCallback)((function(e,t,n){a(A({message:e,label:t,status:n}))}),[a]),removeError:Object(r.useCallback)((function(){a(M())}),[a]),removeSuccess:Object(r.useCallback)((function(){a(D())}),[a]),removeWarning:Object(r.useCallback)((function(){a(P())}),[a]),error:e,warning:t,success:n}}function Z(){var e,t,n,a=Q(),o=a.error,c=a.removeError,l=a.addError,i=a.addWarning,s=a.addSuccess,u=a.success,d=a.removeSuccess,b=a.warning,j=a.removeWarning,f=Y(),h=f.error,O=f.success,g=f.warning,m=f.removeError,p=f.removeSuccess,x=f.removeWarning;return Object(r.useEffect)((function(){var e,t,n;h&&l(null!==(e=h.message)&&void 0!==e?e:"",null!==(t=h.label)&&void 0!==t?t:"",null!==(n=h.status)&&void 0!==n?n:"")}),[h,l]),Object(r.useEffect)((function(){var e,t,n;g&&i(null!==(e=g.message)&&void 0!==e?e:"",null!==(t=g.label)&&void 0!==t?t:"",null!==(n=g.status)&&void 0!==n?n:"")}),[g,i]),Object(r.useEffect)((function(){var e,t,n;O&&s(null!==(e=O.message)&&void 0!==e?e:"",null!==(t=O.label)&&void 0!==t?t:"",null!==(n=O.status)&&void 0!==n?n:"")}),[O,s]),Object(J.jsxs)(J.Fragment,{children:[o&&o.message&&Object(J.jsx)(I.a,{open:!!o,autoHideDuration:3e3,anchorOrigin:{vertical:"top",horizontal:"right"},onClose:function(){return c()},children:Object(J.jsxs)(H.a,{action:Object(J.jsx)(R.a,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){c(),h&&m()},children:Object(J.jsx)(U.a,{fontSize:"inherit"})}),sx:{width:"100%"},severity:"error",elevation:2,children:[Object(J.jsxs)(G.a,{children:["Error: ",null!==(e=o.label)&&void 0!==e?e:""]}),o.message]})}),b&&b.message&&Object(J.jsx)(I.a,{open:!!b,autoHideDuration:3e3,onClose:function(){return j()},anchorOrigin:{vertical:"bottom",horizontal:"right"},children:Object(J.jsxs)(H.a,{action:Object(J.jsx)(R.a,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){j(),g&&x()},children:Object(J.jsx)(U.a,{fontSize:"inherit"})}),sx:{width:"100%"},severity:"warning",elevation:2,children:[Object(J.jsxs)(G.a,{children:["Warning:",null!==(t=b.label)&&void 0!==t?t:""]}),b.message]})}),u&&u.message&&Object(J.jsx)(I.a,{open:!!u,autoHideDuration:3e3,onClose:function(){return d()},anchorOrigin:{vertical:"top",horizontal:"center"},children:Object(J.jsxs)(H.a,{action:Object(J.jsx)(R.a,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){d(),O&&p()},children:Object(J.jsx)(U.a,{fontSize:"inherit"})}),sx:{width:"100%"},severity:"success",elevation:2,children:[Object(J.jsxs)(G.a,{children:["Success: ",null!==(n=u.label)&&void 0!==n?n:""]}),u.message]})})]})}var $,ee=n(30),te=n(51),ne=n(10),re={bgColor:"#000000",primaryColor:"#DC1FFF",secondaryColor:"#00FFA3",darkColor:"#1A1A1A",textOnBg:"#ffffff",lightGray:"#212529",darkGray:"#444444",fontColor:"#ffffff",lighterDark:"#BFBFBF",footerColor:"#000000",sectionBgOne:"#0d0d0d"},ae={bgColor:"#ffffff",primaryColor:"#00FFA3",secondaryColor:"#DC1FFF ",darkColor:"#fcfcfc",textOnBg:"#000000",lightGray:"#fafafa",darkGray:"#BFBFBF",fontColor:"#000000",lighterDark:"#444444",footerColor:"#F8F8F8",sectionBgOne:"#E5E5E5"},oe=a.a.createContext({colorMode:"",colorPlates:{bgColor:"",primaryColor:"",secondaryColor:"",darkColor:"",textOnBg:"",lightGray:"",darkGray:"",fontColor:"",lighterDark:"",footerColor:"",sectionBgOne:""},typography:{fontFamily:""},gradient:{one:"",two:""},changeColorMode:function(){},changeColorTheme:function(){},changeTypography:function(){}});function ce(e){var t=e.children,n=a.a.useState("dark"),o=Object(V.a)(n,2),c=o[0],l=o[1],i=a.a.useState(Object(ne.a)({},re)),s=Object(V.a)(i,2),u=s[0],d=s[1],b=a.a.useState({fontFamily:"'Poppins', sans-serif"}),j=Object(V.a)(b,2),f=j[0],h=j[1],O={one:"linear-gradient(90.04deg, #00FFA3 0.04%, #DC1FFF 128.12%)",two:"linear-gradient(89.79deg, #00FFA3 0.17%, #1CE2AF 99.81%, #DC1FFF 99.82%)"},g=localStorage.getItem("apexTheme");null!==g&&(g=JSON.parse(g));var m=null!==g?g:{colorMode:c,colorPlates:u,typography:f,gradient:O},p=Object(ne.a)(Object(ne.a)({},m),{},{changeColorMode:Object(r.useCallback)((function(e,t){return function(e,t){l(e),d(t),localStorage.setItem("apexTheme",JSON.stringify({colorMode:e,colorPlates:t,typography:f,gradient:O}))}(e,t)}),[]),changeColorTheme:Object(r.useCallback)((function(e){return function(e){return d(e)}(e)}),[]),changeTypography:Object(r.useCallback)((function(e){return function(e){return h(e)}(e)}),[])});return Object(J.jsx)(oe.Provider,{value:p,children:t})}function le(){var e=a.a.useContext(oe),t=e.colorMode,n=e.colorPlates,r=e.typography,o=e.changeColorMode,c=e.changeColorTheme,l=e.changeTypography,i=e.gradient;return{colorMode:t,colorPlates:n,typography:r,changeColorMode:o,changeColorTheme:c,changeTypography:l,defaultDarkColors:re,defaultLightColors:ae,gradient:i}}var ie=function(){var e=le(),t=e.colorPlates,n=e.typography,r=e.gradient;return Object(J.jsx)(te.a,{styles:Object(te.b)($||($=Object(ee.a)(["\n\t\t\t\t:root {\n\t\t\t\t\t--bgColor: ",";\n\t\t\t\t\t--primaryColor: ",";\n\t\t\t\t\t--secondaryColor: ",";\n\t\t\t\t\t--darkColor: ",";\n          --font-family:",";\n          --textOnBg:",";\n\t\t\t\t\t--lightGray:",";\n\t\t\t\t\t--darkGray:",";\n\t\t\t\t\t--fontColor:",";\n\t\t\t\t\t--gradientOne:",";\n\t\t\t\t\t--gradientTwo:",";\n\t\t\t\t\t--footerColor:",";\n\t\t\t\t\t--lighterDark:",";\n\t\t\t\t\t--sectionBgOne:",";\n\t\t\t\t\t--sectionBgTwo:",";\n\t\t\t\t}\n\t\t\t"])),t.bgColor,t.primaryColor,t.secondaryColor,t.darkColor,n.fontFamily,t.textOnBg,t.lightGray,t.darkGray,t.fontColor,r.one,r.two,t.footerColor,t.lighterDark,t.sectionBgOne,t.sectionBgTwo)})},se=n(144),ue=n(291),de=n(286),be=n(145),je=n(290),fe=n(274),he=n(275),Oe=n(43),ge=n(147),me=function(){var e=Object(i.b)(),t=Y().addError,n=Object(i.c)(C),a=Object(i.c)(k),o=Object(i.c)(y),c=a?a.role:null,l=a&&"admin"===a.role,u="loading"===o,j=Object(r.useCallback)(function(){var n=Object(b.a)(d.a.mark((function n(r){var a,o,c,l,i,u;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=r.email,o=r.password,c=r.walletAddress,l=r.publicKey,n.prev=1,n.next=4,e(h({email:a,password:o,walletAddress:c,publicKey:l}));case 4:i=n.sent,u=Object(s.d)(i),localStorage.setItem("userData",JSON.stringify(u)),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0),t("Error while signup. Please try Again","Auth Error");case 13:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}(),[t,e]);return{signUp:j,authToken:n,user:a,role:c,isAdmin:l,loading:u}},pe=a.a.memo((function(e){var t,n=e.children;"DEVNET"===Object({NODE_ENV:"production",PUBLIC_URL:"/solana-adapter-ui",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_NET_NAME?t=se.b.Devnet:"TESTNET"===Object({NODE_ENV:"production",PUBLIC_URL:"/solana-adapter-ui",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_NET_NAME?t=se.b.Testnet:"MAINNET"===Object({NODE_ENV:"production",PUBLIC_URL:"/solana-adapter-ui",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_NET_NAME&&(t=se.b.Mainnet);var a=Object(Oe.c)(t),o=Object(r.useMemo)((function(){return[Object(je.a)(),Object(fe.a)({network:t}),Object(he.a)({network:t})]}),[t]);return Object(J.jsx)(ue.a,{endpoint:a,children:Object(J.jsxs)(de.a,{wallets:o,autoConnect:!0,children:[Object(J.jsx)(xe,{}),n]})})})),xe=a.a.memo((function(){var e=Object(be.b)(),t=e.adapter,n=e.wallet,a=e.publicKey,o=e.wallets,c=Q(),l=c.addSuccess,s=c.addWarning,u=c.addError,j=me(),f=j.signUp,h=j.authToken,O=Object(r.useMemo)((function(){return null===a||void 0===a?void 0:a.toBase58()}),[a]),g=Object(i.b)(),w=Object(r.useCallback)((function(e){g(p()),g(v()),g(x()),localStorage.removeItem("walletName"),localStorage.removeItem("userData"),sessionStorage.removeItem("wallet"),s("Wallet is now disconnected!","Disconnect Wallet!"),console.log(e)}),[g,s]),k=Object(r.useCallback)(Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if({},t={walletAddress:O,data:{name:n.name,icon:n.icon,url:n.url}},sessionStorage.setItem("wallet",JSON.stringify(t)),g(m(t)),h){e.next=7;break}return e.next=7,f({walletAddress:O,publicKey:a.toString()});case 7:l("".concat(n.name," wallet connected successfully."),"Wallet Connected!");case 8:case"end":return e.stop()}}),e)}))),[l,n,g,O,f,a]);Object(r.useEffect)((function(){O&&k()}),[O,k]);var C=Object(r.useCallback)((function(e){if(["WalletNotFoundError","WalletNotInstalledError","WalletNotReadyError"].includes(e.name)){var t=localStorage.getItem("walletName"),n={};Object(ge.a)(t)||(n=o.find((function(e){return e.name===t}))),s("Please install and initialize ".concat(n.name," wallet extension first,"),"Wallet is not installed !")}else u(e.message?"".concat(e.name,": ").concat(e.message):e.name),console.log(e)}),[u,s,o]);return Object(r.useEffect)((function(){if(t)return t.on("disconnect",w),t.on("error",C),function(){t.off("disconnect",w),t.off("error",C)}}),[t,w,C]),Object(J.jsx)(J.Fragment,{})})),ve=pe,we=n(17),ke=n(292),Ce=n(279),ye=n(34),Se=n(37),Ee=["fillColor"],_e={CopyIcon:n(228).default,WalletDisconnectIcon:n(229).default};function Te(e){var t=e.fillColor,n=Object(Se.a)(e,Ee);return Object(J.jsx)("svg",Object(ne.a)(Object(ne.a)({xmlns:"http://www.w3.org/2000/svg",width:"115",height:"18",fill:"none",viewBox:"0 0 115 18"},n),{},{children:Object(J.jsx)("path",{fill:t,d:"M12.048 14.24h-6L5.136 17H.192L6.36.08h5.424L17.928 17H12.96l-.912-2.76zm-1.176-3.6L9.048 5.168l-1.8 5.472h3.624zm21.957-4.92c0 1.024-.24 1.96-.72 2.808-.464.832-1.176 1.504-2.136 2.016-.944.496-2.104.744-3.48.744h-2.328V17h-4.704V.08h7.032c1.36 0 2.512.24 3.456.72.96.48 1.68 1.144 2.16 1.992.48.848.72 1.824.72 2.928zm-6.792 1.824c1.328 0 1.992-.608 1.992-1.824 0-1.232-.664-1.848-1.992-1.848h-1.872v3.672h1.872zm13.386-3.696v2.76h5.4v3.576h-5.4v3.048h6.12V17H34.719V.08h10.824v3.768h-6.12zM58.451 17l-3.288-4.776L52.355 17h-5.352L52.5 8.336 46.811.08h5.544l3.192 4.656L58.283.08h5.352L58.211 8.6l5.784 8.4h-5.544zM80.754.08V17H76.05v-6.792h-5.736V17H65.61V.08h4.704v6.36h5.736V.08h4.704zm7.3 0v9.816c0 .912.208 1.616.624 2.112.432.496 1.08.744 1.944.744.864 0 1.512-.248 1.944-.744.448-.512.672-1.216.672-2.112V.08h4.704v9.816c0 1.552-.328 2.88-.984 3.984a6.364 6.364 0 01-2.688 2.472c-1.12.544-2.368.816-3.744.816-1.376 0-2.608-.272-3.696-.816-1.072-.56-1.92-1.384-2.544-2.472-.608-1.088-.912-2.416-.912-3.984V.08h4.68zm23.278 8.232c.992.224 1.776.72 2.352 1.488.592.752.888 1.616.888 2.592 0 1.44-.496 2.568-1.488 3.384-.992.816-2.384 1.224-4.176 1.224h-8.376V.08h8.112c1.728 0 3.08.384 4.056 1.152.992.768 1.488 1.848 1.488 3.24 0 .992-.264 1.824-.792 2.496-.512.656-1.2 1.104-2.064 1.344zM105.236 6.8h2.376c1.184 0 1.776-.488 1.776-1.464 0-1.008-.592-1.512-1.776-1.512h-2.376V6.8zm2.736 6.408c1.184 0 1.776-.496 1.776-1.488 0-.512-.16-.904-.48-1.176-.304-.272-.744-.408-1.32-.408h-2.712v3.072h2.736z"})}))}function Me(e){var t=le(),n=t.colorMode,r=t.colorPlates,o=a.a.useState(r.lighterDark),c=Object(V.a)(o,2),l=c[0],i=c[1],s=a.a.useState("none"),u=Object(V.a)(s,2),d=u[0],b=u[1];return Object(J.jsxs)("svg",Object(ne.a)(Object(ne.a)({width:36,height:36,viewBox:"0 0 36 36",fill:"none",onMouseEnter:function(e){i(r.textOnBg),b("light"===n?r.lightGray:"none")},onMouseLeave:function(){i(r.lighterDark),b("none")},xmlns:"http://www.w3.org/2000/svg"},e),{},{children:[Object(J.jsx)("circle",{cx:18,cy:18,r:17.5,fill:d,stroke:l}),Object(J.jsx)("path",{d:"M18 13.148a.773.773 0 01-.773-.773v-1.688a.773.773 0 111.546 0v1.688a.773.773 0 01-.773.773zM18 26.086a.773.773 0 01-.773-.773v-1.688a.773.773 0 111.546 0v1.688a.773.773 0 01-.773.773zM21.977 14.797a.774.774 0 01-.547-1.32l1.194-1.193a.773.773 0 011.093 1.093l-1.193 1.194a.773.773 0 01-.547.226zM12.829 23.945a.773.773 0 01-.547-1.32l1.194-1.194a.774.774 0 111.093 1.094l-1.193 1.193a.772.772 0 01-.547.227zM25.313 18.773h-1.688a.773.773 0 110-1.546h1.688a.773.773 0 110 1.546zM12.375 18.773h-1.688a.773.773 0 110-1.546h1.688a.773.773 0 110 1.546zM23.17 23.944a.772.772 0 01-.547-.227l-1.193-1.193a.773.773 0 011.094-1.094l1.193 1.194a.774.774 0 01-.546 1.32zM14.023 14.797a.769.769 0 01-.547-.226l-1.193-1.194a.773.773 0 011.094-1.093l1.193 1.193a.774.774 0 01-.547 1.32zM18 21.586a3.586 3.586 0 110-7.172 3.586 3.586 0 010 7.172z",fill:l})]}))}function Ne(e){var t=le(),n=t.colorMode,r=t.colorPlates,o=a.a.useState(r.lighterDark),c=Object(V.a)(o,2),l=c[0],i=c[1],s=a.a.useState("none"),u=Object(V.a)(s,2),d=u[0],b=u[1];return Object(J.jsxs)("svg",Object(ne.a)(Object(ne.a)({width:36,height:36,viewBox:"0 0 36 36",fill:"none",onMouseEnter:function(e){i(r.textOnBg),b("light"===n?r.lightGray:"none")},onMouseLeave:function(){i(r.lighterDark),b("none")},xmlns:"http://www.w3.org/2000/svg"},e),{},{children:[Object(J.jsx)("circle",{cx:18,cy:18,r:17.5,fill:d,stroke:l}),Object(J.jsx)("g",{clipPath:"url(#clip0_1607_26340)",children:Object(J.jsx)("path",{d:"M18 18a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0-7.5a3 3 0 110 5.999 3 3 0 010-5.999zm0 9a6.758 6.758 0 00-6.75 6.75.75.75 0 101.5 0 5.25 5.25 0 1110.5 0 .75.75 0 101.5 0A6.758 6.758 0 0018 19.5z",fill:l})}),Object(J.jsx)("defs",{children:Object(J.jsx)("clipPath",{id:"clip0_1607_26340",children:Object(J.jsx)("path",{fill:l,transform:"translate(9 9)",d:"M0 0H18V18H0z"})})})]}))}function De(e){var t=le(),n=t.colorMode,r=t.colorPlates,o=a.a.useState(r.lighterDark),c=Object(V.a)(o,2),l=c[0],i=c[1],s=a.a.useState("none"),u=Object(V.a)(s,2),d=u[0],b=u[1];return Object(J.jsxs)("svg",Object(ne.a)(Object(ne.a)({width:36,height:36,viewBox:"0 0 36 36",fill:"none",onMouseEnter:function(e){i(r.textOnBg),b("light"===n?r.lightGray:"none")},onMouseLeave:function(){i(r.lighterDark),b("none")},xmlns:"http://www.w3.org/2000/svg"},e),{},{children:[Object(J.jsx)("circle",{cx:18,cy:18,r:17.5,fill:d,stroke:l}),Object(J.jsx)("path",{d:"M23.625 14.063h-11.25c-.932 0-1.688.755-1.688 1.687v6.75c0 .932.756 1.688 1.688 1.688h11.25c.932 0 1.688-.756 1.688-1.688v-6.75c0-.932-.756-1.688-1.688-1.688z",stroke:l,strokeWidth:1.5,strokeLinejoin:"round"}),Object(J.jsx)("path",{d:"M23.462 14.063v-1.055a1.758 1.758 0 00-2.087-1.726l-9.259 1.58a1.758 1.758 0 00-1.428 1.728v1.723",stroke:l,strokeWidth:1.5,strokeLinejoin:"round"}),Object(J.jsx)("path",{d:"M21.938 20.25a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25z",fill:l})]}))}function Ae(e){var t=le(),n=t.colorMode,r=t.colorPlates,o=a.a.useState(r.lighterDark),c=Object(V.a)(o,2),l=c[0],i=c[1],s=a.a.useState("none"),u=Object(V.a)(s,2),d=u[0],b=u[1];return Object(J.jsxs)("svg",Object(ne.a)(Object(ne.a)({width:36,height:36,viewBox:"0 0 36 36",fill:"none",onMouseEnter:function(e){i(r.textOnBg),b("light"===n?r.lightGray:"none")},onMouseLeave:function(){i(r.lighterDark),b("none")},xmlns:"http://www.w3.org/2000/svg"},e),{},{children:[Object(J.jsx)("circle",{cx:18,cy:18,r:17.5,fill:d,stroke:l}),Object(J.jsx)("path",{d:"M18.281 25.874a8.156 8.156 0 01-8.156-8.156c0-3.305 1.898-6.268 4.838-7.547a.561.561 0 01.74.74c-.337.775-.515 1.768-.515 2.87a7.04 7.04 0 007.03 7.03c1.102 0 2.095-.178 2.87-.515a.561.561 0 01.74.74c-1.28 2.94-4.242 4.838-7.547 4.838z",fill:l})]}))}function Pe(){return Object(J.jsx)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(J.jsx)("path",{d:"M15 18L9 12L15 6",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})})}var Fe,We,ze,Be,Le,Ie,He,Re,Ge="/sign-up",Ke=n(293),Ue=n(276),Ve=n(285),Je=n(287),Xe=n(288),qe=n(289),Qe=["children"],Ye=function(e){var t=e.children,n=Object(Se.a)(e,Qe);return Object(J.jsx)(Ke.a,Object(ne.a)(Object(ne.a)({fixed:!0,disableGutters:!0},n),{},{children:t}))},Ze=(Object(Ue.a)("input")(Fe||(Fe=Object(ee.a)(["\n\tfont-weight: 400;\n\tfont-size: 1rem;\n\tline-height: 1.4375em;\n\tbackground: transparent;\n\tborder: none;\n\toutline: none !important;\n\tpadding: 8px 15px;\n\tpadding-left: 0;\n\ttransition: width 300ms ease;\n\twidth: 330px;\n\t&:focus {\n\t\toutline: none;\n\t\twidth: 350px;\n\t\ttransition: width 200ms ease-out;\n\t}\n"]))),Object(Ue.a)("button")(We||(We=Object(ee.a)(["\n\tborder-radius: 50%;\n\toutline: none !important;\n\tbackground: transparent;\n\tborder: none;\n\tmargin-left: 18px;\n\tcursor: pointer;\n\t&.forWalletIcon{\n\t\tborder-radius:50%;\n\t\twidth:36px;\n\t\theight:36px;\n\t\tborder:1.5px solid var(--lighterDark)\n\t}\n"])))),$e=(Object(Ue.a)(ye.b)(ze||(ze=Object(ee.a)(["\n\tmargin-left: 18px;\n"]))),Object(Ue.a)("p",{shouldForwardProp:function(e){return"gradient"!==e&&"background"!==e},name:"GradientSectionTitle",slot:"Root"})(Be||(Be=Object(ee.a)(["\n\tbackground: ",';\n\tbackground-clip: border-box;\n\t-webkit-background-clip: text;\n\t-webkit-text-fill-color: transparent;\n\tfont-weight: 800;\n\tfont-size: 17px;\n\tline-height: 22px;\n\tposition: relative;\n\tmargin-top: 15px;\n\ttext-transform: uppercase;\n\t&::after{\n\t\tcontent: "";\n    position: absolute;\n    height: 1px;\n    width: 54px;\n    left: 105px;\n    background: ',";\n    transform: rotate(180deg);\n    top: 10px;\n}\n\t}\n"])),(function(e){var t;return null!==(t=e.gradient)&&void 0!==t?t:"linear-gradient(89.79deg, #00ffa3 0.17%, #dc1fff 10.82%)"}),(function(e){var t;return null!==(t=e.gradient)&&void 0!==t?t:"linear-gradient(89.79deg, #00ffa3 0.17%, #dc1fff 10.82%)"})),Object(Ue.a)(Ve.a)(Le||(Le=Object(ee.a)(["\n  background: transparent;\n  padding: 12px 20px;\n  font-size: 17px;\n  border: none;\n  outline: none;\n  color: var(--fontColor);\n  cursor: pointer;\n  margin-right: 12px;\n  font-weight: 400;\n  min-width: 100px;\n  &:hover {\n    color: var(--secondaryColor);\n  }\n  &.Mui-selected {\n    color: var(--secondaryColor);\n    font-weight: 500;\n    border: 1px solid var(--darkGray);\n    border-bottom: none;\n    border-radius: 8px 8px 0 0;\n    min-width: 100px;\n  }\n"]))),Object(Ue.a)(Je.a)(Ie||(Ie=Object(ee.a)(["\n  border-bottom: 1px solid var(--darkGray);\n"]))),Object(Ue.a)(Xe.a)(He||(He=Object(ee.a)([""]))),Object(Ue.a)(qe.a)(Re||(Re=Object(ee.a)([""]))),n(232),function(){var e=a.a.useState(null),t=Object(V.a)(e,2),n=t[0],o=t[1],c=Object(be.b)(),l=c.wallet,s=c.disconnect,u=Q().addSuccess,d=Object(i.c)(w),b=Boolean(n),j=Object(r.useCallback)((function(){var e,t;navigator.clipboard.writeText(d.walletAddress),u("Wallet address ".concat((null===(e=d.walletAddress)||void 0===e?void 0:e.slice(0,4))+".."+(null===(t=d.walletAddress)||void 0===t?void 0:t.slice(-4))," added to clipboard successfully."),"Address copied."),o(null)}),[u,d]),f=Object(r.useCallback)((function(){s().catch((function(e){})),o(null)}),[s]);return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(Ze,{id:"walletOptions-button","aria-controls":"walletOptions-menu","aria-haspopup":"true","aria-expanded":b?"true":void 0,onClick:function(e){o(e.currentTarget)},className:"forWalletIcon",type:"button",children:Object(J.jsx)("img",{width:"18",src:null===l||void 0===l?void 0:l.icon,alt:null===l||void 0===l?void 0:l.name})}),Object(J.jsx)(Ce.a,{id:"walletOptions-menu",anchorEl:n,open:b,onClose:function(){o(null)},anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-18,horizontal:"left"},PaperProps:{sx:{background:"transparent",borderRadius:0},className:"browseSubmenu"},children:Object(J.jsxs)("div",{className:"browseSubmenu__base",children:[Object(J.jsxs)("div",{className:"browseSubmenu__item tf-button2",onClick:j,children:[Object(J.jsx)("img",{width:20,src:_e.CopyIcon,alt:"I"})," Copy Address"]}),Object(J.jsxs)("div",{className:"browseSubmenu__item tf-button2",onClick:f,children:[Object(J.jsx)("img",{width:20,src:_e.WalletDisconnectIcon,alt:"I"})," ","Disconnect"]})]})})]})}),et=function(){var e=a.a.useState(null),t=Object(V.a)(e,2),n=t[0],o=t[1],c=Object(be.b)(),l=c.wallets,i=c.select,s=Boolean(n),u=Object(we.f)();Object(r.useEffect)((function(){return o(null)}),[u]);var d=Object(r.useCallback)((function(e){i(e),o(null)}),[i]);return Object(J.jsxs)(a.a.Fragment,{children:[Object(J.jsx)(Ze,{id:"walletConnect-button","aria-controls":"walletConnect-menu","aria-haspopup":"true","aria-expanded":s?"true":void 0,onClick:function(e){o(e.currentTarget)},type:"button",children:Object(J.jsx)(De,{})}),Object(J.jsx)(Ce.a,{id:"walletConnect-menu",anchorEl:n,open:s,onClose:function(){o(null)},anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-18,horizontal:"left"},PaperProps:{sx:{background:"transparent",borderRadius:0},className:"browseSubmenu"},children:Object(J.jsx)("div",{className:"browseSubmenu__base",children:l.map((function(e){return Object(J.jsxs)("div",{className:"browseSubmenu__item tf-button2",onClick:function(t){return d(e.name)},children:[Object(J.jsx)("img",{width:20,src:e.icon,alt:"I"})," ",e.name]},e.name)}))})})]})};function tt(e){var t=e.isApexHubHeader,n=(e.isAdminHeader,le()),r=n.colorPlates,a=n.defaultLightColors,o=n.changeColorMode,c=n.colorMode,l=n.defaultDarkColors,s=Object(i.c)(w),u=Object(be.b)().ready,d=me();d.isAdmin,d.authToken;return Object(J.jsx)(ke.a,{component:"header",elevation:1,sx:{backgroundColor:r.bgColor,borderRadius:0},className:"apexDucks__header",children:Object(J.jsx)(Ye,{sx:{height:"100%"},children:Object(J.jsxs)("div",{className:"apexDucks__header__row",children:[Object(J.jsx)("div",{className:"apexDucks__header__row--logo",children:t?Object(J.jsx)(ye.b,{to:"/apexhub",children:Object(J.jsx)(Te,{fillColor:r.textOnBg})}):Object(J.jsx)(ye.b,{to:"/",children:Object(J.jsx)("h1",{children:"Logo"})})}),Object(J.jsxs)("div",{className:"apexDucks__header__row--utilities",children:[s&&u?Object(J.jsx)($e,{}):Object(J.jsx)(et,{}),Object(J.jsx)(nt,{}),"dark"===c&&Object(J.jsx)(Ze,{type:"button",onClick:function(){return o("light",a)},children:Object(J.jsx)(Me,{})}),"light"===c&&Object(J.jsx)(Ze,{type:"button",onClick:function(){return o("dark",l)},children:Object(J.jsx)(Ae,{})})]})]})})})}var nt=function(){var e,t,n=a.a.useState(null),o=Object(V.a)(n,2),c=o[0],l=o[1],i=me(),s=i.authToken,u=i.user,d=i.isAdmin,b=Object(we.g)(),j=Boolean(c),f=Object(we.f)();Object(r.useEffect)((function(){return l(null)}),[f]);return t=d?[{label:"My Account",path:"",key:"userSubMenu1"},{label:"My Account Settings",path:"",key:"userSubMenu2"}]:[{label:"My Profile",path:"",key:"userSubMenu1"},{label:"My Account Settings",path:"",key:"userSubMenu2"}],s&&u?Object(J.jsxs)(a.a.Fragment,{children:[Object(J.jsxs)(Ze,{id:"userOptions-button","aria-controls":"userOptions-menu","aria-haspopup":"true","aria-expanded":j?"true":void 0,onClick:function(e){l(e.currentTarget)},className:"afterAuthUserButton",type:"button",children:[Object(J.jsx)("span",{className:"afterAuthUserButton__dp",children:"U"}),Object(J.jsxs)("span",{className:"afterAuthUserButton__meta",children:[Object(J.jsx)("span",{className:"tf-overline",children:null!==(e=null===u||void 0===u?void 0:u.userName)&&void 0!==e?e:"....user_name"}),Object(J.jsx)("span",{className:"tf-button2",children:"4.2 SOL"})]})]}),Object(J.jsx)(Ce.a,{id:"userOptions-menu",anchorEl:c,open:j,onClose:function(){l(null)},anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-16,horizontal:"left"},PaperProps:{sx:{background:"transparent",borderRadius:0},className:"browseSubmenu"},children:Object(J.jsx)("div",{className:"browseSubmenu__base",children:t.map((function(e){return Object(J.jsx)(ye.b,{className:"browseSubmenu__item tf-button2",to:e.path,children:e.label},e.key)}))})})]}):Object(J.jsx)(Ze,{onClick:function(){return b(Ge)},type:"button",children:Object(J.jsx)(Ne,{})})};function rt(){return Object(J.jsxs)("div",{children:[Object(J.jsx)(l.a,{children:Object(J.jsx)("title",{children:"APEXDUCKS | Page not found 404"})}),"Sorry 404 ! Page Not Found ",Object(J.jsx)("br",{}),Object(J.jsx)(ye.b,{to:"/",children:"Go to home"})]})}var at;n(233);function ot(){return Object(J.jsx)(ct,{children:Object(J.jsx)("h1",{children:"Wallet Connected Sucessfully"})})}var ct=Object(Ue.a)("div")(at||(at=Object(ee.a)(["\n  width:100%;\n  height:calc(100vh - 70px);\n  display:flex;\n  align-items:center;\n  justify-content:center;\n"])));function lt(){var e=Object(we.g)(),t=Object(be.b)(),n=t.wallets,r=t.select,a=t.publicKey,o=t.ready;return a&&o?Object(J.jsx)(ot,{}):Object(J.jsxs)("div",{id:"connectWallet",className:"connectWallet",children:[Object(J.jsx)(l.a,{children:Object(J.jsx)("title",{children:"APEXDUCKS || Connect to wallet"})}),Object(J.jsxs)(Ye,{children:[Object(J.jsx)("div",{className:"backButton",children:Object(J.jsxs)("button",{type:"button",onClick:function(){return e(-1)},className:"view-all",children:[Object(J.jsx)(Pe,{}),Object(J.jsx)("span",{className:"tf-button2",children:"Back"})]})}),Object(J.jsxs)("div",{className:"content",children:[Object(J.jsx)("h3",{className:"tf-h3",children:"Please connect your wallet"}),Object(J.jsx)("p",{className:"tf-body1",children:"Connect with one of our available wallet providers"}),Object(J.jsx)("div",{className:"walletCards",children:n.map((function(e){return Object(J.jsxs)("div",{className:"card",onClick:function(){return r(e.name)},children:[Object(J.jsx)("img",{width:"40",src:e.icon,alt:e.name}),Object(J.jsx)("h3",{className:"tf-h3",children:e.name})]})}))})]})]})]})}function it(){return Object(J.jsxs)("div",{className:"",id:"AppexDucks",children:[Object(J.jsx)(tt,{}),Object(J.jsx)("main",{children:Object(J.jsx)(we.a,{})})]})}function st(){return Object(J.jsxs)(we.d,{children:[Object(J.jsx)(we.b,{path:"/",element:Object(J.jsx)(it,{}),children:Object(J.jsx)(we.b,{index:!0,element:Object(J.jsx)(lt,{})})}),Object(J.jsx)(we.b,{path:"/*",element:Object(J.jsx)(rt,{})})]})}var ut=function(){return Object(J.jsxs)(l.a,{children:[Object(J.jsx)("title",{children:"APEXDUCKS"}),Object(J.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),Object(J.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:!0}),Object(J.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",rel:"stylesheet"})]})},dt=function(){return Object(J.jsx)(i.a,{store:L,children:Object(J.jsx)(q,{children:Object(J.jsx)(ve,{children:Object(J.jsxs)(ce,{children:[Object(J.jsx)(ie,{}),Object(J.jsx)(ut,{}),Object(J.jsx)(st,{}),Object(J.jsx)(Z,{})]})})})})},bt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,294)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),o(e),c(e)}))};c.a.render(Object(J.jsx)(a.a.StrictMode,{children:Object(J.jsx)(ye.a,{children:Object(J.jsx)(dt,{})})}),document.getElementById("root")),bt()}},[[234,1,2]]]);
//# sourceMappingURL=main.26c27f75.chunk.js.map