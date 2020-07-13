(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{169:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(9),b=(a(0),a(186)),l={id:"library",title:"Library",sidebar_label:"Library"},c={id:"version-5.1.1/web/library",title:"Library",description:"SaveTracks",source:"@site/versioned_docs/version-5.1.1/web/library.md",permalink:"/SpotifyAPI-NET/docs/web/library",editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/versioned_docs/version-5.1.1/web/library.md",version:"5.1.1",lastUpdatedBy:"Jonas Dellinger",lastUpdatedAt:1594648176,sidebar_label:"Library",sidebar:"version-5.1.1/someSidebar",previous:{title:"Follow",permalink:"/SpotifyAPI-NET/docs/web/follow"},next:{title:"Personalization",permalink:"/SpotifyAPI-NET/docs/web/personalization"}},i=[{value:"SaveTracks",id:"savetracks",children:[]},{value:"SaveTrack",id:"savetrack",children:[]},{value:"GetSavedTracks",id:"getsavedtracks",children:[]},{value:"RemoveSavedTracks",id:"removesavedtracks",children:[]},{value:"CheckSavedTracks",id:"checksavedtracks",children:[]},{value:"SaveAlbums",id:"savealbums",children:[]},{value:"SaveAlbum",id:"savealbum",children:[]},{value:"GetSavedAlbums",id:"getsavedalbums",children:[]},{value:"RemoveSavedAlbums",id:"removesavedalbums",children:[]},{value:"CheckSavedAlbums",id:"checksavedalbums",children:[]}],o={rightToc:i};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"savetracks"},"SaveTracks"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Save one or more tracks to the current user\u2019s \u201cYour Music\u201d library.")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ids"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A list of the Spotify IDs"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'new List<String> { "3Hvu1pq89D4R0lyPBoujSv" }'))))),Object(b.b)("p",null,"Returns a ",Object(b.b)("inlineCode",{parentName:"p"},"ErrorResponse")," which just contains a possible error. (",Object(b.b)("inlineCode",{parentName:"p"},"response.HasError()")," and ",Object(b.b)("inlineCode",{parentName:"p"},"response.Error"),")"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Usage")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'ErrorResponse response = _spotify.SaveTracks(new List<string> { "3Hvu1pq89D4R0lyPBoujSv" });\nif(!response.HasError())\n    Console.WriteLine("success");\n')),Object(b.b)("hr",null),Object(b.b)("h2",{id:"savetrack"},"SaveTrack"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Save one track to the current user\u2019s \u201cYour Music\u201d library.")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"id"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A Spotify ID"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'"3Hvu1pq89D4R0lyPBoujSv"'))))),Object(b.b)("p",null,"Returns a ",Object(b.b)("inlineCode",{parentName:"p"},"ErrorResponse")," which just contains a possible error. (",Object(b.b)("inlineCode",{parentName:"p"},"response.HasError()")," and ",Object(b.b)("inlineCode",{parentName:"p"},"response.Error"),")"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Usage")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'ErrorResponse response = _spotify.SaveTrack("3Hvu1pq89D4R0lyPBoujSv");\nif(!response.HasError())\n    Console.WriteLine("success");\n')),Object(b.b)("hr",null),Object(b.b)("h2",{id:"getsavedtracks"},"GetSavedTracks"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Get a list of the songs saved in the current Spotify user\u2019s \u201cYour Music\u201d library.")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[limit]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The maximum number of objects to return. Default: 20. Minimum: 1. Maximum: 50."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"20"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[offset]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The index of the first object to return. Default: 0 (i.e., the first object)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"0"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[market]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"An ISO 3166-1 alpha-2 country code. Provide this parameter if you want to apply Track Relinking."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"DE"))))),Object(b.b)("p",null,"Returns a ",Object(b.b)("inlineCode",{parentName:"p"},"Paging<SavedTrack>**, **SavedTrack")," contains 2 properties, ",Object(b.b)("inlineCode",{parentName:"p"},"DateTime AddedAt")," and ",Object(b.b)("inlineCode",{parentName:"p"},"FullTrack Track")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Usage")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),"Paging<SavedTrack> savedTracks = _spotify.GetSavedTracks();\nsavedTracks.Items.ForEach(track => Console.WriteLine(track.Track.Name));\n")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"removesavedtracks"},"RemoveSavedTracks"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Remove one or more tracks from the current user\u2019s \u201cYour Music\u201d library.")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ids"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A list of the Spotify IDs."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'new List<String> { "3Hvu1pq89D4R0lyPBoujSv" }'))))),Object(b.b)("p",null,"Returns a ",Object(b.b)("inlineCode",{parentName:"p"},"ErrorResponse")," which just contains a possible error. (",Object(b.b)("inlineCode",{parentName:"p"},"response.HasError()")," and ",Object(b.b)("inlineCode",{parentName:"p"},"response.Error"),")"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Usage")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'ErrorResponse response = _spotify.RemoveSavedTracks(new List<string> { "3Hvu1pq89D4R0lyPBoujSv" });\nif(!response.HasError())\n    Console.WriteLine("success");\n')),Object(b.b)("hr",null),Object(b.b)("h2",{id:"checksavedtracks"},"CheckSavedTracks"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Check if one or more tracks is already saved in the current Spotify user\u2019s \u201cYour Music\u201d library.")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ids"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A list of the Spotify IDs."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'new List<String> { "3Hvu1pq89D4R0lyPBoujSv" }'))))),Object(b.b)("p",null,"Returns a ",Object(b.b)("inlineCode",{parentName:"p"},"ListResponse<bool>")," which contains a property, ",Object(b.b)("inlineCode",{parentName:"p"},"List<bool> List")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Usage")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'ListResponse<bool> tracksSaved = _spotify.CheckSavedTracks(new List<String> { "3Hvu1pq89D4R0lyPBoujSv" });\nif(tracksSaved.List[0])\n    Console.WriteLine("The track is in your library!");\n')),Object(b.b)("hr",null),Object(b.b)("h2",{id:"savealbums"},"SaveAlbums"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Save one or more albums to the current user\u2019s \u201cYour Music\u201d library.")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ids"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A list of the Spotify IDs"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'new List<String> { "1cq06d0kTUnFmJHixz1RaF" }'))))),Object(b.b)("p",null,"Returns a ",Object(b.b)("inlineCode",{parentName:"p"},"ErrorResponse")," which just contains a possible error. (",Object(b.b)("inlineCode",{parentName:"p"},"response.HasError()")," and ",Object(b.b)("inlineCode",{parentName:"p"},"response.Error"),")"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Usage")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'ErrorResponse response = _spotify.SaveAlbums(new List<string> { "1cq06d0kTUnFmJHixz1RaF" });\nif(!response.HasError())\n    Console.WriteLine("success");\n')),Object(b.b)("hr",null),Object(b.b)("h2",{id:"savealbum"},"SaveAlbum"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Save one album to the current user\u2019s \u201cYour Music\u201d library.")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"id"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A Spotify ID"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'"1cq06d0kTUnFmJHixz1RaF"'))))),Object(b.b)("p",null,"Returns a ",Object(b.b)("inlineCode",{parentName:"p"},"ErrorResponse")," which just contains a possible error. (",Object(b.b)("inlineCode",{parentName:"p"},"response.HasError()")," and ",Object(b.b)("inlineCode",{parentName:"p"},"response.Error"),")"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Usage")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'ErrorResponse response = _spotify.SaveAlbum("1cq06d0kTUnFmJHixz1RaF");\nif(!response.HasError())\n    Console.WriteLine("success");\n')),Object(b.b)("hr",null),Object(b.b)("h2",{id:"getsavedalbums"},"GetSavedAlbums"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Get a list of the albums saved in the current Spotify user\u2019s \u201cYour Music\u201d library.")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[limit]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The maximum number of objects to return. Default: 20. Minimum: 1. Maximum: 50."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"20"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[offset]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The index of the first object to return. Default: 0 (i.e., the first object)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"0"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[market]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"An ISO 3166-1 alpha-2 country code. Provide this parameter if you want to apply Track Relinking."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"DE"))))),Object(b.b)("p",null,"Returns a ",Object(b.b)("inlineCode",{parentName:"p"},"Paging<SavedAlbum>"),", ",Object(b.b)("strong",{parentName:"p"},"SavedAlbum")," contains 2 properties, ",Object(b.b)("inlineCode",{parentName:"p"},"DateTime AddedAt")," and ",Object(b.b)("inlineCode",{parentName:"p"},"FullAlbum Album")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Usage")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),"Paging<SavedAlbum> savedAlbums = _spotify.GetSavedAlbums();\nsavedAlbums.Items.ForEach(album => Console.WriteLine(album.Album.Name));\n")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"removesavedalbums"},"RemoveSavedAlbums"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Remove one or more albums from the current user\u2019s \u201cYour Music\u201d library.")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ids"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A list of the Spotify IDs."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'new List<String> { "1cq06d0kTUnFmJHixz1RaF" }'))))),Object(b.b)("p",null,"Returns a ",Object(b.b)("inlineCode",{parentName:"p"},"ErrorResponse")," which just contains a possible error. (",Object(b.b)("inlineCode",{parentName:"p"},"response.HasError()")," and ",Object(b.b)("inlineCode",{parentName:"p"},"response.Error"),")"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Usage")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'ErrorResponse response = _spotify.RemoveSavedAlbums(new List<string> { "1cq06d0kTUnFmJHixz1RaF" });\nif(!response.HasError())\n    Console.WriteLine("success");\n')),Object(b.b)("hr",null),Object(b.b)("h2",{id:"checksavedalbums"},"CheckSavedAlbums"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Check if one or more albums is already saved in the current Spotify user\u2019s \u201cYour Music\u201d library.")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ids"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A list of the Spotify IDs."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'new List<String> { "1cq06d0kTUnFmJHixz1RaF" }'))))),Object(b.b)("p",null,"Returns a ",Object(b.b)("inlineCode",{parentName:"p"},"ListResponse<bool>")," which contains a property, ",Object(b.b)("inlineCode",{parentName:"p"},"List<bool> List")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Usage")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'ListResponse<bool> albumsSaved = _spotify.CheckSavedAlbums(new List<String> { "1cq06d0kTUnFmJHixz1RaF" });\nif(albumsSaved.List[0])\n    Console.WriteLine("The album is in your library!");\n')),Object(b.b)("hr",null))}p.isMDXComponent=!0},186:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},s=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),s=p(a),O=n,u=s["".concat(l,".").concat(O)]||s[O]||j[O]||b;return a?r.a.createElement(u,c({ref:t},o,{components:a})):r.a.createElement(u,c({ref:t},o))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=O;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var o=2;o<b;o++)l[o]=a[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);