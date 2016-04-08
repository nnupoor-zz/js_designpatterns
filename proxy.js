// You should use proxy pattern when you want to extend a
// class functionality without changing its implementation

/****************
  Original Class
 ****************/
function Hotel(stars, isCityCenter, isNew, numberOfRooms, avgRoomSize) {
	this.stars = stars;
	this.isCityCenter = isCityCenter;
	this.isNew = isNew;
	this.numberOfRooms = numberOfRooms;
	this.avgRoomSize = avgRoomSize;
}

/****************
      Proxy
 ****************/
var HotelProxy = function(stars, isCityCenter, isNew, numberOfRooms, avgRoomSize) {
	// Create Hotel Instance
	var hotel = new Hotel(stars, isCityCenter, isNew, numberOfRooms, avgRoomSize);
	// Private function
	function scoreByStars(stars) {
		switch(stars) {
			case(5):
				return 6;
			case(4):
				return 5;
			case(3): 
				return 3;
			case(2):
				return 1.5;
			default:
				return 0.5;
		}
	}
	// Return functions to use via proxy
	return {
		getScore: function() {
			var score = scoreByStars(hotel.stars);
			if(hotel.isCityCenter) {
				score += 2;
			}
			if(hotel.isNew) {
				score += 1.5;
			}
			if(hotel.numberOfRooms > 5000) {
				score += 0.5;
			}
			return score;
		},
		getHotelRoomsVolume: function() {
			return hotel.numberOfRooms * hotel.avgRoomSize;
		}
	}
}

// Usage example
var hp = HotelProxy(4, true, false, 2800, 150);
console.log(hp.getScore()); // 7
console.log(hp.getHotelRoomsVolume()); // 420000
