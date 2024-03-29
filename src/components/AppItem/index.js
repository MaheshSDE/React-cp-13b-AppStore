// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="app">
      <img src={imageUrl} alt={appName} className="appImage" />
      <p className="appName">{appName}</p>
    </li>
  )
}
export default AppItem
