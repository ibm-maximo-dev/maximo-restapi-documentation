"use strict";(self.webpackChunkmas_playbook=self.webpackChunkmas_playbook||[]).push([[9151],{3624:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(7294),l=a(8650),o=a.n(l),r=a(1597),s=a(811),i=a(87),c=a(5900),d=a.n(c),m=function(e){var t,a=e.title,l=e.theme,o=e.tabs,r=void 0===o?[]:o;return n.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=r.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===l,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},u=function(e){var t=e.relativePagePath,a=e.repository,l=(0,r.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||l,s=o.baseUrl,i=o.subDirectory,c=s+"/edit/"+o.branch+i+"/src/pages"+t;return s?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},h=a(4703),p=a(1721),k=function(e){function t(){return e.apply(this,arguments)||this}return(0,p.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,l=e.slug,s=l.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),i=a===s,c=new RegExp(s+"/?(#.*)?$"),m=l.replace(c,a);return n.createElement("li",{key:e,className:d()((t={},t["PageTabs-module--selected-item--aBB0K"]=i,t),"PageTabs-module--list-item--024o6")},n.createElement(r.Link,{className:"PageTabs-module--link--Kz-7R",to:""+m},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},i))))))},t}(n.Component),f=k,g=a(7296),b=a(5387),y=a(3732),N=function(e){var t=e.date,a=new Date(t);return t?n.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(y.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},w=function(e){var t=e.pageContext,a=e.children,l=e.location,c=e.Title,d=t.frontmatter,p=void 0===d?{}:d,k=t.relativePagePath,y=t.titleType,w=p.tabs,T=p.title,E=p.theme,x=p.description,v=p.keywords,P=p.date,S=(0,b.Z)().interiorTheme,L=(0,r.useStaticQuery)("2456312558").site.pathPrefix,A=L?l.pathname.replace(L,""):l.pathname,I=w?A.split("/").filter(Boolean).slice(-1)[0]||o()(w[0],{lower:!0}):"",C=E||S;return n.createElement(i.Z,{tabs:w,homepage:!1,theme:C,pageTitle:T,pageDescription:x,pageKeywords:v,titleType:y},n.createElement(m,{title:c?n.createElement(c,null):T,label:"label",tabs:w,theme:C}),w&&n.createElement(f,{title:T,slug:A,tabs:w,currentTab:I}),n.createElement(g.Z,{padded:!0},a,n.createElement(u,{relativePagePath:k}),n.createElement(N,{date:P})),n.createElement(h.Z,{pageContext:t,location:l,slug:A,tabs:w,currentTab:I}),n.createElement(s.Z,null))}},5068:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return i},default:function(){return u}});var n,l=a(3366),o=(a(7294),a(4983)),r=a(3624),s=["components"],i={},c=(n="InlineNotification",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),d={_frontmatter:i},m=r.Z;function u(e){var t=e.components,a=(0,l.Z)(e,s);return(0,o.kt)(m,Object.assign({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Attachments in Maximo are documents, files or images that are attached to a resource such as Asset or Service Request. The Maximo RESTful API supports the retrieval of attachments that are associated to resources."),(0,o.kt)("p",null,"To fetch, create, update or delete an attachment for resource by API, take MXAPIASSET as an example, you need,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Enable the Maximo attachments feature."),(0,o.kt)("li",{parentName:"ul"},"Configure the MXASSET object structure with the DOCLINKS MBO as a child to the ASSET object.")),(0,o.kt)("h2",null,"Fetch the attachments"),(0,o.kt)("p",null,"When you query a specific resource (using its ID) that has an attachment, you will get a doclinks URL returned for the attachment:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GET /oslc/os/mxapiasset/{rest id}?lean=1\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "assetnum": "1001",\n  "changedate": "1999-03-31T16:53:00-05:00",\n  "doclinks": {\n    "href": "oslc/os/mxapiasset/{rest id}/doclinks"\n  }\n}\n')),(0,o.kt)("p",null,"Using the doclinks url from the JSON data above, you will be get a list of attached documents (reference to those documents) along with the metadata."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GET oslc/os/mxapiasset/{rest id}/doclinks?lean=1\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "href": "oslc\\/os\\/mxapiasset\\/{rest id}\\/doclinks",\n  "member": [\n    {\n      "href": "oslc\\/os\\/mxapiasset\\/{rest id}\\/doclinks\\/75",\n      "localref": "oslc\\/os\\/mxapiasset\\/{rest id}\\/doclinks\\/0-75",\n      "describedBy": {\n        "identifier": "75",\n        "fileName": "linearasset_screenshot.png",\n        "upload": false,\n        "created": "2023-06-07T13:18:49-04:00",\n        "docType": "Attachments",\n        "changeby": "WILSON",\n        "format": {\n          "href": "http:\\/\\/purl.org\\/NET\\/mediatypes\\/image\\/png",\n          "label": "image\\/png"\n        },\n        "show": false,\n        "description": "linearasset_screenshot.png",\n        "ownerid": 53,\n        "ownertable": "ASSET",\n        "title": "1020",\n        "docinfoid": 57,\n        "copylinktowo": false,\n        "createby": "WILSON",\n        "urlType": "FILE",\n        "attachmentSize": 3045941,\n        "getlatestversion": true,\n        "printthrulink": true,\n        "modified": "2023-06-07T13:19:09-04:00",\n        "href": "oslc\\/os\\/mxapiasset\\/{rest id}\\/doclinks\\/meta\\/75",\n        "addinfo": false\n      }\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},".../doclinks/{id}")," url is the link to the actual attachment file. The content of the attachment could be fetched by,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GET oslc/os/mxapisset/{rest id}/doclinks/{id}\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},".../doclinks/meta/{id}")," url is the link to the metadata for the attachment file."),(0,o.kt)("h2",null,"Create the attachments"),(0,o.kt)("p",null,"The API supports the creation of attachments that are associated to resources. For example, you created an asset and now you want to attach a PDF file that describes the maintenance procedures for that asset."),(0,o.kt)("p",null,"To create a new attachment, you will need an doclinks URL for resource. As shown in fetching the attachment, take MXASSET as an example, the URL looks like as following,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"doclinks": {\n  "href": "oslc/os/mxapiasset/{asset rest id}/doclinks"\n},\n\n')),(0,o.kt)("p",null,"Note: in the current version of the API you can create an attachment for a resource(asset) only after the resource exists in Maximo. You cannot create the attachment at the time of creating the resource."),(0,o.kt)("p",null,"An attachment is made up of two components,"),(0,o.kt)("p",null,"Attachment file: You create an attachment using HTTP ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")," with binary content or base64 binary content. There is no support for multi-part messages yet."),(0,o.kt)("p",null,"Related metadata of the attachment: When creating an attachment for a resource there is a limited set of metadata that can be provided (along with the file) using HTTP Headers:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Header"),(0,o.kt)("th",{parentName:"tr",align:null},"Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"slug"),(0,o.kt)("td",{parentName:"tr",align:null},"File Name"),(0,o.kt)("td",{parentName:"tr",align:null},"The name of the attachment file")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"encslug"),(0,o.kt)("td",{parentName:"tr",align:null},"File Name"),(0,o.kt)("td",{parentName:"tr",align:null},"If the attachment file name has non-ascii characters it can be provided in the header base64 encoded. It is suggested that you always base64 encode your file name using this property if you believe you might have a mix of non-ascii characters")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Content-Type"),(0,o.kt)("td",{parentName:"tr",align:null},"“text/plain”"),(0,o.kt)("td",{parentName:"tr",align:null},"Based on the type of attachment - text/plain supports a .txt file")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"x-document-meta"),(0,o.kt)("td",{parentName:"tr",align:null},"Attachments"),(0,o.kt)("td",{parentName:"tr",align:null},"Tied to the DOCTYPES domain that defines the supported attachment types")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"x-document-description"),(0,o.kt)("td",{parentName:"tr",align:null},"Description"),(0,o.kt)("td",{parentName:"tr",align:null},"The description of the document")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"x-document-encdescription"),(0,o.kt)("td",{parentName:"tr",align:null},"Description"),(0,o.kt)("td",{parentName:"tr",align:null},"If the description has non-ASCII characters, it can be provided in the header base64 encoded. It is suggested that you always base64 encode your description using this property if you believe you might have a mix of non-ascii characters")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"custom-encoding"),(0,o.kt)("td",{parentName:"tr",align:null},"“base64”"),(0,o.kt)("td",{parentName:"tr",align:null},"This header facilitates testing using a browser client such as RESTClient (for FF). Allows you to paste in a base64 encoded image into the Body of the tool (otherwise you need to test with programmatic tool). You can use public tools to base64 encode your image file")))),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"POST oslc/os/mxapiasset/{asset rest id}/doclinks \nx-document-meta: FILE/Attachments\nslug: test.txt\nx-document-description:test file \n\nBody:\nHello this is my first test file\n")),(0,o.kt)("p",null,"The response Location header contains the url for the uploaded attachment (sample shown below)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Location: oslc/os/mxapiasset/{asset rest id}/doclinks/{id}\n")),(0,o.kt)("p",null,"When we GET on that url we will get the attached document that we uploaded before. Along with that, it will also have a response header named Link which will have a URL to the metadata for this attachment."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Link: oslc/os/mxapiasset/{asset rest id}/doclinks/meta/{id}\n")),(0,o.kt)("p",null,"This “meta” link can be used to get the metadata for the attachment. A GET on that link will fetch the json representation of the document description, mimetype etc as shown in a sample below."),(0,o.kt)("p",null,"To create attachments of WWW (url) type, we can use the following request as a sample. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"POST /oslc/os/mxapiasse/{asset rest id}/doclinks\nx-document-meta: URL/Attachments\nslug: CNN\ncontent-location: www.cnn.com\nx-document-description:cnn web site\n")),(0,o.kt)("p",null,"And in the response you will get a Location header with the url of the newly created url attachment. Note that the url was set on the content-location request header. The slug request header is used as the name of the attachment."),(0,o.kt)("p",null,"Another important thing to note: the ",(0,o.kt)("inlineCode",{parentName:"p"},"x-document-meta")," request header has 2 parts - the url type/document type. The url type is a synonymdomain in Maximo and hence hardcoding the values FILE or URL maybe a problem in case those values have been modified at the customer installation. You could potentially do one of the 2:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Avoid specifying the url type altogether. The api framework would default the url type based on your request. For example if the request has the content-location header, it will be treated as a url type with internal value of WWW. Otherwise it will treated as a url type of FILE. In each of these cases the system will use the default external value for these internal values (FILE or WWW)."),(0,o.kt)("li",{parentName:"ul"},"The other option would be to fetch the external values of the FILE and WWW types and then use that in the client side code to set the x-document-meta.")),(0,o.kt)("p",null,"We tend to prefer the first approach as its simpler of the client."),(0,o.kt)("h2",null,"Update the attachments"),(0,o.kt)(c,{kind:"info",mdxType:"InlineNotification"},"There is no support for updating an attachment, you would need to delete the current version and create a new version."),(0,o.kt)("h2",null,"Delete the attachments"),(0,o.kt)("p",null,"The attachments could be deleted by using HTTP POST with the URL of the attachment and providing the x-method-override header with a value of DELETE."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"POST oslc/os/mxapiasset/_MTAwMS9CRURGT1JE/doclinks/80 \nx-method-override: DELETE\n")),(0,o.kt)("h2",null,"Handling attachments as part of the resource json"),(0,o.kt)("p",null,"Here is a sample that adds 2 attached documents as part of asset creation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"POST /oslc/os/mxapiasset\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "assetnum": "TEST299",\n  "siteid": "BEDFORD",\n  "doclinks": [\n    {\n      "urltype": "FILE",\n      "documentdata": "aGV5IGhvdyBhcmUgeW91",\n      "doctype": "Attachments",\n      "urlname": "greetingsabcd.txt"\n    },\n    {\n      "urltype": "FILE",\n      "documentdata": "aGV5IGhvdyBpcyB0aGF0",\n      "doctype": "Attachments",\n      "urlname": "howisthatfor.txt"\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"As you can see the ",(0,o.kt)("inlineCode",{parentName:"p"},"documentdata")," attribute has the base64 encoded document. It will be saved as the content data of the attachment."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-attachment-attachment-mdx-5eb81bfd569e6c3285b2.js.map