# Simple Browser

Simple Browser is a fast, minimal browser that protects your privacy. It includes an interface designed to minimize distractions, and features such as:

- Information from [DuckDuckGo](https://duckduckgo.com) in the search bar.
- Full-text search for visited pages
- Ad and tracker blocking
- Automatic reader view
- Tasks (tab groups)
- Password manager integration
- Dark theme

### Installation on Linux

- To install the .deb file, use `sudo dpkg -i /path/to/download`
- To install the RPM build, use `sudo rpm -i /path/to/download --ignoreos`
- On Arch Linux it's in the community repository, use `sudo pacman -Sy min`
- On Raspberry Pi, you can install Min from [Pi-Apps](https://github.com/Botspot/pi-apps).

### Building binaries

In order to build Simple Browser from source, follow the installation instructions above, then use one of the following commands to create binaries:

- `npm run buildWindows`
- `npm run buildMacIntel`
- `npm run buildMacArm`
- `npm run buildDebian`
- `npm run buildRaspi` (for 32-bit Raspberry Pi)
- `npm run buildLinuxArm64` (for 64-bit Raspberry Pi or other ARM Linux)
- `npm run buildRedhat`

Depending on the platform you are building for, you may need to install additional dependencies:

- If you are using macOS and building a package for Linux, install [Homebrew](http://brew.sh), then run `brew install fakeroot dpkg` first.
- If you are using macOS or Linux and building a package for Windows, you will need to install [Mono](https://www.mono-project.com/) and [Wine](https://www.winehq.org/).
- If you are building a macOS package, you'll need to install Xcode and the associated command-line tools. You may also need to set your default SDK to macOS 11.0 or higher, which you can do by running `export SDKROOT=/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX11.1.sdk`. The exact command will depend on where Xcode is installed and which SDK version you're using.
- To build on Windows, you'll need to install Visual Studio. Once it's installed, you may also need to run `npm config set msvs_version 2019` (or the appropriate version).

### Contributing Translations

#### Adding a new language

- Find the language code that goes with your language from [this list](https://source.chromium.org/chromium/chromium/src/+/main:ui/base/l10n/l10n_util.cc;l=55) (line 55 - 230).
- In the `localization/languages` directory, create a new file, and name it "[your language code].json".
- Open your new file, and copy the contents of the <a href="https://github.com/minbrowser/min/blob/master/localization/languages/en-US.json">localization/languages/en-US.json</a> file into your new file.
- Change the "identifier" field in the new file to the language code from step 1.
- Inside the file, replace each English string in the right-hand column with the equivalent translation.
- (Optional) See your translations live by following the [development instructions](#installing) above. Min will display in the same language as your operating system, so make sure your computer is set to the same language that you're translating.
- That's it! Make a pull request with your changes.

#### Updating an existing language

- Find the language file for your language in the `localization/languages` directory.
- Look through the file for any items that have a value of "null", or that have a comment saying "missing translation".
- For each of these items, look for the item with the same name in the `en-US.json` file.
- Translate the value from the English file, replace "null" with your translation, and remove the "missing translation" comment.
- Make a pull request with the updated file.