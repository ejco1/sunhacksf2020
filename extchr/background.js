// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
'use strict';

chrome.alarms.onAlarm.addListener(function() {
  var x = 0;
  while(chrome.tabs.audible == false && x == 0){ // So this checks to see if no more tabs are playing sound, and makes sure it only plays once.
  chrome.browserAction.setBadgeText({text: ''});
  chrome.notifications.create({
      type:     'basic',
      iconUrl:  'icon.png',
      title:    'Time\'s up',
      message:  'Your break is over\!',
      
      priority: 0});
      x = 1;
  }
});


