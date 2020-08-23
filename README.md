![banner](banner.png)

# [thumb](https://www.figma.com/community/plugin/879412500982971840/thumb---thumbnails-for-your-team) – a figma plugin making thumbnails for your team
Thumb is a plugin that helps teams organize their Figma files and highlight their collaborative effort in a personalized and creative way. Our plugin follows 5 simple steps: 

1. Select the artboards that you want to be displayed in the thumbnail
2. Select the team members of your project
3. Personalize and save your very own hand from over 200 combinations
4. Select your favourite background colour
5. Generate your new thumbnail!

By giving teams the ability to highlight artboards of their choice and showcase each project as a culmination of the hard work of multiple team members using 3D hands, thumb creates a more inclusive and organized workflow so that teams can take pride and ownership in their work. Through fostering personal connections between the work and team members, thumb leads to higher quality work and an unmatched sense of collaboration. 

Install the plugin [here](https://www.figma.com/community/plugin/879412500982971840/thumb---thumbnails-for-your-team).

Created by: [Aaron Jiang](aaronjiang0.me), [Jayden Hsiao](jaydenhsiao.me), [Emily Louie](emily.louie.ca), [Kevin Jiang](kevinjiang.ca), and [Leon Han](https://leon-han19.github.io)

## Quickstart
* Clone the repo
* Run `yarn` to install dependencies
* Run `yarn build` to build distributable files in production mode
* Run `yarn build:watch` to start webpack in watch mode
* Open `Figma` -> `Plugins` -> `Development` -> `New Plugin...` and choose `manifest.json` file from this repo

## Editing the plugin 
* To change the UI of your plugin (the react code), start editing [App.tsx](./src/app/components/App.tsx)
* To interact with the Figma API edit [controller.ts](./src/plugin/controller.ts)
* Read more on the [Figma API Overview](https://www.figma.com/plugin-docs/api/api-overview/)

## Stack
This repo uses:
* React + Webpack
* TypeScript
* Prettier precommit hook
* [Figma Plugin React Template](https://github.com/nirsky/figma-plugin-react-template) by nirsky
* [Ant UI](https://ant.design)
