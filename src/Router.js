import React from 'react'
import {Scene, Router} from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList'

const RouterComponent = () => {
    return (
        <Router>
            <Scene key = 'root' hideNavBar>
            <Scene key = 'auth' >
                <Scene 
                        key= "login" 
                        component = {LoginForm} 
                        title = "Please Login" 
                        titleStyle = {styles.titleStyle}    
                        initial
                        />
            </Scene>
            <Scene key = 'main'> 
                <Scene 
                        key = "employeeList"
                        component= {EmployeeList}
                        title = "Employees"
                        titleStyle = {styles.titleStyle}  
                    />
                </Scene>       
                {/* <Scene key = "E"/> */}
            </Scene>

        </Router>
    )
}

const styles = {
    titleStyle: {
        textAlign: 'center', flex: 1
    }
}



export default RouterComponent