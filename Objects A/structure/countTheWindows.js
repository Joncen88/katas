function countWindows() {
    let house = {
        livingRoom: {
            windows: 4
        },
        bedroom: {
            windows: 2
        },
        kitchen: {
            windows: 1
        }
    }
    return house.livingRoom.windows + house.bedroom.windows + house.kitchen.windows

}