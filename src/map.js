import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Search from './search.js';
import PhotoHandler from './photo-handler.js';
import ReactDOM from 'react-dom';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

class SimpleMap extends Component {
    state = {
        center: {
          lat: 52.3600,
          lng: 4.8852
        },
        zoom: 13,
        mapOpen: true,
        currentMarkers: [],
        markers: [
            {title: "Rijksmuseum", mid: "rijksmuseum", link: "https://www.rijksmuseum.nl/en", free: true, location: {lat: 52.3600, lng: 4.8852}},
            {title: "Anne Frank House", mid: "annefrankhouse", link: "http://www.annefrank.org/en/", free: true, location: {lat: 52.375218, lng: 4.883977}},
            {title: "Vincent Van Gogh Museum", mid: "vangoghmuseum", link: "https://www.vangoghmuseum.nl/en", free: true, location: {lat: 52.358416, lng: 4.881076}},
            {title: "Rembrandt House Museum", mid: "rembrandthouse", link: "https://www.rembrandthuis.nl/en/", free: true, location: {lat: 52.369369, lng: 4.901235}},
            {title: "Dutch Resistance Museum", mid: "dutchresistance", link: "https://www.verzetsmuseum.org/museum/en/visitorinformation", free: true, location: {lat: 52.367810, lng: 4.912761}},
            {title: "Ons' Lieve Heer op Solder", mid: "onslieveheeropsolder", link: "https://www.opsolder.nl/en", free: true, location: {lat: 52.375133, lng: 4.899475}},
            {title: "The National Maritime Museum Amsterdam", mid: "nationalmaritimemuseum", link: "https://www.hetscheepvaartmuseum.com/", free: true, location: {lat: 52.371708, lng: 4.914880}},
            {title: "Museum of Bags and Purses", mid: "bagsandpurses", link: "https://tassenmuseum.nl/en/", free: true, location: {lat: 52.365270, lng: 4.896824}},
            {title: "NEMO Science Museum", mid: "nemo", link: "https://www.nemosciencemuseum.nl/en/", free: true, location: {lat: 52.374211, lng: 4.912339}},
            {title: "Stedelijk Museum Amsterdam", mid: "stedelijk", link: "https://www.stedelijk.nl/en", free: true, location: {lat: 52.358011, lng: 4.879755}},
            {title: "Amsterdam Museum", mid: "amsterdam", link: "https://www.amsterdammuseum.nl/en", free: true, location: {lat: 52.369987, lng: 4.889974}},
            {title: "Royal Palace of Amsterdam", mid: "royalpalace", link: "https://www.paleisamsterdam.nl/en/", free: true, location: {lat: 52.373186, lng: 4.891368}},
            {title: "Tropenmuseum", mid: "tropenmuseum", link: "https://www.tropenmuseum.nl/en/", free: true, location: {lat: 52.362656, lng: 4.922299}},
            {title: "Jewish Historical Museum Amsterdam", mid: "jewishhistoricalmuseum", link: "https://jck.nl/en/location/jewish-historical-museum", free: true, location: {lat: 52.367118, lng: 4.903816}},
            {title: "Portugese Synagoge Amsterdam", mid: "portugesesynagoge", link: "https://jck.nl/en/node/957", free: true, location: {lat: 52.367680, lng: 4.904789}},
            {title: "Oude Kerk Amsterdam", mid: "oudekerk", link: "https://oudekerk.nl/en/", free: true, location: {lat: 52.374367, lng: 4.898207}},
            {title: "Museum Van Loon", mid: "vanloon", link: "https://www.museumvanloon.nl/", free: true, location: {lat: 52.363443, lng: 4.893381}},
            {title: "Museum Het Grachtenhuis", mid: "hetgrachtenhuis", link: "http://www.hetgrachtenhuis.nl/en/", free: true, location: {lat: 52.367887, lng: 4.886289}},
            {title: "EYE Filmmuseum", mid: "eye", link: "https://www.eyefilm.nl/en", free: true, location: {lat: 52.384348, lng: 4.901276}},
            {title: "Foam Amsterdam", mid: "foam", link: "https://www.foam.org/", free: true, location: {lat: 52.364086, lng: 4.893322}},
            {title: "Amsterdam Tulip Museum", mid: "tulip", link: "https://www.amsterdamtulipmuseum.com/en/", free: true, location: {lat: 52.376325, lng: 4.884120}},
            {title: "Museum Willet-Holthuysen", mid: "willetholthuysen", link: "https://www.willetholthuysen.nl/en", free: true, location: {lat: 52.365674, lng: 4.898980}},
            {title: "Diamond Museum Amsterdam", mid: "diamond", link: "https://diamonds-amsterdam.com/", free: true, location: {lat: 52.359447, lng: 4.882488}},
            {title: "De Nieuwe Kerk Amsterdam", mid: "denieuwekerk", link: "https://www.nieuwekerk.nl/en/", free: true, location: {lat: 52.373957, lng: 4.891710}},
            {title: "Micropia Amsterdam", mid: "micropia", link: "https://www.micropia.nl/en/", free: true, location: {lat: 52.366908, lng: 4.912576}},
            {title: "Amsterdam Pipe Museum", mid: "pipe", link: "https://pipemuseum.nl/", free: true, location: {lat: 52.364120, lng: 4.885286}},
            {title: "Allard Pierson Museum", mid: "allardpierson", link: "http://www.allardpiersonmuseum.nl/en", free: true, location: {lat: 52.368732, lng: 4.893031}},
            {title: "Museum Het Schip", mid: "hetschip", link: "https://www.hetschip.nl/en/", free: true, location: {lat: 52.390401, lng: 4.873813}},
            {title: "Bijbels Museum", mid: "bijbels", link: "https://www.bijbelsmuseum.nl/en", free: true, location: {lat: 52.368540, lng: 4.886285}},
            {title: "Hollandsche Schouwburg", mid: "hollandscheschouwburg", link: "https://jck.nl/en/node/965", free: true, location: {lat: 52.366467, lng: 4.911123}},
            {title: "Huis Marseille", mid: "marseille", link: "https://www.huismarseille.nl/en/", free: true, location: {lat: 52.367499, lng: 4.884967}},
            {title: "Amsterdam City Archive", mid: "cityarchive", link: "https://www.amsterdam.nl/stadsarchief/", free: true, location: {lat: 52.364580, lng: 4.892197}},
            {title: "Museum Tot Zover", mid: "totzover", link: "https://www.totzover.nl/english/", free: true, location: {lat: 52.346076, lng: 4.938537}},
            {title: "Cromhouthuis", mid: "cromhouthuis", link: "https://www.cromhouthuis.nl/en", free: true, location: {lat: 52.368540, lng: 4.886285}},
            {title: "Bijzondere Collecties", mid: "bijzondere", link: "http://bijzonderecollecties.uva.nl/en/", free: true, location: {lat: 52.368266, lng: 4.893696}},
            {title: "Outsider Art Museum Amsterdam", mid: "outsider", link: "https://www.outsiderartmuseum.nl/en/", free: true, location: {lat: 52.365772, lng: 4.902782}},
            {title: "Hermitage Amsterdam", mid: "hermitage", link: "https://hermitage.nl/en/", free: false, location: {lat: 52.365295, lng: 4.902447}},
            {title: "Houseboat Museum", mid: "houseboat", link: "https://www.houseboatmuseum.nl/", free: false, location: {lat: 52.370139, lng: 4.882600}},
            {title: "Molen van Sloten - Kuiperijmuseum", mid: "molenvansloten", link: "https://molenvansloten.nl/index.php/sample-page/english/", free: false, location: {lat: 52.341582, lng: 4.792314}},
            {title: "Dutch Costume Museum", mid: "costume", link: "http://hetklederdrachtmuseum.nl/en/", free: false, location: {lat: 52.367374, lng: 4.887814}}
        ],
        SimpleMapDidMount: false,
    }
    
