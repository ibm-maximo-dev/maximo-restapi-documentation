"use strict";(self.webpackChunkmas_playbook=self.webpackChunkmas_playbook||[]).push([[2004],{3624:function(e,t,a){a.d(t,{Z:function(){return N}});var o=a(7294),n=a(8650),l=a.n(n),r=a(1597),s=a(811),i=a(87),c=a(5900),m=a.n(c),h=function(e){var t,a=e.title,n=e.theme,l=e.tabs,r=void 0===l?[]:l;return o.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=r.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===n,t))},o.createElement("div",{className:"bx--grid"},o.createElement("div",{className:"bx--row"},o.createElement("div",{className:"bx--col-lg-12"},o.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},p=function(e){var t=e.relativePagePath,a=e.repository,n=(0,r.useStaticQuery)("1364590287").site.siteMetadata.repository,l=a||n,s=l.baseUrl,i=l.subDirectory,c=s+"/edit/"+l.branch+i+"/src/pages"+t;return s?o.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},o.createElement("div",{className:"bx--col"},o.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},d=a(4703),u=a(1721),g=function(e){function t(){return e.apply(this,arguments)||this}return(0,u.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,s=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),i=a===s,c=new RegExp(s+"/?(#.*)?$"),h=n.replace(c,a);return o.createElement("li",{key:e,className:m()((t={},t["PageTabs-module--selected-item--aBB0K"]=i,t),"PageTabs-module--list-item--024o6")},o.createElement(r.Link,{className:"PageTabs-module--link--Kz-7R",to:""+h},e))}));return o.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},o.createElement("div",{className:"bx--grid"},o.createElement("div",{className:"bx--row"},o.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},o.createElement("nav",{"aria-label":t},o.createElement("ul",{className:"PageTabs-module--list--xLqxG"},i))))))},t}(o.Component),f=g,k=a(7296),y=a(5387),b=a(3732),w=function(e){var t=e.date,a=new Date(t);return t?o.createElement(b.X2,{className:"last-modified-date-module--row--XJoYQ"},o.createElement(b.sg,null,o.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},N=function(e){var t=e.pageContext,a=e.children,n=e.location,c=e.Title,m=t.frontmatter,u=void 0===m?{}:m,g=t.relativePagePath,b=t.titleType,N=u.tabs,E=u.title,v=u.theme,T=u.description,x=u.keywords,P=u.date,C=(0,y.Z)().interiorTheme,A=(0,r.useStaticQuery)("2456312558").site.pathPrefix,I=A?n.pathname.replace(A,""):n.pathname,L=N?I.split("/").filter(Boolean).slice(-1)[0]||l()(N[0],{lower:!0}):"",G=v||C;return o.createElement(i.Z,{tabs:N,homepage:!1,theme:G,pageTitle:E,pageDescription:T,pageKeywords:x,titleType:b},o.createElement(h,{title:c?o.createElement(c,null):E,label:"label",tabs:N,theme:G}),N&&o.createElement(f,{title:E,slug:I,tabs:N,currentTab:L}),o.createElement(k.Z,{padded:!0},a,o.createElement(p,{relativePagePath:g}),o.createElement(w,{date:P})),o.createElement(d.Z,{pageContext:t,location:n,slug:I,tabs:N,currentTab:L}),o.createElement(s.Z,null))}},6240:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return m}});var o=a(3366),n=(a(7294),a(4983)),l=a(3624),r=["components"],s={},i={_frontmatter:s},c=l.Z;function m(e){var t=e.components,a=(0,o.Z)(e,r);return(0,n.kt)(c,Object.assign({},i,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Maximo Asset Management has many hierarchical objects, such as ",(0,n.kt)("inlineCode",{parentName:"p"},"Locations"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Workorders"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Assets"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Failure codes"),", etc and there are subtle differences between each of these hierarchies."),(0,n.kt)("h2",null,"Location Hierarchy"),(0,n.kt)("p",null,"The location hierarchy is always scoped under the ",(0,n.kt)("inlineCode",{parentName:"p"},"LOCSYSTEM")," object. Effectively, a given location can belong to multiple systems, and hence different hierarchies. The API is designed where the list of systems that is available for the user is first with the hierarchy under the scope of that system."),(0,n.kt)("p",null,"For example, you can get a list of systems for the ",(0,n.kt)("inlineCode",{parentName:"p"},"MXAPILOCSYSTEM"),"object structure by using the following API:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"GET /os/mxapilocsystem?oslc.select=systemid,description\n")),(0,n.kt)("p",null,"With this API, you go to the top (",(0,n.kt)("inlineCode",{parentName:"p"},"root"),") location under that system and select the system that you want to drill down using the href of the system record. The following API call shows how to do that:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"GET /os/mxapilocsystem/{id}/topleveloc.mxapioperloc?oslc.select=systemid,description\n")),(0,n.kt)("p",null,"Here ",(0,n.kt)("inlineCode",{parentName:"p"},"toplevelloc")," is the name of the relation from ",(0,n.kt)("inlineCode",{parentName:"p"},"LOCSYSTEM")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"LOCATIONS")," table. The object structure name is added to the relation name to get the response as the ",(0,n.kt)("inlineCode",{parentName:"p"},"MXAPIOPERLOC")," os. This helps to jump from one object structure to the other using the rest APIs."),(0,n.kt)("p",null,"To drill down under that top level location, you can use the href of the location object and append the relation name ",(0,n.kt)("strong",{parentName:"p"},"syschildren"),"  with the object structure ",(0,n.kt)("strong",{parentName:"p"},"mxapioperloc")," (to keep within the context of the ",(0,n.kt)("inlineCode",{parentName:"p"},"mxapioperloc")," OS). The following API shows this format:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"GET /os/mxapioperloc/{id}/syschildren.mxapioperloc?ctx=systemid=<systemid>\n")),(0,n.kt)("p",null,"The a query parameter ",(0,n.kt)("inlineCode",{parentName:"p"},"ctx")," is also used with the value of ",(0,n.kt)("inlineCode",{parentName:"p"},"systemid=<systemid>")," for the system that is being drilled down into. This is needed because a location can belong to multiple systems and hence multiple hierarchies. So when drilling down into the hierarchy, the systemid context is required."),(0,n.kt)("p",null,"You can take any of the locations in the response and drill down by following the API described in the previous example. Always remember to set the ",(0,n.kt)("inlineCode",{parentName:"p"},"ctx")," query parameter with the right ",(0,n.kt)("inlineCode",{parentName:"p"},"systemid")," or the API defaults to the primary system for that location for the drill down."),(0,n.kt)("p",null,"These collection responses can be filtered, sorted, or paged just like any otheOSos query response. So if you are building a tree structure in the UI using these APIs, you can introduce a sorting or filtering function at each tree node (which is a location)."),(0,n.kt)("h2",null,"General Ledger component hierarchies"),(0,n.kt)("p",null,"General Ledger (GL) component hierarchies provides another flavor of hierarchies in Maximo Asset Management. The general ledger account consists of segments (gl components), which follow a certain hierarchy as defined in the chartofaccounts and glcomponents table. The glcomponents table defines all the components and their gl order. To specify a general ledger account, you need an API to find the segments in a hierarchical way (following the gl order). The following APIs describes how to find segments:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"GET /oslc/glcomp?lean=1&oslc.select=*\n")),(0,n.kt)("p",null,"The response for this API is a list of GL segments at the top level, that is GL order 0. For each of the records, you can look for the childcompref URI. If you do a GET on that URL, you get the child records for that segment. Note that the JSON also has a responseInfo that provides some metadata about the current segment (glsegmentcurrent) as well as the total number of segments (glsegmentcount). The ",(0,n.kt)("strong",{parentName:"p"},"glcompsofar")," describes the account that has been selected so far. At the start, the  metacharacters ? (as configured) and the segment separators to represent the account are used. The GET on the childcompref would look like the following API call:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"GET /oslc/glcomp?glcomp=<comp0>&oslc.select=*\n")),(0,n.kt)("p",null,"The collection of records you get would be the next set of segments that are valid for the segments selected so far as described in the glcomp query parameter value. Note the glcomp query parameter value is updated to point to the next set of segments. Internally, the | separator for the segments are used and hence the childcompref URL for the third set of segments look like"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"GET /oslc/glcomp?glcomp=<comp0|comp1>&oslc.select=*\n")),(0,n.kt)("p",null,"You can also specify the ",(0,n.kt)("inlineCode",{parentName:"p"},"glcompsofar")," value to drill down too as shown in the following API call:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"GET /oslc/glcomp?glvalue=<comp0-comp1-???>&oslc.select=*\n")),(0,n.kt)("p",null,"Note the use of ",(0,n.kt)("inlineCode",{parentName:"p"},"glvalue")," query parameter to get the values. This will give the exact same results as the ",(0,n.kt)("inlineCode",{parentName:"p"},"glcomp=comp0|comp1")," api call."),(0,n.kt)("p",null,"As is the case with the other hierarchies, you can sort (",(0,n.kt)("inlineCode",{parentName:"p"},"oslc.orderBy"),") and filter (",(0,n.kt)("inlineCode",{parentName:"p"},"oslc.where"),") bu using these APIs."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-hierarchical-hierarchical-mdx-69fcb96c0cdd6daf6104.js.map