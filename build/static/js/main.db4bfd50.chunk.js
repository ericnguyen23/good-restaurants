(this["webpackJsonpgood-restaurant"]=this["webpackJsonpgood-restaurant"]||[]).push([[0],{22:function(t,e,n){},23:function(t,e,n){},44:function(t,e,n){"use strict";n.r(e);var c=n(2),r=n.n(c),a=n(15),s=n.n(a),o=(n(22),n(17)),i=n(16),u=n(6),l=(n(23),n(0)),j=n(25).default;var h=function(){var t=Object(c.useState)(""),e=Object(u.a)(t,2),n=e[0],r=e[1],a=Object(c.useState)([]),s=Object(u.a)(a,2),h=s[0],b=s[1],d=Object(c.useRef)("");return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Great Restaurants Search!"}),Object(l.jsx)("p",{children:"Enter the city and we'll return 50 of the best restaurants in your area, rated 4.5 or higher."}),Object(l.jsx)("h3",{children:"Search By City:"}),Object(l.jsxs)("form",{children:[Object(l.jsx)("label",{children:"City"}),Object(l.jsx)("input",{type:"text",ref:d,onBlur:function(t){r(t.target.value)}}),Object(l.jsx)("button",{onClick:function(t){t.preventDefault(),j.get("https://api.yelp.com/v3/businesses/search?location=".concat(n),{headers:{Authorization:"Bearer ".concat("3a4CK13_M-e0q_V5BCw4JH5DZS1vs2LoGZo0FlBtnlOkHR1CsdPs_yC8axoBkA1Fcp6XmoWHBG8mUn2ygYuvXhIvx7AEtOFKZVsqx2jUmNC__GJSeJ4jo4EnDO4rYXYx")},params:{limit:50}}).then((function(t){var e=t.data.businesses;console.log(e);var n,c=Object(i.a)(e);try{var r=function(){var t=n.value;t.rating>=4.5&&b((function(e){return[].concat(Object(o.a)(e),[t])}))};for(c.s();!(n=c.n()).done;)r()}catch(a){c.e(a)}finally{c.f()}})).then(b([])).catch((function(t){return console.log("error")}))},children:"Submit"})]}),h.map((function(t){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:t.name}),Object(l.jsxs)("p",{children:[t.rating," Stars"]})]},t.id)}))]})},b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),c(t),r(t),a(t),s(t)}))};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root")),b()}},[[44,1,2]]]);
//# sourceMappingURL=main.db4bfd50.chunk.js.map