import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Search from './search.js';
import ReactDOM from 'react-dom';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

class PhotoHandler extends Component {
    
    async getGalleryIcons(museumName) {
        let arrayOfPhotoLinks = [];
        await fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=0eb33f98a43b11f4a1b4ebea55cb8783&text=${museumName}&format=json&nojsoncallback=1`,
            {
                headers: {"Origin": "http://localhost:3000/"}
            }
        ).then(function(response) {
            let jsonResponse = response.json();
            if(jsonResponse.stat === "fail"){
                throw "some error";
            }else{
                return jsonResponse;
            }
        }).catch(function(error) {
            return ["https://thewindowsclub-thewindowsclubco.netdna-ssl.com/wp-content/uploads/2018/06/Broken-image-icon-in-Chrome.gif", "https://thewindowsclub-thewindowsclubco.netdna-ssl.com/wp-content/uploads/2018/06/Broken-image-icon-in-Chrome.gif", "https://thewindowsclub-thewindowsclubco.netdna-ssl.com/wp-content/uploads/2018/06/Broken-image-icon-in-Chrome.gif", "https://thewindowsclub-thewindowsclubco.netdna-ssl.com/wp-content/uploads/2018/06/Broken-image-icon-in-Chrome.gif", "https://thewindowsclub-thewindowsclubco.netdna-ssl.com/wp-content/uploads/2018/06/Broken-image-icon-in-Chrome.gif", "https://thewindowsclub-thewindowsclubco.netdna-ssl.com/wp-content/uploads/2018/06/Broken-image-icon-in-Chrome.gif"];
        }).then(function(data) {
            let photodata;
            if (data.photos != undefined) {
                photodata = data.photos.photo;
                for (let j = 0; j < 6; j++) {
                arrayOfPhotoLinks.push(`https://farm${photodata[j].farm}.staticflickr.com/${photodata[j].server}/${photodata[j].id}_${photodata[j].secret}_q.jpg`);
            }   
            } else {
                photodata = data;
            }
            for (let j = 0; j < 6; j++) {
                arrayOfPhotoLinks.push(photodata[j]);
            }            
        });
        return arrayOfPhotoLinks;
    }
    
}

export default PhotoHandler;