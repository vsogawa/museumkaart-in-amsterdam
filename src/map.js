import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 52.3600,
      lng: 4.8852
    },
    zoom: 13,
    currentMarkers: [],
    markers: [
        {title: "Rijksmuseum", link: "https://www.rijksmuseum.nl/en", location: {lat: 52.3600, lng: 4.8852}},
        {title: "Anne Frank House", link: "http://www.annefrank.org/en/", location: {lat: 52.375218, lng: 4.883977}},
        {title: "Van Gogh Museum", link: "https://www.vangoghmuseum.nl/en", location: {lat: 52.358416, lng: 4.881076}},
        {title: "Rembrandt House Museum", link: "https://www.rembrandthuis.nl/en/", location: {lat: 52.369369, lng: 4.901235}},
        {title: "Dutch Resistance Museum", link: "https://www.verzetsmuseum.org/museum/en/visitorinformation", location: {lat: 52.367810, lng: 4.912761}},
        {title: "Ons' Lieve Heer op Solder", link: "https://www.opsolder.nl/en", location: {lat: 52.375133, lng: 4.899475}},
        {title: "The National Maritime Museum", link: "https://www.hetscheepvaartmuseum.com/", location: {lat: 52.371708, lng: 4.914880}},
        {title: "Museum of Bags and Purses", link: "https://tassenmuseum.nl/en/", location: {lat: 52.365270, lng: 4.896824}},
        {title: "NEMO Science Museum", link: "https://www.nemosciencemuseum.nl/en/", location: {lat: 52.374211, lng: 4.912339}},
        {title: "Stedelijk Museum Amsterdam", link: "https://www.stedelijk.nl/en", location: {lat: 52.358011, lng: 4.879755}},
        {title: "Amsterdam Museum", link: "https://www.amsterdammuseum.nl/en", location: {lat: 52.369987, lng: 4.889974}},
        {title: "Royal Palace of Amsterdam", link: "https://www.paleisamsterdam.nl/en/", location: {lat: 52.373186, lng: 4.891368}},
        {title: "Tropenmuseum", link: "https://www.tropenmuseum.nl/en/", location: {lat: 52.362656, lng: 4.922299}},
        {title: "Jewish Historical Museum", link: "https://jck.nl/en/location/jewish-historical-museum", location: {lat: 52.367118, lng: 4.903816}},
        {title: "Portugese Synagoge", link: "https://jck.nl/en/node/957", location: {lat: 52.367680, lng: 4.904789}},
        {title: "Oude Kerk", link: "https://oudekerk.nl/en/", location: {lat: 52.374367, lng: 4.898207}},
        {title: "Museum Van Loon", link: "https://www.museumvanloon.nl/", location: {lat: 52.363443, lng: 4.893381}},
        {title: "Museum Het Grachtenhuis", link: "www.hetgrachtenhuis.nl/en/", location: {lat: 52.367887, lng: 4.886289}},
        {title: "EYE Filmmuseum", link: "https://www.eyefilm.nl/en", location: {lat: 52.384348, lng: 4.901276}},
        {title: "Foam", link: "https://www.foam.org/", location: {lat: 52.364086, lng: 4.893322}},
        {title: "Amsterdam Tulip Museum", link: "www.amsterdamtulipmuseum.com/en/", location: {lat: 52.376325, lng: 4.884120}},
        {title: "Museum Willet-Holthuysen", link: "https://www.willetholthuysen.nl/en", location: {lat: 52.365674, lng: 4.898980}},
        {title: "Diamond Museum Amsterdam", link: "https://diamonds-amsterdam.com/", location: {lat: 52.359447, lng: 4.882488}},
        {title: "De Nieuwe Kerk Amsterdam", link: "https://www.nieuwekerk.nl/en/", location: {lat: 52.373957, lng: 4.891710}},
        {title: "Micropia", link: "https://www.micropia.nl/en/", location: {lat: 52.366908, lng: 4.912576}},
        {title: "Amsterdam Pipe Museum", link: "https://pipemuseum.nl/", location: {lat: 52.364120, lng: 4.885286}},
        {title: "Allard Pierson Museum", link: "www.allardpiersonmuseum.nl/en", location: {lat: 52.368732, lng: 4.893031}},
        {title: "Museum Het Schip", link: "https://www.hetschip.nl/en/", location: {lat: 52.390401, lng: 4.873813}},
        {title: "Bijbels Museum", link: "https://www.bijbelsmuseum.nl/en", location: {lat: 52.368540, lng: 4.886285}},
        {title: "Hollandsche Schouwburg", link: "https://jck.nl/en/node/965", location: {lat: 52.366467, lng: 4.911123}},
        {title: "Huis Marseille", link: "https://www.huismarseille.nl/en/", location: {lat: 52.367499, lng: 4.884967}},
        {title: "Amsterdam City Archive", link: "https://www.amsterdam.nl/stadsarchief/", location: {lat: 52.364580, lng: 4.892197}},
        {title: "Museum Tot Zover", link: "https://www.totzover.nl/english/", location: {lat: 52.346076, lng: 4.938537}},
        {title: "Cromhouthuis", link: "https://www.cromhouthuis.nl/en", location: {lat: 52.368540, lng: 4.886285}},
        {title: "Bijzondere Collecties", link: "bijzonderecollecties.uva.nl/en/", location: {lat: 52.368266, lng: 4.893696}},
        {title: "Outsider Art Museum", link: "https://www.outsiderartmuseum.nl/en/", location: {lat: 52.365772, lng: 4.902782}}
    ],
    markersPaid: [
        {title: "Hermitage Amsterdam", link: "https://hermitage.nl/en/", location: {lat: 52.365295, lng: 4.902447}},
        {title: "Houseboat Museum", link: "https://www.houseboatmuseum.nl/", location: {lat: 52.370139, lng: 4.882600}},
        {title: "Molen van Sloten - Kuiperijmuseum", link: "https://molenvansloten.nl/index.php/sample-page/english/", location: {lat: 52.341582, lng: 4.792314}},
        {title: "Dutch Costume Museum", link: "hetklederdrachtmuseum.nl/en/", location: {lat: 52.367374, lng: 4.887814}}
    ]
  }

    flickrImages(marker) {
        let text = marker.title;
        fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=0eb33f98a43b11f4a1b4ebea55cb8783&text=${text}&format=json&nojsoncallback=1`, {
            headers: {
                //"Content-Type": "text/html",
                //"X-Content-Type-Options": "nosniff",
                //"Access-Control-Allow-Headers": "Access-Control-Allow-Origin",
                "Origin": "http://localhost:3000/",
                //"Access-Control-Allow-Origin": "http://localhost:3000/"
            }
        }).then(function(response) {
            return response.json();
        }).then(function(data) {
            let photodata = data.photos.photo;
            let array = [];
            for (let i = 0; i < 5; i++) {
                array.push(`https://farm${photodata[i].farm}.staticflickr.com/${photodata[i].server}/${photodata[i].id}_${photodata[i].secret}_q.jpg`);
            }
            console.log(array);
            return array;
        })
    }

    populateInfoWindow(marker, price, infowindow, map) {
        let picLinkArray = this.flickrImages(marker);
        if (infowindow.marker != marker) {
            infowindow.marker = marker;
            infowindow.setContent(`
                <div class="title"><a target="_blank" href=${marker.link}>${marker.title}</a></div>
                <div class="price">${price}</div>
                <img src=${picLinkArray[0]}>
            `);
            infowindow.open(map, marker);
            infowindow.addListener("closeclick", function() {
            infowindow.close();
            });
        }
    }

    renderMarkers(map, maps) {
        let self = this;
        let largeInfoWindow = new maps.InfoWindow();
        
        for (let i = 0; i < this.props.markers.length; i++){
            let position = this.props.markers[i].location;
            let title = this.props.markers[i].title;
            let link = this.props.markers[i].link;
            let marker = new maps.Marker({
                map: map,
                position: position,
                title: title,
                link: link,
                id: i,
                icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
            });
            let markerInstance = marker;
            let price = "Free admission with Museumkaart"
            marker.addListener("click", function() {
                self.populateInfoWindow(markerInstance, price, largeInfoWindow, map)
            });
            this.props.currentMarkers.push(marker);
        }
        for (let i = 0; i < this.props.markersPaid.length; i++){
            let position = this.props.markersPaid[i].location;
            let title = this.props.markersPaid[i].title;
            let link = this.props.markersPaid[i].link;
            let marker = new maps.Marker({
                map: map,
                position: position,
                title: title,
                link: link,
                id: i + "paid",
                icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
            });
            let markerInstance = marker;
            let price = "Discounted admission with Museumkaart"
            marker.addListener("click", function() {
                self.populateInfoWindow(markerInstance, price, largeInfoWindow, map)
            });
            this.props.currentMarkers.push(marker);
        }
    }

  render() {
    return (
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAI_0G1rHFr1Y586E2PXU_H6d7RqbIxlLM" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}
            yesIWantToUseGoogleMapApiInternals={true}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text={'Kreyser Avrora'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;