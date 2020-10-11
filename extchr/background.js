// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
'use strict';
function checkAudio(){
  //console.log("Start a function");
chrome.tabs.query({audible: true}, function(tabs) {
  //console.log("I'm here");
  console.log(tabs);
  if(tabs.length > 0){
    checkAudio();
  }else{
    chrome.browserAction.setBadgeText({text: ''});
  chrome.notifications.create({
      type:     'basic',
      iconUrl:  'icon.png',
      title:    'Time\'s up',
      message:  'Your break is over\!',
      
      priority: 0});
  }
    // Toggle the pinned status
    //  var current = tabs[0]
    //  chrome.tabs.update(current.id, {'pinned': !current.pinned});
    });
  }
chrome.alarms.onAlarm.addListener(function() {
  //if(chrome.tabs.tab.audible){
  //  callback();
  //}
  setTimeout(checkAudio(), 3000);
  
});


