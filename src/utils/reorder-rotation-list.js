export const reorderList = list => {
    list.sort((a, b) => {
        return a.departuretime - b.departuretime;
    });
    return list;
}