    toggleSearch = () => {
        if (this.state.mapOpen === true) {
            this.setState({ mapOpen: false })
        } else (this.setState({mapOpen: true}))
        
    }

    
    async highlightMuseum(name) {
        let self = this;
        let selectedMarker;
        let museumArray = window.markersArray;
        museumArray.forEach(function(museum, index) {
            if (museum.title === name) {
                selectedMarker = museum;
                window.myMap.panTo(museum.position);
                self.populateInfoWindow(selectedMarker, window.infoWindow, window.myMap);
                let museumid = selectedMarker.id;
                console.log(museumid)
                setTimeout(function(){
                    document.getElementById(museumid).focus();
                }, 800);
            }
        })
    }
 
    initializeData(map, maps) {
        window.myMap = map;
        window.myMaps = maps;
        
        //deep copy of this.state.markers
        let copyOfMarkers = JSON.parse(JSON.stringify(this.state.markers));    
        this.setState({currentMarkers: copyOfMarkers});
        this.renderMarkers(map, maps, this.state.currentMarkers);
        this.setState({SimpleMapDidMount: true});
    }

    renderMarkers(map, maps, arrayToRender, name=null) {
        let self = this;

        if(window.markersArray === undefined){
            window.markersArray = [];
        }
        
        if(window.markersArray.length > 0){
            for(let n = 0; n < window.markersArray.length; n++){
                window.markersArray[n].setMap(null);
            }
            window.markersArray = [];
        }
       
        if(window.infoWindow === undefined){
            window.infoWindow = new maps.InfoWindow();
        }
        let largeInfoWindow = window.infoWindow;
        for (let i = 0; i < arrayToRender.length; i++) {
            let position = arrayToRender[i].location;
            let title = arrayToRender[i].title;
            let link = arrayToRender[i].link;
            let marker;
            if (arrayToRender[i].free === true && name===title) {
                marker = new maps.Marker({
                    map: map,
                    position: position,
                    title: title,
                    price: "Free admission with Museumkaart",
                    animation: maps.Animation.DROP,
                    link: link,
                    id: arrayToRender[i].mid,
                    icon: "http://maps.google.com/mapfiles/ms/icons/orange-dot.png"
                });
            } else if (arrayToRender[i].free === true && !name) {
                marker = new maps.Marker({
                    map: map,
                    position: position,
                    title: title,
                    animation: maps.Animation.DROP,
                    price: "Free admission with Museumkaart",
                    link: link,
                    id: arrayToRender[i].mid,
                    icon: "http://maps.google.com/mapfiles/ms/icons/orange-dot.png"
                });
            } else if (arrayToRender[i].free === false && name===title) {
                marker = new maps.Marker({
                    map: map,
                    position: position,
                    title: title,
                    price: "Discounted admission with Museumkaart",
                    animation: maps.Animation.DROP,
                    link: link,
                    id: arrayToRender[i].mid,
                    icon: "http://maps.google.com/mapfiles/ms/icons/orange-dot.png"
                });
            } else if (arrayToRender[i].free === false && !name) {
                marker = new maps.Marker({
                    map: map,
                    position: position,
                    title: title,
                    animation: maps.Animation.DROP,
                    price: "Discounted admission with Museumkaart",
                    link: link,
                    id: arrayToRender[i].mid,
                    icon: "http://maps.google.com/mapfiles/ms/icons/orange-dot.png"
                });
            } else if (arrayToRender[i].free === false && name) {
                marker = new maps.Marker({
                    map: map,
                    position: position,
                    title: title,
                    price: "Discounted admission with Museumkaart",
                    link: link,
                    id: arrayToRender[i].mid,
                    icon: "http://maps.google.com/mapfiles/ms/icons/orange-dot.png"
                });
            } else if (arrayToRender[i].free === true && name) {
                marker = new maps.Marker({
                    map: map,
                    position: position,
                    title: title,
                    price: "Free admission with Museumkaart",
                    link: link,
                    id: arrayToRender[i].mid,
                    icon: "http://maps.google.com/mapfiles/ms/icons/orange-dot.png"
                });
            }
            
            window.markersArray.push(marker);
            marker.addListener("click", function() {
                self.populateInfoWindow(marker, largeInfoWindow, map);
            });
        }
    }

