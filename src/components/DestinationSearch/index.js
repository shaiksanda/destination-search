import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state

    const searchResults = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchInput),
    )
    return (
      <div className="bg-search-container">
        <h1>Destination Search</h1>

        <div className="input-container">
          <input
            onChange={this.onChangeSearchInput}
            type="search"
            placeholder="Search"
            className="input"
            value={searchInput}
          />
          <button type="button" className="search-button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="image"
            />
          </button>
        </div>
        <ul className="details-container">
          {searchResults.map(each => (
            <DestinationItem key={each.id} list={each} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
