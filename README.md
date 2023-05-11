# _High-School Jukebox_   📻 🎶 


### _"Oldies but Goodies"_ 


#### A Spotify tracklist generator based on users age and genre to find the top tracks from user's high-school years. 

#### By _**Cat Denton**_ , _**Faisal Rana**_ ,_**Marni Sucher**_ , _**Karlson Drendel**_ and _**Sofia Acosta**_. 


## Technologies Used
```
* HTML5
* Javascript ES6
* Node Package Manager
* CSS
* css-loader 3.2.0
* Babel/core 7.6.4
* Bootstrap 4.5.0
* JQuery-3.5.1
* clean-webpack-plugin 3.0.0
* eslint 6.3.0
* eslint-loader 3.0.0
* Jest 24.9.0
* Webpack 4.39.3 
* Spotify Web Api 
* OAuth2 Client credential flow 
```

## Description
Provide your name and date of birth and chose a genre and this application will return the tracklist of top songs from your high-school era. A little time machine that will put together a list of your favorite tracks that will take you back in time. 


## Setup/Installation Requirements
* Open Terminal on your machine 
* Navigate to the directory where you would like to save this project.
* Clone the repository to your local drive with `git clone https://github.com/Cat-Denton/High-School-Jukebox`
* Recreate this project's environment with `npm install`
* Create a file to store variables you want to keep secret `touch .env`
* Create production environment with terminal command `npm run build`
* Visit [Developer Spotify](https://developer.spotify.com/documentation/web-api/) and connect Spotify Developer to your Spotify account or create a new Spotify account
* Create a New App in developer account to get Client ID and Client Secret. 
![newapp](/images/new_app.png)
* Store your client ID and client secret in your .env file with the following variable names: CLIENT_ID= CLIENT_SECRET=
* Start server with command `npm run start`

## Known Bugs
* none

## Notes and Resources
* We are using "Search for an Item" endpoint. Please read additional information [here](https://developer.spotify.com/documentation/web-api/reference/#endpoint-search). You can also navigate through all available [API's](https://developer.spotify.com/documentation/web-api/reference/). 
* The type of authentication we are using is OAUTH2 and the authorization flow is 'client credentials flow'. Please see additional information [here](https://developer.spotify.com/documentation/general/guides/authorization-guide/) 

![client flow](/images/client_flow.png)
* Codepen for [Neon Sign](https://codepen.io/KevinOgden/pen/JEwjBB) 
* [Iframe](https://www.w3schools.com/tags/tag_iframe.asp) provided by Spotify to generate playable link
* [Guide](https://leemartin.dev/creating-a-simple-spotify-authorization-popup-in-javascript-7202ce86a02f) on how to integrate OAuth2 using 'implicit grant flow' with Spotify 
## License
* [MIT](https://choosealicense.com/licenses/mit)


Copyright 2021 Cat Denton, Faisal Rana, Karlson Drendel, Marni Sucher, Sofia Acosta

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


## Contact Information
* _Cat Denton <willwdenton@gmail.com>_ 
* _Faisal Rana <inquisitive@gmail.com>_
* _Karlson Drendel <kdrendel99@gmail.com>_
* _Marni Sucher <suchermarni@gmail.com>_
* _Sofia Acosta <sofiaacostarascon@gmail.com>_
