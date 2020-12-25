export default {
    getSearchURL: function(URL){
        return `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.KEY}&text=${URL}&format=json&nojsoncallback=1&per_page=21`
    },
    getPicURL: (value) => `https://farm${value.farm}.staticflickr.com/${value.server}/${value.id}_${value.secret}.jpg`,
    getLargePicURL: (value) => `https://farm${value.farm}.staticflickr.com/${value.server}/${value.id}_${value.secret}_b.jpg`,
    KEY:"a97e792d5029729f50ef60a56b917d1d"
}

  