(this["webpackJsonpastronomer-site"]=this["webpackJsonpastronomer-site"]||[]).push([[0],{11:function(e,t,a){e.exports={root:"Header_root__2R_Rn",container:"Header_container__1VC87",leftBlock:"Header_leftBlock__41AP5",logo:"Header_logo__3_SJs",title:"Header_title__3SH2Q",linkToHome:"Header_linkToHome__4LuUT",rightBlock:"Header_rightBlock__3rWkS",rightLink:"Header_rightLink__2xv8Z",teamLink:"Header_teamLink__3NmYx",logoutButton:"Header_logoutButton__21mWM"}},136:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(38),s=a.n(r),i=(a(50),a(51),a(10)),l=a(11),c=a.n(l),m=a(39),d=a.n(m);var h=function(){return n.a.createElement("header",{className:c.a.root},n.a.createElement("div",{className:c.a.container+" container"},n.a.createElement("div",{className:c.a.leftBlock},n.a.createElement(i.b,{to:"/",className:c.a.linkToHome},n.a.createElement("img",{src:d.a,alt:"Logo of Pegovka observatory",className:c.a.logo})),n.a.createElement("h1",{className:c.a.title},n.a.createElement(i.b,{to:"/",className:c.a.linkToHome},"Waves\xa0from",n.a.createElement("br",null),"Pegovka\xa0Observatory")))))},u=a(141),g=a(142),p=a(2),f=a(41),y=a.n(f),w=a(18),v=a(42),b=a.n(v),_=a(14),k=a.n(_),I={post:"/post",registration:"/registration",login:"/login",yourTeam:"/yourTeam"};var E=function(e){var t=e.title,a=e.date,o=e.author,r=e.text,s=e.isInList,l=e.id,c=new Intl.DateTimeFormat("en-GB",{timeZoneName:"short",hour:"numeric",minute:"2-digit",month:"long",day:"numeric",year:"numeric"});return n.a.createElement("article",{className:k.a.root+" container"},n.a.createElement("header",{className:k.a.header},function(e,t,a){if(!e)return n.a.createElement("h2",{className:k.a.title},t);return n.a.createElement("h3",{className:k.a.title},n.a.createElement(i.b,{to:"".concat(I.post,"/").concat(a)},t))}(s,t,l),n.a.createElement("div",{className:k.a.subtitle},n.a.createElement("time",null,c.format(new Date(a))),", by ",o)),n.a.createElement(b.a,{linkTarget:"_blank",escapeHtml:!1,source:r}))};var x=function(){return n.a.createElement("main",null,w.map((function(e){return n.a.createElement("div",{className:y.a.listItem,key:e.id},n.a.createElement(E,Object.assign({},e,{isInList:!0})))})))},T=a(43),H=a.n(T);var N=function(e){var t=e.match.params.postId,a=w.find((function(e){return e.id===parseInt(t,10)}));return a?n.a.createElement("div",{className:H.a.root},n.a.createElement(E,Object.assign({},a,{isInList:!1}))):n.a.createElement("p",null,"404: Post Not Found")};function P(){return n.a.createElement(p.c,null,n.a.createElement(p.a,{exact:!0,path:"/",component:x}),n.a.createElement(p.a,{path:"".concat(I.post,"/:postId"),component:N}))}var B=Object(u.a)({palette:{type:"dark",primary:{main:"#00FFFF"}}});var S=function(){return n.a.createElement(g.a,{theme:B},n.a.createElement(i.a,null,n.a.createElement(h,null),n.a.createElement(P,null)))};s.a.render(n.a.createElement(S,null),document.getElementById("root"))},14:function(e,t,a){e.exports={root:"BlogPost_root__2iOTt",title:"BlogPost_title__D6qk-",subtitle:"BlogPost_subtitle__xtaGT",header:"BlogPost_header__2li7R"}},18:function(e){e.exports=JSON.parse('[{"id":1027,"date":"2020-07-06T18:03:30.422+05:00","author":"Ivan Zaitsev","title":"Not a Distant Planet?","text":"Today I\u2019ve got good news and also somewhat worrying news for you.\\n\\nFirst, there is a transmission. Posted to [docs](https://message-from-space.readthedocs.io/en/latest/message4.html), as always. Some new glyphs for you to decipher.\\n\\nSecond, I think we have something to worry about. There is a strong suspicion among my colleagues that this signal comes not from a distant planet at all. We will thoroughly investigate this and try to eliminate possible terrestrial and low-orbit sources of this signal. I\u2019ll get back to you with more details later."},{"id":1026,"date":"2020-07-05T18:00:09.078+05:00","author":"Ivan Zaitsev","title":"Once Is Luck, Twice Is Coincidence, Three Times Is a Pattern","text":"Not entirely unexpected, we got a third message today. I\u2019ve already posted it to our [documentation page](https://message-from-space.readthedocs.io/en/latest/message3.html). Can somebody take a look?\\n\\nFeels like this is not the last one. What\u2019s weird: we get these transmissions precisely at the same time each day, **around 12:45 UTC**. It\u2019s almost like whatever sends them knows about us, and our planet is the intended target of these messages. Otherwise, why would timing of these messages be synchronized to the rotation of our planet?\\n\\nI\u2019ll be monitoring our radiotelescope carefully during the same time window tomorrow, expecting more answers from the Universe.\\n\\nJoin me in our [Discord chat](https://discord.gg/xvMJbas) to share your ideas and interpretations!"},{"id":1025,"date":"2020-07-04T18:02:34.670+05:00","author":"Ivan Zaitsev","title":"One Small Step for Scientists and Engineers, a Giant Leap for Mankind","text":"<iframe width=\\"640\\" height=\\"360\\" src=\\"https://www.youtube.com/embed/j7kVUaZCcMU\\" frameborder=\\"0\\" allow=\\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\\" allowfullscreen></iframe>\\n\\n Hi.\\n\\nYesterday I posted a video asking for your help deciphering a strange radio signal from space. Thanks to my friends from the [ICFP Contest](https://twitter.com/icfpcontest2020/status/1278965948461056000), it was a tremendous success.\\n\\nWith help from enthusiasts all over the world we were able to make [great progress](https://message-from-space.readthedocs.io/en/latest/radio-transmission-recording.html) in understanding the message. Thank you very much to all the participants!\\n\\nFirst of all, we understand that the signal is probably a sequence of frequency-encoded ones and zeroes. When arranged into a particular two-dimensional grid they look like a picture that makes sense to a human eye!\\n\\n![transmission signal in 2d](/radio-transmission-2d.png)\\n\\nSecond, we have some theories on how to interpret this picture. It looks like a binary encoding of numbers from 1 to 8 that follows a regular pattern that can be extended further to construct any natural number. However, we don\u2019t have any hard data to support our construction\u2026\\n\\n![how to encode numbers](/numbers-encoding4.png)\\n\\nOkay, here is the exciting part! I just got a second message! I\u2019m going to apply the code I got from you yesterday to convert this second signal into a picture. I\u2019ll post this picture to [a separate page](https://message-from-space.readthedocs.io/en/latest/message2.html) in our documentation so we can collaborate on the explanation.\\n\\nSo excited! Can\u2019t wait to [work with you](https://discord.gg/xvMJbas) once again!"},{"id":1024,"date":"2020-07-03T12:10:18.321+05:00","author":"Ivan Zaitsev","title":"A Personal Appeal to Scientists and Engineers From All Over the World","text":"<iframe width=\\"640\\" height=\\"360\\" src=\\"https://www.youtube.com/embed/EjL-5EuQeCU\\" frameborder=\\"0\\" allow=\\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\\" allowfullscreen></iframe>\\n\\n Hello.\\n\\nMy name is Ivan Zaitsev. I\'m a staff astronomer at Pegovka observatory in the Urals region of Russia.\\n\\nSeveral days ago we have been monitoring radio signals from a small region of sky around [HD 190360](http://simbad.u-strasbg.fr/simbad/sim-id?Ident=HD+190360) for our exoplanet research purposes. We have registered a peculiar radio transmission which cannot be attributed to any natural source in this area.\\n\\nWe tried to analyze and decode this message. But we don\'t have any trained deciphering specialists here on site, and we don\'t have appropriate software to analyze this message. We have made very little progress so far.\\n\\nI believe that decoding this message can lead to a major breakthrough in our understanding of the Universe. I believe that science should be a joint effort. Together we can crack this problem much faster that any single research group.\\n\\nThat\'s why I decided to publish a [recording of this message](https://message-from-space.readthedocs.io/en/latest/_downloads/822b494d13eb35a97f159e041a004fa9/radio-transmission-recording.wav) and create a [special documentation page](https://message-from-space.readthedocs.io/en/latest/radio-transmission-recording.html) to collaborate on the explanation.\\n\\nIf you have any idea at all on how to decode and explain the message, please send a Pull Request to the [appropriate page](https://github.com/zaitsev85/message-from-space/blob/master/source/radio-transmission-recording.rst)! We cannot move forward without this!\\n\\nSincerely,\\nIvan Zaitsev\\n\\nP.S. Don\'t hesitate to join my personal [chat server](https://discord.gg/xvMJbas) to combine our efforts in the spirit of open scientific collaboration."},{"id":1023,"date":"2015-06-29T18:04:55.780+05:00","author":"Ivan Zaitsev","title":"No Title","text":"![flowers](/flowers.jpeg)\\n\\nPetunias look great this year!"},{"id":0,"date":"2008-03-21T02:14:43.890+05:00","author":"Ivan Zaitsev","title":"First Post","text":"Dear diary,\\n\\nI don\'t know why I\'m here. Maybe one day I\'ll need a place for amazing news about space. So I\'ll try to blog something interesting once in a while."}]')},39:function(e,t,a){e.exports=a.p+"static/media/logo_white.23af1a79.png"},41:function(e,t,a){e.exports={listItem:"BlogList_listItem__1hDdI"}},43:function(e,t,a){e.exports={root:"BlogPostPage_root__2_maR"}},45:function(e,t,a){e.exports=a(136)},51:function(e,t,a){}},[[45,1,2]]]);
//# sourceMappingURL=main.9951eba6.chunk.js.map