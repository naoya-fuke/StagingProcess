import{B as g,n as O,b as C,u as R,e as L,d as E}from"./links.37929787.js";import{C as I}from"./Card.4fe92d12.js";import{C as B}from"./Tabs.31f97451.js";import{C as M}from"./SeoSiteAnalysisResults.f59ff73e.js";import{p as w}from"./popup.6fe74774.js";import"./default-i18n.3881921e.js";import{u as D,S as x}from"./SeoSiteScore.4c797f42.js";import{r as s,o as a,c as u,d as r,f as _,a as o,z as l,b as S,w as i,g as G,D as k,n as H}from"./vue.runtime.esm-bundler.588d3a9f.js";import{_ as f}from"./_plugin-vue_export-helper.a6f24833.js";import{a as N}from"./index.c39be324.js";import"./Caret.4d98c50a.js";/* empty css                                            */import"./constants.44daa6bb.js";/* empty css                                              */import"./TruSeoHighlighter.ed998abe.js";/* empty css                                              */import{C as P}from"./Blur.f4710b2c.js";import{C as U}from"./Index.bc76d0fb.js";import{S as W}from"./Book.75d79ad5.js";import{C as V}from"./Tooltip.0e57efe0.js";import{S as Y}from"./Refresh.46990afe.js";import"./isArrayLikeObject.10b615a9.js";import"./Slide.5fb4a175.js";import"./TruSeoScore.29220195.js";import"./SaveChanges.ea2d670b.js";import"./Information.854046a2.js";import"./Ellipse.60ee808e.js";import"./Tags.0154d336.js";import"./tags.ef6a6bd6.js";import"./postContent.a843d374.js";import"./cleanForSlug.a67f7e84.js";import"./_stringToArray.a4422725.js";import"./GoogleSearchPreview.7649d5f5.js";import"./Gear.695eb859.js";import"./params.f0608262.js";import"./toFinite.c2274946.js";const q={setup(){return{analyzerStore:g()}},components:{CoreSiteScore:U,SvgBook:W},props:{score:Number,loading:Boolean,description:String,summary:{type:Object,default(){return{}}}},data(){return{strings:{yourOverallSiteScore:this.$t.__("Your Overall Site Score",this.$td),goodResult:this.$t.sprintf(this.$t.__("A very good score is between %1$s%3$d and %4$d%2$s.",this.$td),"<strong>","</strong>",50,75),forBestResults:this.$t.sprintf(this.$t.__("For best results, you should strive for %1$s%3$d and above%2$s.",this.$td),"<strong>","</strong>",70),anErrorOccurred:this.$t.__("An error occurred while analyzing your site.",this.$td),criticalIssues:this.$t.__("Important Issues",this.$td),warnings:this.$t.__("Warnings",this.$td),recommendedImprovements:this.$t.__("Recommended Improvements",this.$td),goodResults:this.$t.__("Good Results",this.$td),completeSiteAuditChecklist:this.$t.__("Complete Site Audit Checklist",this.$td),readUltimateSeoGuide:this.$t.__("Read the Ultimate WordPress SEO Guide",this.$td)}}},computed:{getError(){switch(this.analyzerStore.analyzeError){case"invalid-url":return this.$t.__("The URL provided is invalid.",this.$td);case"missing-content":return this.$t.sprintf("%1$s %2$s",this.$t.__("We were unable to parse the content for this site.",this.$td),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"seoAnalyzerIssues",!0));case"invalid-token":return this.$t.sprintf(this.$t.__("Your site is not connected. Please connect to %1$s, then try again.",this.$td),"AIOSEO")}return this.analyzerStore.analyzeError}}},j={class:"aioseo-site-score-analyze"},F={key:0,class:"aioseo-seo-site-score-score"},K={key:1,class:"aioseo-seo-site-score-description"},Q=["innerHTML"],J=["innerHTML"],X={class:"d-flex"},Z=["href"],ee={key:2,class:"analyze-errors"},te=["innerHTML"];function se(e,m,p,t,n,c){const d=s("core-site-score"),h=s("svg-book");return a(),u("div",j,[t.analyzerStore.analyzeError?_("",!0):(a(),u("div",F,[r(d,{loading:p.loading,score:p.score,description:p.description,strokeWidth:1.75},null,8,["loading","score","description"])])),t.analyzerStore.analyzeError?_("",!0):(a(),u("div",K,[o("h2",null,l(n.strings.yourOverallSiteScore),1),o("div",{innerHTML:n.strings.goodResult},null,8,Q),o("div",{innerHTML:n.strings.forBestResults},null,8,J),o("div",X,[r(h),o("a",{href:e.$links.getDocUrl("ultimateGuide"),target:"_blank"},l(n.strings.readUltimateSeoGuide),9,Z)])])),t.analyzerStore.analyzeError?(a(),u("div",ee,[o("h3",null,l(n.strings.anErrorOccurred),1),o("span",{innerHTML:c.getError},null,8,te)])):_("",!0)])}const oe=f(q,[["render",se]]);const ne={setup(){const{strings:e}=D();return{analyzerStore:g(),connectStore:O(),optionsStore:C(),rootStore:R(),strings:e}},components:{CoreBlur:P,CoreSiteScoreAnalyze:oe},mixins:[x],data(){return{score:0}},watch:{"optionsStore.internalOptions.internal.siteAnalysis.score"(e){this.score=e}},computed:{getSummary(){return{recommended:this.analyzerStore.recommendedCount(),critical:this.analyzerStore.criticalCount(),good:this.analyzerStore.goodCount()}}},methods:{openPopup(e){w(e,this.connectWithAioseo,600,630,!0,["token"],this.completedCallback,this.closedCallback)},completedCallback(e){return this.connectStore.saveConnectToken(e.token)},closedCallback(e){e&&this.analyzerStore.runSiteAnalyzer(),this.analyzerStore.analyzing=!0}},mounted(){!this.optionsStore.internalOptions.internal.siteAnalysis.score&&this.optionsStore.internalOptions.internal.siteAnalysis.connectToken&&(this.analyzerStore.analyzing=!0,this.analyzerStore.runSiteAnalyzer()),this.score=this.optionsStore.internalOptions.internal.siteAnalysis.score}},re={class:"aioseo-seo-site-score"},ie={key:1,class:"aioseo-seo-site-score-cta"};function ae(e,m,p,t,n,c){const d=s("core-site-score-analyze"),h=s("core-blur");return a(),u("div",re,[t.optionsStore.internalOptions.internal.siteAnalysis.connectToken?_("",!0):(a(),S(h,{key:0},{default:i(()=>[r(d,{score:85,description:e.description},null,8,["description"])]),_:1})),t.optionsStore.internalOptions.internal.siteAnalysis.connectToken?_("",!0):(a(),u("div",ie,[o("a",{href:"#",onClick:m[0]||(m[0]=G(z=>c.openPopup(t.rootStore.aioseo.urls.connect),["prevent"]))},l(e.connectWithAioseo),1),k(" "+l(t.strings.toSeeYourSiteScore),1)])),t.optionsStore.internalOptions.internal.siteAnalysis.connectToken?(a(),S(d,{key:2,score:n.score,description:e.description,loading:e.analyzing,summary:c.getSummary},null,8,["score","description","loading","summary"])):_("",!0)])}const le=f(ne,[["render",ae]]);const ce={setup(){return{analyzerStore:g(),licenseStore:L(),optionsStore:C(),settingsStore:E()}},components:{CoreCard:I,CoreMainTabs:B,CoreSeoSiteAnalysisResults:M,CoreSeoSiteScoreAnalyze:le,CoreTooltip:V,SvgRefresh:Y,SvgCircleQuestionMark:N},data(){return{internalDebounce:!1,strings:{completeSeoChecklist:this.$t.__("Complete SEO Checklist",this.$td),refreshResults:this.$t.__("Refresh Results",this.$td),cardDescription:this.$t.__("These are the results our SEO Analzyer has generated after analyzing the homepage of your website.",this.$td)+" "+this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"seoAnalyzer",!0)}}},computed:{tabs(){const e=this.optionsStore.internalOptions.internal.siteAnalysis;return[{slug:"all-items",label:this.$t.__("All Items",this.$td),analyze:{classColor:"black",count:e.score?this.analyzerStore.allItemsCount():0}},{slug:"critical",label:this.$t.__("Important Issues",this.$td),analyze:{classColor:"red",count:e.score?this.analyzerStore.criticalCount():0}},{slug:"recommended-improvements",label:this.$t.__("Recommended Improvements",this.$td),analyze:{classColor:"blue",count:e.score?this.analyzerStore.recommendedCount():0}},{slug:"good-results",label:this.$t.__("Good Results",this.$td),analyze:{classColor:"green",count:e.score?this.analyzerStore.goodCount():0}}]}},methods:{processChangeTab(e){this.internalDebounce||(this.internalDebounce=!0,this.settingsStore.changeTab({slug:"seoAuditChecklist",value:e}),setTimeout(()=>{this.internalDebounce=!1},50))},refresh(){this.analyzerStore.analyzing=!0,this.analyzerStore.runSiteAnalyzer({refresh:!0})}}},ue={class:"aioseo-seo-audit-checklist"},_e=["innerHTML"],de={class:"label"};function he(e,m,p,t,n,c){const d=s("core-seo-site-score-analyze"),h=s("core-card"),z=s("svg-circle-question-mark"),$=s("core-tooltip"),b=s("svg-refresh"),v=s("base-button"),A=s("core-main-tabs"),T=s("core-seo-site-analysis-results");return a(),u("div",ue,[r(h,{slug:"connectOrScore","hide-header":"","no-slide":"",toggles:!1},{default:i(()=>[r(d)]),_:1}),(e.$isPro&&t.licenseStore.licenseKey||t.optionsStore.internalOptions.internal.siteAnalysis.connectToken)&&t.optionsStore.internalOptions.internal.siteAnalysis.score?(a(),S(h,{key:0,slug:"completeSeoChecklist","no-slide":"",toggles:!1},{header:i(()=>[o("span",null,l(n.strings.completeSeoChecklist),1),r($,null,{tooltip:i(()=>[o("span",{innerHTML:n.strings.cardDescription},null,8,_e)]),default:i(()=>[r(z)]),_:1})]),"header-extra":i(()=>[r(v,{class:"refresh-results",type:"gray",size:"small",onClick:c.refresh,loading:t.analyzerStore.analyzing},{default:i(()=>[r(b),k(" "+l(n.strings.refreshResults),1)]),_:1},8,["onClick","loading"])]),tabs:i(()=>[r(A,{tabs:c.tabs,showSaveButton:!1,active:t.settingsStore.settings.internalTabs.seoAuditChecklist,internal:"",onChanged:c.processChangeTab,"skinny-tabs":""},{"var-tab":i(({tab:y})=>[o("span",{class:H(["round",y.analyze.classColor])},l(y.analyze.count||0),3),o("span",de,l(y.label),1)]),_:1},8,["tabs","active","onChanged"])]),default:i(()=>[r(T,{section:t.settingsStore.settings.internalTabs.seoAuditChecklist,"all-results":t.analyzerStore.getSiteAnalysisResults,"show-instructions":""},null,8,["section","all-results"])]),_:1})):_("",!0)])}const Qe=f(ce,[["render",he]]);export{Qe as default};
