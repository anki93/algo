let shifts = [
  [1, 6],
  [8, 12]
];

let bookedSlots = [
  [2, 5],
  [8, 9]
]

function btw(start, end, time) {
  return start <= time && time <= end;
}

shifts.forEach(shift => {

  bookedSlots.forEach((bookedSlot, index) => {

    let findTimeSlotBtw = shifts.find(elem => {
      return btw(elem[0], elem[1], bookedSlot[0]) && btw(elem[0], elem[1], bookedSlot[1])
    })

    let timeSlotIndex = shifts.indexOf(findTimeSlotBtw);

    if (findTimeSlotBtw) {
      let arr = [];

      let startDiff = findTimeSlotBtw[0] - bookedSlot[0]
      if (startDiff) {
        arr.push([findTimeSlotBtw[0], bookedSlot[0]])
      }

      let endDiff = findTimeSlotBtw[1] - bookedSlot[1];
      if (findTimeSlotBtw[1] - bookedSlot[1]) {
        arr.push([bookedSlot[1], findTimeSlotBtw[1]])
      }

      shifts.splice.apply(shifts, [timeSlotIndex, 1, ...arr]);

    }
  })

})

console.log(shifts)