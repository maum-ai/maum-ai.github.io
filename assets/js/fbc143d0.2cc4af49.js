"use strict";(self.webpackChunkdocusaurus_test=self.webpackChunkdocusaurus_test||[]).push([[8249],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return k}});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),k=i,f=u["".concat(s,".").concat(k)]||u[k]||m[k]||n;return r?a.createElement(f,o(o({ref:t},c),{},{components:r})):a.createElement(f,o({ref:t},c))}));function k(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<n;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},796:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return d},default:function(){return y},frontMatter:function(){return v},metadata:function(){return h},toc:function(){return g}});var a=r(7462),i=r(3366),n=r(7294),o=r(3905),l="category__EJB",s="repositories_dIUZ",p="stars_gWrp",c="paper_aHyy",m="description_H6wW";function u(e){var t=e.userName,r=void 0===t?"mindslab-ai":t,a=e.repoName,i=void 0===a?"":a;return n.createElement("div",{className:p},n.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user="+r+"&repo="+i+"&type=star&count=true",frameborder:"0",scrolling:"0",width:"90",height:"20",title:"GitHub"}))}function k(e){var t=e.userName,r=void 0===t?"mindslab-ai":t,a=e.repoName,i=void 0===a?"":a,o=e.repoNickname,l=void 0===o?"":o;return n.createElement("h3",null,n.createElement("a",{href:"https://github.com/"+r+"/"+i,target:"_blank",rel:"noopener noreferrer"},l))}function f(e){var t=e.paperLink,r=e.title;return n.createElement("p",{className:c},n.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},r))}var N=["components"],v={title:"Open-Source Activities",description:"List of Open-Source Activities from MINDsLab Brain Team"},d="Open-Source Activities",h={type:"mdx",permalink:"/open-source",source:"@site/src/pages/open-source.mdx",title:"Open-Source Activities",description:"List of Open-Source Activities from MINDsLab Brain Team",frontMatter:{title:"Open-Source Activities",description:"List of Open-Source Activities from MINDsLab Brain Team"}},g=[{value:"Implementations",id:"implementations",level:2},{value:"Official",id:"official",level:3},{value:"Unofficial",id:"unofficial",level:3},{value:"Libraries &amp; Tools",id:"libraries--tools",level:2}],b={toc:g};function y(e){var t=e.components,r=(0,i.Z)(e,N);return(0,o.kt)("wrapper",(0,a.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"open-source-activities"},"Open-Source Activities"),(0,o.kt)("h2",{id:"implementations"},"Implementations"),(0,o.kt)("h3",{id:"official"},"Official"),(0,o.kt)("section",{id:"activities",className:l},(0,o.kt)("ul",{className:s},(0,o.kt)("li",null,(0,o.kt)(u,{repoName:"phaseaug"}),(0,o.kt)(k,{repoName:"phaseaug",repoNickname:"PhaseAug"}),(0,o.kt)(f,{paperLink:"https://arxiv.org/abs/2211.04610",title:"PhaseAug: A Differentiable Augmentation for Speech Synthesis to Simulate One-to-Many Mapping"})),(0,o.kt)("li",null,(0,o.kt)(u,{repoName:"assem-vc"}),(0,o.kt)(k,{repoName:"assem-vc",repoNickname:"Assem-VC"}),(0,o.kt)(f,{paperLink:"https://arxiv.org/abs/2104.00931",title:"Assem-VC: Realistic Voice Conversion by Assembling Modern Speech Synthesis Techniques"})),(0,o.kt)("li",null,(0,o.kt)(u,{repoName:"nuwave"}),(0,o.kt)(k,{repoName:"nuwave",repoNickname:"NU-Wave"}),(0,o.kt)(f,{paperLink:"https://arxiv.org/abs/2104.02321",title:"NU-Wave: A Diffusion Probabilistic Model for Neural Audio Upsampling"})),(0,o.kt)("li",null,(0,o.kt)(u,{repoName:"nuwave2"}),(0,o.kt)(k,{repoName:"nuwave2",repoNickname:"NU-Wave 2"}),(0,o.kt)(f,{paperLink:"https://arxiv.org/abs/2206.08545",title:"NU-Wave 2: A General Neural Audio Upsampling Model for Various Sampling Rates"})),(0,o.kt)("li",null,(0,o.kt)(u,{repoName:"cotatron"}),(0,o.kt)(k,{repoName:"cotatron",repoNickname:"Cotatron"}),(0,o.kt)(f,{paperLink:"https://arxiv.org/abs/2005.03295",title:"Cotatron: Transcription-Guided Speech Encoder for Any-to-Many Voice Conversion without Parallel Data"})))),(0,o.kt)("h3",{id:"unofficial"},"Unofficial"),(0,o.kt)("section",{id:"activities",className:l},(0,o.kt)("ul",{className:s},(0,o.kt)("li",null,(0,o.kt)(u,{repoName:"pnlp-mixer"}),(0,o.kt)(k,{repoName:"pnlp-mixer",repoNickname:"pNLP-Mixer"}),(0,o.kt)(f,{paperLink:"https://arxiv.org/abs/2202.04350",title:"pNLP-Mixer: an Efficient all-MLP Architecture for Language"}),(0,o.kt)("p",{className:m},"First successful open-source implementation of ",(0,o.kt)("i",null,"pNLP-Mixer"),".")),(0,o.kt)("li",null,(0,o.kt)(u,{repoName:"hififace"}),(0,o.kt)(k,{repoName:"hififace",repoNickname:"HifiFace"}),(0,o.kt)(f,{paperLink:"https://arxiv.org/abs/2106.09965",title:"HifiFace: 3D Shape and Semantic Prior Guided High Fidelity Face Swapping"}),(0,o.kt)("p",{className:m},"First successful open-source implementation of ",(0,o.kt)("i",null,"HifiFace"),".")),(0,o.kt)("li",null,(0,o.kt)(u,{repoName:"univnet"}),(0,o.kt)(k,{repoName:"univnet",repoNickname:"UnivNet"}),(0,o.kt)(f,{paperLink:"https://arxiv.org/abs/2106.07889",title:"UnivNet: A Neural Vocoder with Multi-Resolution Spectrogram Discriminators for High-Fidelity Waveform Generation"}),(0,o.kt)("p",{className:m},"First successful open-source implementation of ",(0,o.kt)("i",null,"UnivNet"),".")),(0,o.kt)("li",null,(0,o.kt)(u,{repoName:"wavegrad2"}),(0,o.kt)(k,{repoName:"wavegrad2",repoNickname:"WaveGrad2"}),(0,o.kt)(f,{paperLink:"https://arxiv.org/abs/2106.09660",title:"WaveGrad 2: Iterative Refinement for Text-to-Speech Synthesis"}),(0,o.kt)("p",{className:m},"First successful open-source implementation of ",(0,o.kt)("i",null,"WaveGrad2"),".")),(0,o.kt)("li",null,(0,o.kt)(u,{repoName:"faceshifter"}),(0,o.kt)(k,{repoName:"faceshifter",repoNickname:"FaceShifter"}),(0,o.kt)(f,{paperLink:"https://arxiv.org/abs/1912.13457",title:"FaceShifter: Towards High Fidelity And Occlusion Aware Face Swapping"}),(0,o.kt)("p",{className:m},"First successful open-source implementation of ",(0,o.kt)("i",null,"FaceShifter"),".")),(0,o.kt)("li",null,(0,o.kt)(u,{userName:"Rick-McCoy",repoName:"Reformer-pytorch"}),(0,o.kt)(k,{userName:"Rick-McCoy",repoName:"Reformer-pytorch",repoNickname:"Reformer-pytorch"}),(0,o.kt)(f,{paperLink:"https://arxiv.org/abs/2001.04451",title:"Reformer: The Efficient Transformer"}),(0,o.kt)("p",{className:m},"Implementation of ",(0,o.kt)("i",null,"Reformer")," in PyTorch.")),(0,o.kt)("li",null,(0,o.kt)(u,{userName:"seungwonpark",repoName:"melgan"}),(0,o.kt)(k,{userName:"seungwonpark",repoName:"melgan",repoNickname:"MelGAN"}),(0,o.kt)(f,{paperLink:"https://arxiv.org/abs/1910.06711",title:"MelGAN: Generative Adversarial Networks for Conditional Waveform Synthesis"}),(0,o.kt)("p",{className:m},"Implementation of ",(0,o.kt)("i",null,"MelGAN")," vocoder (compatible with ",(0,o.kt)("a",{href:"https://github.com/NVIDIA/tacotron2"},"NVIDIA/tacotron2"),")")),(0,o.kt)("li",null,(0,o.kt)(u,{userName:"Deepest-Project",repoName:"MelNet"}),(0,o.kt)(k,{userName:"Deepest-Project",repoName:"MelNet",repoNickname:"MelNet"}),(0,o.kt)(f,{paperLink:"https://arxiv.org/abs/1906.01083",title:"MelNet: A Generative Model for Audio in the Frequency Domain"}),(0,o.kt)("p",{className:m},"Implementation of ",(0,o.kt)("i",null,"MelNet"),". Work done with Deepest AI (SNU Deep Learning Society).")),(0,o.kt)("li",null,(0,o.kt)(u,{userName:"seungwonpark",repoName:"RandWireNN"}),(0,o.kt)(k,{userName:"seungwonpark",repoName:"RandWireNN",repoNickname:"RandWireNN"}),(0,o.kt)(f,{paperLink:"https://arxiv.org/abs/1904.01569",title:"Exploring Randomly Wired Neural Networks for Image Recognition"}),(0,o.kt)("p",{className:m},"Implementation of ",(0,o.kt)("i",null,"RandWireNN"),".")),(0,o.kt)("li",null,(0,o.kt)(u,{repoName:"voicefilter"}),(0,o.kt)(k,{repoName:"voicefilter",repoNickname:"VoiceFilter"}),(0,o.kt)(f,{paperLink:"https://arxiv.org/abs/1810.04826",title:"VoiceFilter: Targeted Voice Separation by Speaker-Conditioned Spectrogram Masking"}),(0,o.kt)("p",{className:m},"First successful open-source implementation of Google's ",(0,o.kt)("i",null,"VoiceFilter"))))),(0,o.kt)("h2",{id:"libraries--tools"},"Libraries & Tools"),(0,o.kt)("section",{id:"activities",className:l},(0,o.kt)("ul",{className:s},(0,o.kt)("li",null,(0,o.kt)(u,{userName:"Diuven",repoName:"KoTDG"}),(0,o.kt)(k,{userName:"Diuven",repoName:"KoTDG",repoNickname:"KoTDG"}),(0,o.kt)("p",{className:m},"Korean Text Data Generator for OCR tasks.")),(0,o.kt)("li",null,(0,o.kt)(u,{userName:"ThisIsIsaac",repoName:"Data-Science-for-COVID-19"}),(0,o.kt)(k,{userName:"ThisIsIsaac",repoName:"Data-Science-for-COVID-19",repoNickname:"Data-Science-for-COVID-19"}),(0,o.kt)("p",{className:m},"COVID-19 Korea Dataset with patient routes and visualizer. Co-led the collaboration project.")),(0,o.kt)("li",null,(0,o.kt)(u,{userName:"junjun3518",repoName:"alias-free-torch"}),(0,o.kt)(k,{userName:"junjun3518",repoName:"alias-free-torch",repoNickname:"Alias-Free-Torch"}),(0,o.kt)("p",{className:m},"Simple torch.nn.module implementation of Alias-Free-GAN style filter and resample.")))))}y.isMDXComponent=!0}}]);