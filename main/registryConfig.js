var regedit = require('regedit')

var installPath = process.execPath

var keysToCreate = [
  'HKCU\\Software\\Classes\\SimpleBrowser',
  'HKCU\\Software\\Classes\\SimpleBrowser\\Application',
  'HKCU\\Software\\Classes\\SimpleBrowser\\DefaulIcon',
  'HKCU\\Software\\Classes\\SimpleBrowser\\shell\\open\\command',
  'HKCU\\Software\\Clients\\StartMenuInternet\\SimpleBrowser\\Capabilities\\FileAssociations',
  'HKCU\\Software\\Clients\\StartMenuInternet\\SimpleBrowser\\Capabilities\\StartMenu',
  'HKCU\\Software\\Clients\\StartMenuInternet\\SimpleBrowser\\Capabilities\\URLAssociations',
  'HKCU\\Software\\Clients\\StartMenuInternet\\SimpleBrowser\\DefaultIcon',
  'HKCU\\Software\\Clients\\StartMenuInternet\\SimpleBrowser\\InstallInfo',
  'HKCU\\Software\\Clients\\StartMenuInternet\\SimpleBrowser\\shell\\open\\command'
]

var registryConfig = {
  'HKCU\\Software\\RegisteredApplications': {
    SimpleBrowser: {
      value: 'Software\\Clients\\StartMenuInternet\\SimpleBrowser\\Capabilities',
      type: 'REG_SZ'
    }
  },
  'HKCU\\Software\\Classes\\SimpleBrowser': {
    default: {
      value: 'Simple Browser Document',
      type: 'REG_DEFAULT'
    }
  },
  'HKCU\\Software\\Classes\\SimpleBrowser\\Application': {
    ApplicationIcon: {
      value: installPath + ',0',
      type: 'REG_SZ'
    },
    ApplicationName: {
      value: 'SimpleBrowser',
      type: 'REG_SZ'
    },
    AppUserModelId: {
      value: 'SimpleBrowser',
      type: 'REG_SZ'
    }
  },
  'HKCU\\Software\\Classes\\SimpleBrowser\\DefaulIcon': {
    ApplicationIcon: {
      value: installPath + ',0',
      type: 'REG_SZ'
    }
  },
  'HKCU\\Software\\Classes\\SimpleBrowser\\shell\\open\\command': {
    default: {
      value: '"' + installPath + '" "%1"',
      type: 'REG_DEFAULT'
    }
  },
  'HKCU\\Software\\Classes\\.htm\\OpenWithProgIds': {
    SimpleBrowser: {
      value: 'Empty',
      type: 'REG_SZ'
    }
  },
  'HKCU\\Software\\Classes\\.html\\OpenWithProgIds': {
    SimpleBrowser: {
      value: 'Empty',
      type: 'REG_SZ'
    }
  },
  'HKCU\\Software\\Clients\\StartMenuInternet\\SimpleBrowser\\Capabilities\\FileAssociations': {
    '.htm': {
      value: 'SimpleBrowser',
      type: 'REG_SZ'
    },
    '.html': {
      value: 'SimpleBrowser',
      type: 'REG_SZ'
    }
  },
  'HKCU\\Software\\Clients\\StartMenuInternet\\SimpleBrowser\\Capabilities\\StartMenu': {
    StartMenuInternet: {
      value: 'SimpleBrowser',
      type: 'REG_SZ'
    }
  },
  'HKCU\\Software\\Clients\\StartMenuInternet\\SimpleBrowser\\Capabilities\\URLAssociations': {
    http: {
      value: 'SimpleBrowser',
      type: 'REG_SZ'
    },
    https: {
      value: 'SimpleBrowser',
      type: 'REG_SZ'
    }
  },
  'HKCU\\Software\\Clients\\StartMenuInternet\\SimpleBrowser\\DefaultIcon': {
    default: {
      value: installPath + ',0',
      type: 'REG_DEFAULT'
    }
  },
  'HKCU\\Software\\Clients\\StartMenuInternet\\SimpleBrowser\\InstallInfo': {
    IconsVisible: {
      value: 1,
      type: 'REG_DWORD'
    }
  },
  'HKCU\\Software\\Clients\\StartMenuInternet\\SimpleBrowser\\shell\\open\\command': {
    default: {
      value: installPath,
      type: 'REG_DEFAULT'
    }
  }
}

var registryInstaller = {
  install: function () {
    return new Promise(function (resolve, reject) {
      regedit.createKey(keysToCreate, function (err) {
        regedit.putValue(registryConfig, function (err) {
          if (err) {
            reject()
          } else {
            resolve()
          }
        })
      })
    })
  },
  uninstall: function () {
    return new Promise(function (resolve, reject) {
      regedit.deleteKey(keysToCreate, function (err) {
        if (err) {
          reject()
        } else {
          resolve()
        }
      })
    })
  }
}
