import React from 'react'
import { Icon } from 'native-base'

const renderCategoryIcon = (key, title, styles) => {
  switch (title) {
  case 'chicken':
    return <Icon key={key} name='md-trophy' style={styles.iconStyles}/>
  case 'pork/beef':
    return <Icon key={key} name='md-paw' style={styles.iconStyles}/>
  case 'fish':
    return <Icon key={key} name='ios-water' style={styles.iconStyles}/>
  }
}

export {
  renderCategoryIcon
}
