import React from 'react'
import { Icon } from 'native-base'

const renderCategoryIcon = (key, title, styles) => {
  switch (title) {
  case 'chicken':
    return <Icon key={key} name='duck' style={styles.iconStyles}/>
  case 'pork/beef':
    return <Icon key={key} name='cow' style={styles.iconStyles}/>
  case 'fish':
    return <Icon key={key} name='fish' style={styles.iconStyles}/>
  }
}

export {
  renderCategoryIcon
}
