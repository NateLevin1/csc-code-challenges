function minMeetingRooms(times: [number, number][]) {
    const list: { type: "start" | "end"; time: number }[] = [];
    for (const [start, end] of times) {
        list.push({ type: "start", time: start });
        list.push({ type: "end", time: end });
    }
    list.sort(({ time: timeA }, { time: timeB }) => timeA - timeB);
    let max = 0;
    let cur = 0;
    for (const { type } of list) {
        if (type == "start") cur++;
        if (type == "end") cur--;
        if (cur > max) max = cur;
    }
    return max;
}

console.log(minMeetingRooms([]));
console.log(minMeetingRooms([[0, 1]]));
console.log(
    minMeetingRooms([
        [0, 10],
        [10, 20],
    ])
);
console.log(
    minMeetingRooms([
        [0, 30],
        [5, 10],
        [15, 20],
    ])
);
console.log(
    minMeetingRooms([
        [7, 10],
        [2, 4],
    ])
);
console.log(
    minMeetingRooms([
        [0, 30],
        [5, 10],
        [15, 20],
        [7, 10],
        [2, 4],
    ])
);
