"use strict";(self.webpackChunkDooTask=self.webpackChunkDooTask||[]).push([[603],{65691:(t,e,s)=>{s.d(e,{Z:()=>c});var a=s(20629);function o(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function n(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?o(Object(s),!0).forEach((function(e){i(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function i(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}const r={name:"TaskMenu",props:{task:{type:Object,default:function(){return{}}},loadStatus:{type:Boolean,default:!1},colorShow:{type:Boolean,default:!0},size:{type:String,default:"small"},icon:{type:String,default:"md-radio-button-off"},completedIcon:{type:String,default:"md-checkmark-circle"}},data:function(){return{}},computed:n(n({},(0,a.rn)(["taskColorList","taskLoading","taskFlows","taskFlowItems"])),{},{loadIng:function(){var t=this;if(this.loadStatus)return!0;var e=this.taskLoading.find((function(e){return e.id==t.task.id}));return e&&e.num>0},flow:function(){var t=this;return this.taskFlows.find((function(e){return e.task_id==t.task.id}))},turns:function(){var t=this;if(!this.flow)return[];var e=this.taskFlowItems.find((function(e){return e.id==t.flow.flow_item_id}));return e?this.taskFlowItems.filter((function(t){var s=t.id;return e.turns.includes(s)})):[]}}),methods:{show:function(){this.$refs.dropdown.show()},hide:function(){this.$refs.dropdown.hide()},handleClick:function(){this.$refs.dropdown.handleClick()},dropTask:function(t){var e=this;if($A.isJson(t))t.name&&this.updateTask({color:t.color});else if($A.leftExists(t,"turn::")){var s=$A.leftDelete(t,"turn::");if(s==this.task.flow_item_id)return;this.updateTask({flow_item_id:s})}else{var a=this.task;switch(t){case"complete":if(this.task.complete_at)return;this.updateTask({complete_at:$A.formatDate("Y-m-d H:i:s")}).then((function(){e.$store.dispatch("saveTaskCompleteTemp",a)}));break;case"uncomplete":if(!this.task.complete_at)return;this.updateTask({complete_at:!1}).then((function(){e.$store.dispatch("forgetTaskCompleteTemp",a.id)}));break;case"archived":case"remove":this.archivedOrRemoveTask(t)}}},visibleChange:function(t){t&&this.$store.dispatch("getTaskFlow",this.task.id)},updateTask:function(t){var e=this;return new Promise((function(s){e.loadIng||(Object.keys(t).forEach((function(s){return e.$set(e.task,s,t[s])})),e.$store.dispatch("taskUpdate",Object.assign(t,{task_id:e.task.id})).then((function(t){var e=t.msg;$A.messageSuccess(e),s()})).catch((function(t){var s=t.msg;$A.modalError(s),e.$store.dispatch("getTaskOne",e.task.id)})))}))},archivedOrRemoveTask:function(t){var e=this,s="remove"==t?"removeTask":"archivedTask",a="remove"==t?"删除":"归档",o=this.task.parent_id>0?"子任务":"任务";$A.modalConfirm({title:a+o,content:"你确定要"+a+o+"【"+this.task.name+"】吗？",loading:!0,onOk:function(){e.loadIng?e.$Modal.remove():e.$store.dispatch(s,e.task.id).then((function(t){var s=t.msg;$A.messageSuccess(s),e.$Modal.remove()})).catch((function(t){var s=t.msg;$A.modalError(s,301),e.$Modal.remove()}))}})}}};const c=(0,s(51900).Z)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("EDropdown",{ref:"dropdown",attrs:{trigger:"click",size:t.size,placement:"bottom"},on:{command:t.dropTask,"visible-change":t.visibleChange}},[t._t("icon",(function(){return[s("div",{staticClass:"task-menu-icon"},[t.loadIng?s("div",{staticClass:"loading"},[s("Loading")],1):[t.task.complete_at?s("Icon",{staticClass:"completed",attrs:{type:t.completedIcon}}):s("Icon",{staticClass:"uncomplete",attrs:{type:t.icon}})]],2)]})),t._v(" "),s("EDropdownMenu",{staticClass:"task-menu-more-dropdown",attrs:{slot:"dropdown"},slot:"dropdown"},[s("li",{staticClass:"task-menu-more-warp",class:t.size},[s("ul",[t.flow?t.turns.length>0?t._l(t.turns,(function(e){return s("EDropdownItem",{key:e.id,attrs:{command:"turn::"+e.id}},[s("div",{staticClass:"item flow"},[e.id==t.task.flow_item_id&&!0!==t.flow.auto_assign?s("Icon",{staticClass:"check",attrs:{type:"md-checkmark-circle-outline"}}):s("Icon",{attrs:{type:"md-radio-button-off"}}),t._v(" "),s("div",{staticClass:"flow-name",class:e.status},[t._v(t._s(e.name))])],1)])})):[t.task.complete_at?s("EDropdownItem",{attrs:{command:"uncomplete"}},[s("div",{staticClass:"item red"},[s("Icon",{attrs:{type:"md-checkmark-circle-outline"}}),t._v(t._s(t.$L("标记未完成"))+"\n                        ")],1)]):s("EDropdownItem",{attrs:{command:"complete"}},[s("div",{staticClass:"item"},[s("Icon",{attrs:{type:"md-radio-button-off"}}),t._v(t._s(t.$L("完成"))+"\n                        ")],1)])]:s("EDropdownItem",{staticClass:"load-flow",attrs:{disabled:""}},[s("div",{staticClass:"load-flow-warp"},[s("Loading")],1)]),t._v(" "),0===t.task.parent_id?[s("EDropdownItem",{attrs:{divided:t.turns.length>0,command:"archived"}},[s("div",{staticClass:"item"},[s("Icon",{attrs:{type:"ios-filing"}}),t._v(t._s(t.$L("归档"))+"\n                        ")],1)]),t._v(" "),s("EDropdownItem",{attrs:{command:"remove"}},[s("div",{staticClass:"item hover-del"},[s("Icon",{attrs:{type:"md-trash"}}),t._v(t._s(t.$L("删除"))+"\n                        ")],1)]),t._v(" "),t.colorShow?t._l(t.taskColorList,(function(e,a){return s("EDropdownItem",{key:a,attrs:{divided:0==a,command:e}},[s("div",{staticClass:"item"},[s("i",{staticClass:"taskfont",style:{color:e.color||"#f9f9f9"},domProps:{innerHTML:t._s(e.color==t.task.color?"&#xe61d;":"&#xe61c;")}}),t._v(t._s(t.$L(e.name))+"\n                            ")])])})):t._e()]:s("EDropdownItem",{attrs:{command:"remove",divided:t.turns.length>0}},[s("div",{staticClass:"item"},[s("Icon",{attrs:{type:"md-trash"}}),t._v(t._s(t.$L("删除"))+"\n                    ")],1)])],2)])])],2)}),[],!1,null,null,null).exports},8603:(t,e,s)=>{s.r(e),s.d(e,{default:()=>c});var a=s(20629);function o(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function n(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?o(Object(s),!0).forEach((function(e){i(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function i(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}const r={components:{TaskMenu:s(65691).Z},data:function(){return{nowTime:$A.Time(),nowInterval:null,loadIng:0,dashboard:"today"}},mounted:function(){var t=this;this.nowInterval=setInterval((function(){t.nowTime=$A.Time()}),1e3)},destroyed:function(){clearInterval(this.nowInterval)},activated:function(){this.$store.dispatch("getTaskForDashboard")},deactivated:function(){this.$store.dispatch("forgetTaskCompleteTemp",!0)},computed:n(n(n({},(0,a.rn)(["userInfo","cacheProjects","taskId"])),(0,a.Se)(["dashboardTask","transforTasks"])),{},{title:function(){switch(this.dashboard){case"today":return this.$L("今日任务");case"overdue":return this.$L("超期任务");default:return""}},list:function(){var t=[];switch(this.dashboard){case"today":t=this.transforTasks(this.dashboardTask.today);break;case"overdue":t=this.transforTasks(this.dashboardTask.overdue)}return t.sort((function(t,e){return $A.Date(t.end_at)-$A.Date(e.end_at)}))}}),methods:{openTask:function(t){this.$store.dispatch("openTask",t)},openMenu:function(t){var e=this.$refs["taskMenu_".concat(t.id)];e&&e[0].handleClick()},expiresFormat:function(t){return $A.countDownFormat(t,this.nowTime)}}};const c=(0,s(51900).Z)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-dashboard"},[s("PageTitle",{attrs:{title:t.$L("仪表盘")}}),t._v(" "),s("div",{staticClass:"dashboard-wrapper"},[s("div",{staticClass:"dashboard-hello"},[t._v(t._s(t.$L("欢迎您，"+t.userInfo.nickname)))]),t._v(" "),s("div",{staticClass:"dashboard-desc"},[t._v(t._s(t.$L("以下是你当前的任务统计数据")))]),t._v(" "),s("ul",{staticClass:"dashboard-block"},[s("li",{on:{click:function(e){t.dashboard="today"}}},[s("div",{staticClass:"block-title"},[t._v(t._s(t.$L("今日待完成")))]),t._v(" "),s("div",{staticClass:"block-data"},[s("div",{staticClass:"block-num"},[t._v(t._s(t.dashboardTask.today.length))]),t._v(" "),s("i",{staticClass:"taskfont"},[t._v("")])])]),t._v(" "),s("li",{on:{click:function(e){t.dashboard="overdue"}}},[s("div",{staticClass:"block-title"},[t._v(t._s(t.$L("超期未完成")))]),t._v(" "),s("div",{staticClass:"block-data"},[s("div",{staticClass:"block-num"},[t._v(t._s(t.dashboardTask.overdue.length))]),t._v(" "),s("i",{staticClass:"taskfont"},[t._v("")])])]),t._v(" "),s("li",[s("div",{staticClass:"block-title"},[t._v(t._s(t.$L("参与的项目")))]),t._v(" "),s("div",{staticClass:"block-data"},[s("div",{staticClass:"block-num"},[t._v(t._s(t.cacheProjects.length))]),t._v(" "),s("i",{staticClass:"taskfont"},[t._v("")])])])]),t._v(" "),t.list.length>0?[s("div",{staticClass:"dashboard-title"},[t._v(t._s(t.title))]),t._v(" "),s("ul",{staticClass:"dashboard-list overlay-y"},t._l(t.list,(function(e,a){return s("li",{key:a,class:{complete:e.complete_at},style:e.color?{backgroundColor:e.color}:{},on:{click:function(s){return t.openTask(e)}}},[e.p_name?s("em",{staticClass:"priority-color",style:{backgroundColor:e.p_color}}):t._e(),t._v(" "),s("TaskMenu",{ref:"taskMenu_"+e.id,refInFor:!0,attrs:{task:e}},[s("div",{staticClass:"drop-icon",attrs:{slot:"icon"},on:{click:function(t){t.stopPropagation()}},slot:"icon"},[s("i",{staticClass:"taskfont",domProps:{innerHTML:t._s(e.complete_at?"&#xe627;":"&#xe625;")}})])]),t._v(" "),s("div",{staticClass:"item-title"},[e.flow_item_name?s("span",{class:e.flow_item_status,on:{click:function(s){return s.stopPropagation(),t.openMenu(e)}}},[t._v(t._s(e.flow_item_name))]):t._e(),t._v(" "),!0===e.sub_top?s("span",[t._v(t._s(t.$L("子任务")))]):t._e(),t._v(" "),e.sub_my&&e.sub_my.length>0?s("span",[t._v("+"+t._s(e.sub_my.length))]):t._e(),t._v(" "),t._v("\n                        "+t._s(e.name)+"\n                    ")]),t._v(" "),e.desc?s("div",{staticClass:"item-icon"},[s("i",{staticClass:"taskfont"},[t._v("")])]):t._e(),t._v(" "),e.sub_num>0?s("div",{staticClass:"item-icon"},[s("i",{staticClass:"taskfont"},[t._v("")]),t._v(" "),s("em",[t._v(t._s(e.sub_complete)+"/"+t._s(e.sub_num))])]):t._e(),t._v(" "),s("div",{class:["item-icon",e.today?"today":"",e.overdue?"overdue":""]},[s("i",{staticClass:"taskfont"},[t._v("")]),t._v(" "),s("em",[t._v(t._s(t.expiresFormat(e.end_at)))])])],1)})),0)]:t._e()],2)],1)}),[],!1,null,null,null).exports}}]);