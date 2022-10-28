export const filterDuplicateUsers = (array, id, name) => {

    if (id !== null || id !== 0) {
        let newArray = array.find(x => x.id === id)
        if (newArray === undefined) {
            return array = [...array, {
                id,
                name,
            }];
        }
    }
    return array
}