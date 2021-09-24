import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { Content } from 'antd/lib/layout/layout'
import '../../assets/css/_style.css'
import Header from '../common/Header'
import Footer from '../common/Footer'
import NotFound from '../common/NotFound'
import Home from '../pages/home'
import EmployeeList from '../pages/employee'
import EmployeeDetail from '../pages/employee/details'
import * as url from './urls'

function App() {
  document.title = 'Home-Serve'

  return (
    <div>
      <Router>
        <Header />
        <Content className="content_container">
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route path="/home" component={Home} exact />
            <Route path={url.employeeListPage} component={EmployeeList} />
            <Route path={url.employeeAddPage} component={EmployeeDetail} />
            <Route path={url.employeeEditPage} component={EmployeeDetail} />
            {/* <Route component={NotFound} /> */}
          </Switch>
        </Content>

        <Footer />
      </Router>
    </div>
  )
}

export default App
