# Website

This website is built using [Docusaurus 2](https://docusaurus.io/) with below command:

```
npx create-docusaurus@latest myems.io classic
```

Please ignore above command and start from below command.

### Download all the necessary dependencies into the node_modules directory.
```bash
cd myems.io
sudo npm i --unsafe-perm=true --allow-root --legacy-peer-deps
```

### Build

Docusaurus is a modern static website generator so we need to build the website into a directory of static contents and put it on a web server so that it can be viewed. To build the website:
```
sudo npm run build
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Running the development server

To preview your changes as you edit the files, you can run a local development server that will serve your website and reflect the latest changes.
```
cd myems.io
sudo npm run serve
```
By default, a browser window will open at http://localhost:3000.

### Deployment with Azure Static Web Apps CI/CD

A GitHub Actions workflow is triggered when a push to master branch or a pull request on the master branch is: opened, synchronized, reopened, or closed.

Refer to https://dev.to/azure/11-share-content-with-docusaurus-azure-static-web-apps-30hc

### Translate

Use the write-translations CLI command to initialize the JSON translation files for the zh-Hans locale:
```
sudo npm run write-translations -- --locale zh-Hans
```

Copy your untranslated Markdown files to the zh-Hans folder:

```
mkdir -p i18n/zh-Hans/docusaurus-plugin-content-docs/current
cp -r docs/** i18n/zh-Hans/docusaurus-plugin-content-docs/current

mkdir -p i18n/zh-Hans/docusaurus-plugin-content-blog
cp -r blog/** i18n/zh-Hans/docusaurus-plugin-content-blog

mkdir -p i18n/zh-Hans/docusaurus-plugin-content-pages
cp -r src/pages/**.md i18n/zh-Hans/docusaurus-plugin-content-pages
cp -r src/pages/**.mdx i18n/zh-Hans/docusaurus-plugin-content-pages
```

Add all these files to Git.

Translate the Markdown and JSON files in i18n/zh-Hans and commit the translation.

Repeat

Follow the same process for each locale you need to support.

Refer to https://docusaurus.io/docs/next/i18n/git
