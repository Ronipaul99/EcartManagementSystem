class FlightBooking {
    constructor(obj) {
        this.customerId = obj.customerId;
        this.bookingId = obj.bookingId;
        this.noOfTickets = obj.noOfTickets;
        this.bookingCost = obj.bookingCost;
        this.flightId = obj.flightId;
    }
}

module.exports = FlightBooking;