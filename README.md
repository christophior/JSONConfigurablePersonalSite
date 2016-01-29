JSON Configurable Personal Site
======================

[![Build Status](https://travis-ci.org/christophior/JSONConfigurablePersonalSite.svg?branch=develop)](https://travis-ci.org/christophior/JSONConfigurablePersonalSite)

## Deploying
To deploy to Heroku just click on the button below, login/register to Heroku and chose an app name. Once deployed the example app can be found at [https://appname.herokuapp.com/](http://jsonconfigurablepersonalsite.herokuapp.com/)

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

Heroku is a great free way to host your site. Refer to the following docs to learn how to use Heroku with Github:
[https://devcenter.heroku.com/articles/github-integration](https://devcenter.heroku.com/articles/github-integration)  
[https://devcenter.heroku.com/articles/git](https://devcenter.heroku.com/articles/git)


## Running
```
git clone https://github.com/christophior/JSONConfigurablePersonalSite.git
cd JSONConfigurablePersonalSite
npm install
npm start
```
the application will be running on http://localhost:8080

## Configuring your own site
To configure your own website after cloning this repo you will only need to work with these two files:

### **config/requiredInfo.json**
This file will be where you will put what I would consider required information to make your personal site as 'complete' as possible. 

Data stored in this file includes site title, site description, personal photograph (avatar), site background, description displayed on the home page, PDF link to your resume, list of shared links with icons, and list of projects along with the projects title.

#### icons
In **requiredInfo.json** there is a section called **icons** that looks like the following:
```
"icons": [
    {"icon": "page", "link": "/resume"},
    {"icon": "social-github", "link": "http://github.com/christophior"},
    {"icon": "social-linkedin", "link": "/linkedin"},
    {"icon": "mail", "link": "/email"}
  ]
```
In the code above we are specifying the icons that link to sites such as your Github, LinkedIn, Twitter, etc. along with an icon that will be used for the respective link. Each entry in the icons array requires an icon value and a link value.

Icons and icon names are consistent with the [Foundation Icon Font](http://zurb.com/playground/foundation-icon-fonts-3#allicons) which can be found here: **[Foundation Icons](http://zurb.com/playground/foundation-icon-fonts-3#allicons)**. 

Links for our icons can either be relative links based on entries that you have added to your **links.json** file (*like  the resume/linkedin/email icon*) or absolute links (*like the Github icon*).

#### projects
Projects are similar to icons except that they have different attributes, the following is an example of projects:
```
"projects": [
    {"title":"Dogecoin Ticker", "link":"/dogecointicker"}
  ]
```
Projects require a title and a link. 

Project titles are what will be shown on your website. Links just like icons can be either relative or absolute.


### **config/links.json**
This file is where you will specify links that will redirect when you go to certain paths in your site. By default the / path is your home page which will show your home page which will be populated with the info you have provided in your **requiredInfo.json** file. 

/resume is also taken up by default, this path will grab your resume PDF that you specified under the *resumeFile* attribute in **requiredInfo.json**

```
{
  "dogecointicker": "https://play.google.com/store/apps/details?id=christophior.dogecointicker.app",
  "gist": "https://gist.github.com/christophior",
  "github": "http://github.com/christophior",
  "linkedin": "https://www.linkedin.com/in/christophior"
}
```

The following file shows all the specified paths along with the links that they will redirect to when visited. If a path that is not specified in **links.json** or in **app.js** (initially just /resume) then it will by default redirect back to the site's root

[http://www.christophior.com/github](http://www.christophior.com/github) -> [http://github.com/christophior](http://github.com/christophior)

[http://www.christophior.com/gist](http://www.christophior.com/gist) -> [https://gist.github.com/christophior](https://gist.github.com/christophior)

[http://www.christophior.com/randompath](http://www.christophior.com/randompath) -> [http://www.christophior.com/](http://www.christophior.com/)

## Miscellaneous
### **Favicon**
To update the site's favicon you will need to replace the **favicon.ico** file that is present in */static/img/*. 


### **Images**
For images such as your avatar, site background, etc. you can either use a URL for an image that is served somewhere else online or use a relative path like the following
~~~
  "avatar": "/img/avatar.jpg",
  "background": "/img/background.jpg",
~~~
You can also go to */static/img* and replace the *avatar.jpg* and *background.jpg* files with the images you wish to use and leave the default URLs in place.

## Contribute
Have an idea to make this app better? Fork this repo and play around with it, make it better and if you think you have something worth sharing make a pull request to the **develop** branch on this repository. 


#### **Weirdly written in Austin, Texas!**