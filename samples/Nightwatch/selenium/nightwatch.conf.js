module.exports = {
    src_folders: ["tests"],
    output_folder: "reports",
    test_workers: {
        "enabled" : true,
        "workers" : "auto"
    },
    parallel_process_delay: 10,
    selenium: {
        "start_process" : false,
    },
    test_settings: {
        default: {
            "selenium_port": 4444,
            "selenium_host": "127.0.0.1",
            "screenshots" : {
                "enabled" : true,
                "path" : __dirname + '/reports/',
                "on_failure": true
            },
        },
        'chrome': {
            desiredCapabilities: {
                browserName: 'chrome',
                chromeOptions: {
                    w3c: false,
                    args: ['window-size=1920,1080', '--ignore-certificate-errors',],
                    prefs: {
                        'directory_upgrade': true,
                        'prompt_for_download': false,
                        'download.default_directory': '/tmp/DMTools/Download'
                    },
                }
            },
        },
        'firefox': {
            desiredCapabilities: {
                browserName: 'firefox',
                acceptInsecureCerts: true,
                trustAllSSLCertificates: true,
                "moz:firefoxOptions": {
                    args: ["--width=1920", "--height=1080"],
                    prefs: {
                        "browser.download.folderList": 2,
                        "browser.download.manager.showWhenStarting": false,
                        "browser.download.panel.shown": false,
                        "browser.download.dir": "/tmp/DMTools/Download",
                        "browser.download.useDownloadDir": true,
                        "browser.helperApps.neverAsk.saveToDisk": "application/octet-stream,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                    },
                },
            },
        }
    }
};

