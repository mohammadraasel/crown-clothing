import './directory.scss'

import React from 'react'
import MenuItem from '../menu-item'
import { connect } from 'react-redux'
import { selectDirectorySections } from '../../../redux/directory/selectors'

function Directory ({sections}){

    return (
        <div className="directory-menu">
            {
                sections.map(({ id, ...otherSectionProps}) => {
                    return (
                        <MenuItem key={id} {...otherSectionProps} />
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = state => ({
    sections: selectDirectorySections(state)
})

export default connect(mapStateToProps)(Directory)

