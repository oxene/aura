/*
 * Copyright (C) 2013 salesforce.com, inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
({
    replaceBodyContent : function(cmp, event){
        var oldBody = cmp.getAttributes().getValue("body");
        oldBody.destroy();
        oldBody.setValue("new content");
    },
    
    scrollToTop : function(cmp, event, helper) {
    	var scrollEvt = cmp.find("scrollToYTest").getEvent("scrollTo");  	
    	helper.handleScrollTo(scrollEvt, "top", 0);
    },
    
    scrollToBottom : function(cmp, event, helper) {
    	var scrollEvt = cmp.find("scrollToYTest").getEvent("scrollTo");
    	helper.handleScrollTo(scrollEvt, "bottom", 0);
    },
    
    scrollDown : function(cmp, event, helper) {
    	var scrollEvt = cmp.find("scrollToYTest").getEvent("scrollBy");
    	helper.handleScrollBy(scrollEvt, 15, 15, 0);
    },
    
    scrollUp : function(cmp, event, helper) {
    	var scrollEvt = cmp.find("scrollToYTest").getEvent("scrollBy");
    	helper.handleScrollBy(scrollEvt, -15, -15, 0);
    },
    
    handleScrollToBottomUpdate : function (cmp) {
    	var count = cmp.get("v.scrollToBottomCount") + 1;
    	cmp.getAttributes().setValue("scrollToBottomCount", count);
    }
})