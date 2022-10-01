import './components/SearchElement';

const main = () => {
    const searchElement = document.querySelector('search-element')

    const searchEvent = () => {
        console.log(searchElement.value)
    }

    searchElement.event = searchEvent
}

export default main