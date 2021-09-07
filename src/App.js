import './App.css';
import Store from './Store';
import {decorate, observable, action, computed} from 'mobx'

decorate(Store, {  /* Declare observables using decorate function */
  reviewList: observable,
  addReview: action,
  averageScore: computed,
  reviewCount: computed
});

function App() {
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
