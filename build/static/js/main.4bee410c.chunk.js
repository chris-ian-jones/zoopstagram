(window.webpackJsonpfolder=window.webpackJsonpfolder||[]).push([[0],{135:function(e,t,n){e.exports=n(264)},140:function(e,t,n){},141:function(e,t,n){},264:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(28),c=n.n(o),l=(n(140),n(43)),i=n(22),u=(n(141),n(81)),s=n(273),p=n(265),m=n(23);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function d(){var e=Object(i.a)(["\n  margin: 40px 0 40px 0;\n"]);return d=function(){return e},e}var b=m.a.form(d());var h=function(e){var t=e.setSearchTerm,n=Object(r.useState)(""),o=Object(l.a)(n,2),c=o[0],i=o[1],m=function(e){i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(n,!0).forEach(function(t){Object(u.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},c,Object(u.a)({},e.target.name,e.target.value)))};return a.a.createElement(b,{onSubmit:function(e){return function(e){e.preventDefault(),t(c.search)}(e)}},a.a.createElement(s.a,{size:"massive",icon:"search",type:"text",name:"search",placeholder:"City",onChange:function(e){return m(e)}}),a.a.createElement(p.a,{color:"violet",size:"massive"},"Search"))},v=n(274),g=n(124),y=n(29);n(263);function E(){var e=Object(i.a)(["\n  display: flex;\n  justify-content: space-evenly;\n"]);return E=function(){return e},e}function O(){var e=Object(i.a)(["\n  margin: 0 2% 0 2%;\n  text-align: left;\n"]);return O=function(){return e},e}var j=Object(m.a)(v.a.Description)(O()),w=m.a.div(E()),x=function(e){var t=e.imageUrl,n=e.displayableAddress,r=e.price,o=e.shortDescription,c=e.numBathrooms,l=e.numBedrooms,i=e.detailsUrl,u=parseInt(r),s=o.length;return a.a.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer"},a.a.createElement(v.a,null,a.a.createElement(g.a,{src:t,wrapped:!0,ui:!1,alt:"House for sale"}),a.a.createElement(v.a.Content,null,a.a.createElement(v.a.Header,null,n),a.a.createElement(v.a.Meta,null,a.a.createElement("span",null,u>0?"\xa3".concat(u.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")):"")),a.a.createElement(j,null,a.a.createElement("span",null,s<600?o:""))),a.a.createElement(v.a.Content,{extra:!0},a.a.createElement(w,null,a.a.createElement("div",null,a.a.createElement(y.a,{name:"bath"}),c),a.a.createElement("div",null,a.a.createElement(y.a,{name:"bed"}),l)))))};function _(){var e=Object(i.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  align-items: baseline;\n  width: 100vw;\n  max-width: 100%;\n  margin: 40px 0 40px 0;\n"]);return _=function(){return e},e}var D=m.a.div(_()),P=function(e){var t=e.zooplaData;return a.a.createElement(D,null,t?t.map(function(e){return a.a.createElement(x,{key:e.details_url,imageUrl:e.image_url,displayableAddress:e.displayable_address,price:e.price,shortDescription:e.short_description,numBathrooms:e.num_bathrooms,numBedrooms:e.num_bedrooms,detailsUrl:e.details_url})}):"")};function S(){var e=Object(i.a)(["\n  font-size: 6rem;\n  color: #6A138E;\n"]);return S=function(){return e},e}var z=m.a.h1(S());var k=function(){var e=Object(r.useState)("Oxford"),t=Object(l.a)(e,2),n=t[0],o=t[1],c=Object(r.useState)([]),i=Object(l.a)(c,2),u=i[0],s=i[1];return Object(r.useEffect)(function(){fetch("http://api.zoopla.co.uk/api/v1/property_listings.js?area=".concat(n,"&page_size=100&api_key=").concat("6p2r2am6tabxsxb47avcrd9a")).then(function(e){return e.json()}).then(function(e){return s(e.listing)}).catch(function(e){return console.log("Fetch error: ",e)})},[n]),a.a.createElement("div",{className:"App"},a.a.createElement(z,null,"Zoopstagram"),a.a.createElement(h,{setSearchTerm:o}),a.a.createElement(P,{zooplaData:u}),a.a.createElement("img",{src:"https://www.zoopla.co.uk/static/images/mashery/powered-by-zoopla-150x73.png",width:"150",height:"73",title:"Property information powered by Zoopla",alt:"Property information powered by Zoopla",border:"0"}))};c.a.render(a.a.createElement(k,null),document.getElementById("root"))}},[[135,1,2]]]);
//# sourceMappingURL=main.4bee410c.chunk.js.map