import './index.css'

const TabItem = props => {
  const {tabDetails, getActiveTabId, isTabClicked} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    getActiveTabId(tabId)
  }

  const activeTabClass = isTabClicked ? 'active-tab' : 'tab-list-display-text'

  return (
    <li className="tab-button-list-item">
      <button type="button" onClick={onClickTab} className="button-tab">
        <p className={activeTabClass}>{displayText}</p>
      </button>
    </li>
  )
}

export default TabItem
