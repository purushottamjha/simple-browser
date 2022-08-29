var browserUI = require('browserUI.js')
var tabState = require('tabState.js')

const sessionRestore = { 
  restore: function(){
    tabState.initialize()

      // create a new tab with an explanation of what happened
      var newTask = tasks.add()
      var newSessionTab = tasks.get(newTask).tabs.add()

      browserUI.switchToTask(newTask)
      browserUI.switchToTab(newSessionTab)
  },
  initialize: function () {
  }
}

module.exports = sessionRestore
