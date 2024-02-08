let output = ''
if (bookingDays < 30) {
  output = 'Your booking is being processed'
} else if (bookingDays > 30) {
    return 'Please contact us for monthly bookings'
}
return output