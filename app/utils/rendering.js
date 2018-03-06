import React from 'react'
import { Icon } from 'native-base'

const renderCategoryIcon = (title, styles) => {
  switch (title) {
  case 'chicken':
    return <Icon key={title} name='duck' style={styles.iconStyles}/>
  case 'pork/beef':
    return <Icon key={title} name='cow' style={styles.iconStyles}/>
  case 'fish':
    return <Icon key={title} name='fish' style={styles.iconStyles}/>
  }
}

export {
  renderCategoryIcon
}