    async populateInfoWindow(marker, infowindow, map) {
        if (infowindow.marker != marker) {
            infowindow.marker = marker;
            let photoHandler = new PhotoHandler();
            let galleryIcons = await photoHandler.getGalleryIcons(marker.title);
            infowindow.setContent(`
                <div class="title"><a id=${marker.id} tabIndex="-1" target="_blank" href=${marker.link}>${marker.title}</a></div>
                <div class="price">${marker.price}</div>
                <img class="gallery" alt="${marker.title} picture 1" src=${galleryIcons[0]}>
                <img class="gallery" alt="${marker.title} picture 2" src=${galleryIcons[1]}>
                <img class="gallery" alt="${marker.title} picture 3" src=${galleryIcons[2]}><br>
                <img class="gallery" alt="${marker.title} picture 4" src=${galleryIcons[3]}>
                <img class="gallery" alt="${marker.title} picture 5" src=${galleryIcons[4]}>
                <img class="gallery" alt="${marker.title} picture 6" src=${galleryIcons[5]}><br>
                Images from flickr.com
            `);
            infowindow.open(map, marker);
            infowindow.addListener("closeclick", function() {
            infowindow.close();
            });
        }
    }

  render() {
    return (
      <div style={{ height: '100%', width: '100%' }}>
        <i className="fa fa-bars" onClick={this.toggleSearch}></i>
        {this.state.mapOpen ? <Search museumList={this.state.markers} 
        query={this.props.query} 
        updateQuery={this.props.updateQuery}
        simpleMapDidMount={this.state.SimpleMapDidMount} 
        highlightMuseum={this.highlightMuseum.bind(this)} 
        renderSpecificMarkers={this.renderMarkers.bind(this)} /> : null }
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAI_0G1rHFr1Y586E2PXU_H6d7RqbIxlLM" }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
          onGoogleApiLoaded={({map, maps}) => this.initializeData(map, maps)}
            yesIWantToUseGoogleMapApiInternals={true}
        >
        </GoogleMapReact>
      </div>
    );
  }
}


export default SimpleMap;
