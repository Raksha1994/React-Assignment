
import React, { Component } from 'react'

export class Homescreen extends Component {
render() {
    return (
<div className="auth-wrapper" onSubmit={this.onSubmit}>
    <div className="auth-inner">
        <form name="Meetingform">

        <h3>Meeting form</h3>

        <div className="form-group">
            <label>Participant Name</label>
            <input type="text" className="form-control" name="email" placeholder="Enter email" />
        </div>

        <div className="form-group">
            <label>Participant Email</label>
            <input type="email" className="form-control" name="name" placeholder="Enter Name"  />
        </div>

        <div className="form-group">
            <label>Date</label>
            <input type="date" className="form-control" name="date" placeholder="Enter Date "  />
        </div>

        <div className="form-group">
            <label>Meeting Start Timing</label>
            <input type="time" className="form-control" name="start_time" placeholder="Enter Start Time"  />
        </div>

        <div className="form-group">
            <label>Meeting End Timing</label>
            <input type="time" className="form-control" name="end_time" placeholder="Enter End Time"  />
        </div>

        <button type="submit" className="btn btn-primary btn-block">Submit</button>


        </form>
    </div>
</div>
)
    }
}

export default Homescreen