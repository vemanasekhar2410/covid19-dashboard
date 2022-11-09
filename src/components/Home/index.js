import {Component} from 'react'
import Header from '../Header'

class Home extends Component {
  state = {searchInput: ''}

  change1 = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    return (
      <>
        <Header />
        <div>
          <div className="search1">
            <input
              type="search"
              value={searchInput}
              onChange={this.change1}
              placeholder="search"
              className="search2"
            />
          </div>
        </div>
      </>
    )
  }
}

export default Home
