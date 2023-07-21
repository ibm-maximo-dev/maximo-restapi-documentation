"use strict";(self.webpackChunkmas_playbook=self.webpackChunkmas_playbook||[]).push([[4612],{3624:function(e,t,a){a.d(t,{Z:function(){return v}});var n=a(7294),l=a(8650),o=a.n(l),r=a(1597),i=a(811),s=a(87),c=a(5900),d=a.n(c),u=function(e){var t,a=e.title,l=e.theme,o=e.tabs,r=void 0===o?[]:o;return n.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=r.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===l,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},m=function(e){var t=e.relativePagePath,a=e.repository,l=(0,r.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||l,i=o.baseUrl,s=o.subDirectory,c=i+"/edit/"+o.branch+s+"/src/pages"+t;return i?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},p=a(4703),h=a(1721),b=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,l=e.slug,i=l.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),s=a===i,c=new RegExp(i+"/?(#.*)?$"),u=l.replace(c,a);return n.createElement("li",{key:e,className:d()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},n.createElement(r.Link,{className:"PageTabs-module--link--Kz-7R",to:""+u},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component),g=b,f=a(7296),E=a(5387),w=a(3732),k=function(e){var t=e.date,a=new Date(t);return t?n.createElement(w.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(w.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},v=function(e){var t=e.pageContext,a=e.children,l=e.location,c=e.Title,d=t.frontmatter,h=void 0===d?{}:d,b=t.relativePagePath,w=t.titleType,v=h.tabs,y=h.title,T=h.theme,N=h.description,P=h.keywords,x=h.date,D=(0,E.Z)().interiorTheme,M=(0,r.useStaticQuery)("2456312558").site.pathPrefix,S=M?l.pathname.replace(M,""):l.pathname,j=v?S.split("/").filter(Boolean).slice(-1)[0]||o()(v[0],{lower:!0}):"",C=T||D;return n.createElement(s.Z,{tabs:v,homepage:!1,theme:C,pageTitle:y,pageDescription:N,pageKeywords:P,titleType:w},n.createElement(u,{title:c?n.createElement(c,null):y,label:"label",tabs:v,theme:C}),v&&n.createElement(g,{title:y,slug:S,tabs:v,currentTab:j}),n.createElement(f.Z,{padded:!0},a,n.createElement(m,{relativePagePath:b}),n.createElement(k,{date:x})),n.createElement(p.Z,{pageContext:t,location:l,slug:S,tabs:v,currentTab:j}),n.createElement(i.Z,null))}},814:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return i},default:function(){return d}});var n=a(3366),l=(a(7294),a(4983)),o=a(3624),r=["components"],i={},s={_frontmatter:i},c=o.Z;function d(e){var t=e.components,a=(0,n.Z)(e,r);return(0,l.kt)(c,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"In the previous section we talked about deleting child objects in an Object Structure resource. Any updation of the resources properties including adding, updating or deleting child objects is done under the update api for the resource. Deleting the resource (Object Structure root mbo) can be done using the sample api below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"DELETE /oslc/os/<os name>/{rest id}\n")),(0,l.kt)("p",null,"You will get a response of 200 OK if the delete is successful. We are also able to do the same using the following api below"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'POST /oslc/os/<os name>/{rest id} \nx-method-override: PATCH\n\n{\n  "_action":"Delete"\n}\n')),(0,l.kt)("p",null,"Note in certain cases some browsers do not allow the http DELETE and this POST equivalent is a good way to get around that."),(0,l.kt)("p",null,"It is also important to consider the fact that in Maximo, deleting a Mbo should internally delete the dependent child objects. The REST api merely invokes the delete routine on the Mbo, and is not responsible for what the mbo does internally to delete the dependent child objects."),(0,l.kt)("p",null,"Additionally there is an action api that can be leveraged to figure out if this Mbo can be deleted. This is needed to handle use cases where we would want to delete the resource in 2 steps ie to mark it for delete and then delete it later. To mark a resource for delete, we will at least need to verify if the resource can be deleted. Fortunately there is a Mbo call back api - canDelete() just for that purpose. This REST api sample below shows how to invoke that"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"GET /oslc/os/<os name>/{rest id}?action=system:candelete\n")),(0,l.kt)("p",null,"A 200 OK response would indicate that the resource can be deleted. Note this depends on the application Mbo implementing the canDelete method, which is not implemented by default in the Mbo framework. If delete is not allowed, the response would an error json indicating the reason behind it as determined by the application Mbo."),(0,l.kt)("p",null,"We will talk more about actions in REST api in the next section."))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-crud-delete-mdx-7e71c6cf9dc80c23a52a.js.map