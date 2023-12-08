import { Fragment } from 'react'
import TopNav from './components/nav/TopNav'
import SideNav from './components/nav/SideNav'
import './App.css'
import Dashboard from './components/mainpage/Dashboard'
import classes from './index.module.css'

function App() {

  return (
    <Fragment>
      <div className={classes.mainApp}>
        <TopNav />
        <div className={classes.hero}>
          <SideNav />
          <Dashboard/>
        </div> 
      </div>

    </Fragment>
  )
}

export default App
