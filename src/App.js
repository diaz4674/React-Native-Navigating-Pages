import React from 'react'
import ReduxThunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers'
import firebase from 'firebase'
import Router from './Router'

class App extends React.Component {
    componentDidMount(){
        const firebaseConfig = {
            apiKey: "AIzaSyAGEK6v1NuzRdHP-t1dXphX7W6zcStoulo",
            authDomain: "manager-7f78b.firebaseapp.com",
            databaseURL: "https://manager-7f78b.firebaseio.com",
            projectId: "manager-7f78b",
            storageBucket: "",
            messagingSenderId: "870492058080",
            appId: "1:870492058080:web:79609a539af65e13"
          };
          firebase.initializeApp(firebaseConfig)
    }

    render(){
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
        return (
            <Provider store = {store}>
                 <Router />
            </Provider>
        )
    }
}

export default App;