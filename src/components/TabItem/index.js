import './index.css'

const TabItem = props => {
  const {tabDetails, tabProjectBtn, isActive} = props
  const {tabId, displayText} = tabDetails
  const activeTabDisplay = isActive ? 'active-tab-btn' : ''
  const displayProjectBtn = () => {
    tabProjectBtn(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabDisplay}`}
        onClick={displayProjectBtn}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
