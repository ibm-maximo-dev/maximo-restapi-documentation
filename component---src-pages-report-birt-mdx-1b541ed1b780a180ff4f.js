"use strict";(self.webpackChunkmas_playbook=self.webpackChunkmas_playbook||[]).push([[56],{3624:function(e,t,a){a.d(t,{Z:function(){return w}});var r=a(7294),n=a(8650),l=a.n(n),o=a(1597),i=a(811),s=a(87),p=a(5900),c=a.n(p),m=function(e){var t,a=e.title,n=e.theme,l=e.tabs,o=void 0===l?[]:l;return r.createElement("div",{className:c()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=o.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===n,t))},r.createElement("div",{className:"bx--grid"},r.createElement("div",{className:"bx--row"},r.createElement("div",{className:"bx--col-lg-12"},r.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},d=function(e){var t=e.relativePagePath,a=e.repository,n=(0,o.useStaticQuery)("1364590287").site.siteMetadata.repository,l=a||n,i=l.baseUrl,s=l.subDirectory,p=i+"/edit/"+l.branch+s+"/src/pages"+t;return i?r.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},r.createElement("div",{className:"bx--col"},r.createElement("a",{className:"EditLink-module--link--IDrl1",href:p},"Edit this page on GitHub"))):null},u=a(4703),g=a(1721),h=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),s=a===i,p=new RegExp(i+"/?(#.*)?$"),m=n.replace(p,a);return r.createElement("li",{key:e,className:c()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},r.createElement(o.Link,{className:"PageTabs-module--link--Kz-7R",to:""+m},e))}));return r.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},r.createElement("div",{className:"bx--grid"},r.createElement("div",{className:"bx--row"},r.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},r.createElement("nav",{"aria-label":t},r.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(r.Component),f=h,b=a(7296),E=a(5387),k=a(3732),v=function(e){var t=e.date,a=new Date(t);return t?r.createElement(k.X2,{className:"last-modified-date-module--row--XJoYQ"},r.createElement(k.sg,null,r.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},w=function(e){var t=e.pageContext,a=e.children,n=e.location,p=e.Title,c=t.frontmatter,g=void 0===c?{}:c,h=t.relativePagePath,k=t.titleType,w=g.tabs,N=g.title,T=g.theme,y=g.description,P=g.keywords,x=g.date,D=(0,E.Z)().interiorTheme,I=(0,o.useStaticQuery)("2456312558").site.pathPrefix,C=I?n.pathname.replace(I,""):n.pathname,L=w?C.split("/").filter(Boolean).slice(-1)[0]||l()(w[0],{lower:!0}):"",A=T||D;return r.createElement(s.Z,{tabs:w,homepage:!1,theme:A,pageTitle:N,pageDescription:y,pageKeywords:P,titleType:k},r.createElement(m,{title:p?r.createElement(p,null):N,label:"label",tabs:w,theme:A}),w&&r.createElement(f,{title:N,slug:C,tabs:w,currentTab:L}),r.createElement(b.Z,{padded:!0},a,r.createElement(d,{relativePagePath:h}),r.createElement(v,{date:x})),r.createElement(u.Z,{pageContext:t,location:n,slug:C,tabs:w,currentTab:L}),r.createElement(i.Z,null))}},225:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return i},default:function(){return c}});var r=a(3366),n=(a(7294),a(4983)),l=a(3624),o=["components"],i={},s={_frontmatter:i},p=l.Z;function c(e){var t=e.components,a=(0,r.Z)(e,o);return(0,n.kt)(p,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Starting 7609 REST apis support interfacing with BIRT reports. We provide 2 basic apis:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Get the list of available reports for a given user and a given application."),(0,n.kt)("li",{parentName:"ul"},"Generate a report for a given set of mbos.")),(0,n.kt)("p",null,"Below we show a sample of the “get list of reports” api for the MXAPIWODETAIL object structure with a sample response."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"GET /oslc/os/mxapiwodetail?action=listreports\n")),(0,n.kt)("p",null,"Expected Result:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n     "reportname": "woprint.rptdesign",\n     "description": "Work Order Details",\n     "genreport": "http://localhost:7001/maximo/oslc/os/MXAPIWODETAIL?action=genreport&reportname=woprint.rptdesign"\n  },\n  {\n     "reportname": "wotrack.rptdesign",\n     "description": "Work Order List",\n     "genreport": "http://localhost:7001/maximo/oslc/os/MXAPIWODETAIL?action=genreport&reportname=wotrack.rptdesign"\n  }\n]\n')),(0,n.kt)("p",null,"Note that for the object structure MXAPIWODETAIL, there is an associated auth app to which the reports need to get associated with. The  ",(0,n.kt)("inlineCode",{parentName:"p"},"genreport")," property contains the url for generating individual reports. "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"GET /oslc/os/MXAPIWODETAIL?action=genreport&reportname=woprint.rptdesign\n")),(0,n.kt)("p",null,"This will generate the report in the deafult format (PDF). You can specify other supported formats using query parameter ",(0,n.kt)("inlineCode",{parentName:"p"},"reportformat"),". We can filter the list of mbos using the ",(0,n.kt)("inlineCode",{parentName:"p"},"oslc.where")," query parameter. Additionally we can also add attachments to the generated report setting the ",(0,n.kt)("inlineCode",{parentName:"p"},"attachment")," query parameter to 1 (default value is 0 which implies no attachments). "),(0,n.kt)("p",null,"It also supports report parameters - as rest api query parameters, with the same name."),(0,n.kt)("p",null,"The generated pdf is returned as a downloadable file as response to this GET request."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-report-birt-mdx-1b541ed1b780a180ff4f.js.map