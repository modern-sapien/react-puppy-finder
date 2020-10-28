import React, {Component} from 'react';
// import Button from '../Button';
import {getDogBreed, getBreedList} from '../../utils/API';

class Search extends Component {

  state = {
    searchTerm: "",
    dogBreedListArray: [],
    dogBreedPhotos: []
  }

  componentDidMount() {
    getBreedList()
    .then(({data}) => this.setState({dogBreedListArray: data.message}))
    .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const {name, value} = event.target;

    this.setState({[name]: value});
  }

  handleFormSubmit = event => {
    event.preventDefault();

    getDogBreed(this.state.searchTerm)
    .then(({data}) => this.setState({dogBreedPhotos: data.message}))
    .catch(err => console.log(err));
  }

  render() {
    const {
      dogBreedListArray: dogList, 
      searchTerm, 
      dogBreedPhotos
    } = this.state;

    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="card">
              <h4 className="card-header">
                Search For Dogs
              </h4>
              <div className="card-body">
                <form>
                  <input
                    name="searchTerm"
                    onChange={this.handleInputChange}
                    value={searchTerm}
                    className="form-control"
                    type="text"
                    list="doglist"
                    placeholder="Search for dogs"/>
                  <datalist id="doglist">
                    {dogList.map(dog => <option key={dog} value={dog}/>)}
                  </datalist>

                  <Button
                    className="btn btn-block btn-info mt-4"
                    onClick={this.handleFormSubmit}
                    disabled={searchTerm}>Search For Dogs</Button>
                </form>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-8">
            <div className="row align-items-stretch justify-content-between">

              {dogBreedPhotos.map(dog => {
                return (
                  <div key={dog} className="col-12 col-md-4 mb-5">
                    <img src={dog} className="img-fluid img-thumbnail rounded" alt="dog"/>
                  </div>
                )
              })}

            </div>

          </div>

        </div>
      </div>
    )
  }
}

export default Search;