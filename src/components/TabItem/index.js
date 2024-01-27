// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, onUpdateTabListId, isActive} = props
  const {displayText, tabId} = tabDetails

  const onUpdateId = () => {
    onUpdateTabListId(tabId)
  }
  const activeClassName = isActive ? 'active-style-button' : ''
  return (
    <li className="listContainer">
      <button
        className={`button ${activeClassName}`}
        type="button"
        onClick={onUpdateId}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
