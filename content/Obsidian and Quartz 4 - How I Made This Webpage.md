---
title: Obsidian and Quartz - How I Made This Webpage
draft: false
tags:
  - obsidian
  - quartz
---

I am aware that this webpage is not in the same style at the other creative and eclectic old-web Neocities pages out there.  The reason for this is because I did not build this page by writing HTML.

I used a note-taking app [Obsidian](https://obsidian.md/) and static-site generator [Quartz 4](https://quartz.jzhao.xyz/), both free software.  With these tools, I am able to write my notes inside of Obsidian, sync the changes to github, and Quartz will turn those notes into my neocities page.  The design of this page comes from the Obsidian Theme that I specified that it use. With Neocities, I am able to have a publicly hosted webpage for free and with minimal effort.  This gives me more time to make pasta.

To set up a webpage like this for yourself, start with the "Getting Started" section of Quartz 4 as you need to install git, Node, and npm first.  You also need to install Obsidian and set up a github and neocities account (if you don't already have them).  While not required, I highly recommend VSCode too, as it allows you to push your notes to github to update your webpage.

The Quartz documentation will give you the command lines needed to install Note and npm and on how to sync quartz to a github repository. 

For a video guide, I like nicole van der Hoeven's video here: https://www.youtube.com/watch?v=6s6DT1yN4dw

She has a lot of great videos on using Obsidian too, both for work, learning, and ttrpgs.

## Using Obsidian with Quartz

The folder created by Quartz will be your Obsidian folder.  For me, that folder was in my Documents directory.  I renamed the folder from Quartz to "PastaMadness"  I then opened up that folder as a Vault in Obsidian.  This created a .obsidian folder within the directory.  This folder was at the same level as the .git and .github folders.

Within the directory is also a folder called "content".  "Content" is where all of your notes and images that you want published to go.  

Within contents, I created a folder named "assets".   In Obsidian's settings under "Files and links" is a setting called "Attachment Folder Path".  Set the assets folder as the attachment folder path.  Now, when any images or other attachments are added to your notes, they will all be saved in this assets folder so that they are not cluttering up your other notes.

Quartz requires some specific frontmatter to be included in the Obsidian Notes.  To ensure that it is consistent for each note, install the Templater plugin for Obsidian. Outside of the content folder, create a folder named "templates".  I suggest that this be outside of the content folder as you do not want it published to your site.  Within the templates folder, create a new file named NewNote.md and paste in the code below

```
<%*
const title = tp.file.title;
let newTitle;
if (title.startsWith("Untitled")) { 
    newTitle = await tp.system.prompt("Enter note title");
    // You can split the newTitle here and save it in another variable or variables
    await tp.file.rename(newTitle);
}
-%>
---
title: <% newTitle %>
draft: false
tags:
  - 
---
```

Under the obsidian settings, go to Community Plugins > Templater > Settings
At the very top, set the templates directory to the templates folder you made to hold your NewNote template.

Then scroll down and find "Enable Folder Templates".  turn it on and fill out the boxes.  For the folder of "content" we want to apply the "templates/NewNote" file.  Now, whenever you are creating a new obsidian note within the contents file, the template will automatically be applied.

## Github Workflow
Another step needed to get Obsidian and Quartz running on neocities is to set up a workflow on github so that it knows to utilize quartz to generate the static site and to know where to publish it at.

Under your project folder/.github/workflows create a file named deploy.yaml and save it with the code below.

```
name: Deploy Quartz site to neocities

on:
  push:
    branches:
      - v4

env:
  THEME_NAME: wasp

permissions:
  contents: read
  pages: write
  id-token: write
concurrency: # prevent concurrent deploys doing strange things
  group: deploy-to-neocities
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-22.04
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0 # Fetch all history for git info
      - uses: actions/setup-node@v4
        with:
          node-version: 22
      - name: Install Dependencies
        run: npm ci
      - name: Fetch Quartz Theme
        run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
      - name: Build Quartz
        run: npx quartz build
      - name: Deploy to neocities
        uses: bcomnes/deploy-to-neocities@v3
        with:
          api_token:  ${{ secrets.NEOCITIES_API_TOKEN }}
          cleanup: false
          neocities_supporter: false # set this to true if you have a supporter account and want to bypass unsuported files filter.
        preview_before_deploy: false # print a deployment plan prior to waiting for files to upload.
          dist_dir: public
```

You can change the THEME_NAME to a different theme, limited to this list: https://github.com/saberzero1/quartz-themes?tab=readme-ov-file#supported-themes 

From Neocities, you will need to get an API token generated.  You can find your API token at the site below.  Change the link to include your sitename.

```
https://neocities.org/settings/{{your-sitename}}#api_key
```

## Syncing Notes

Now that you have quartz installed and built, your github repo created and linked, your obsidian vault set up, your neocities account created and API token generated, and the github workflow file created, you can stitch it all together.  This is where VSCode comes in handy.

In VSCode, when you are viewing the folder of your quartz and obsidian files, there will be a terminal at the bottom that is in that directory.  You can also use the folder explorer to open up powershell or a command terminal by typing "powershell" or "cmd" into the address bar of the folder you want the terminal to be directed to.  However you do it, you need to be pointing to the folder when you run the script 

```
npx quartz sync
```
And this sync all of your changes to github, trigger the workflow file, and publish the static site to neocities.

And your webpage should be made!

As you add more notes to obsidian and want to publish new updates, just sync the changes with github and your website will update.  Neocities pages and digital gardens take time to build and cultivate as your knowledge accumulates.  Keep tending to it over time and you will be surprised at how quickly it will grow.