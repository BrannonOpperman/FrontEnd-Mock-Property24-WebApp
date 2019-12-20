import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
// import { connect } from 'react-redux'
// import { firestoreConnect } from 'react-redux-firebase'
// import { compose } from 'redux'

class Dashboard extends Component {
    render() {
        const { projects } = this.props;
        return (
            <div className="dashboard container">
                <ProjectList projects={projects} />
            </div>
        )
    }
}

export default Dashboard

// const mapStateToProps = (state) => {
//     console.log(state)
//     return {
//         // projects: state.firestore.ordered.projects
//         projects: state.project.projects
//     }
// }

// // export default compose(
// //     firestoreConnect(() => ['projects']),
// //     connect(mapStateToProps)
// // )(Dashboard)

// export default connect(mapStateToProps)(Dashboard)

