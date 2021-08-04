export const removeRotationItem = (selectedItem, rotationList) => {
    let itemIndex;
    rotationList.forEach((element, index) => {
        if (element.id === selectedItem.id) {
            itemIndex = index;
        }
    });

    if (itemIndex === 0 || itemIndex === rotationList.length - 1) {
        return [...rotationList].filter(item => item.id !== selectedItem.id);
    } else {
        const newArray = [];
        rotationList.forEach((item, index) => {
            if (index >= itemIndex) {
                item.selected = false;
            } else {
                newArray.push(item);
            }
        })
        return [...newArray];
    }
}