import React from 'react'
import axios from 'axios'

class Courses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courseList: [], courseName: "",
            couseDuration: null
        }
    }
    oncourseNameChange = e => {
        this.setState({
            courseName: e.target.value
        });
    };

    oncourseDurationChange = e => {
        this.setState({
            courseDuration: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const data = {
            courseName: this.state.courseName,
            courseDuration: this.state.courseDuration
        };
        axios
            .post("http://localhost:3001/students", data)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };


    componentDidMount() {
        axios.get('http://localhost:3001/students')
            .then((res) => {
                const courses = res.data;
                console.log('these are the courses');
                console.log(courses);
                this.setState({ courseList: courses })
            });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                    <input
                        placeholder="courseName" value={this.state.courseName}
                        onChange={this.oncourseNameChange} required
                    />

                    <input
                        placeholder="courseDuration"
                        value={this.state.courseDuration}
                        onChange={this.oncourseDurationChange} required
                    />

                    <button type="submit">Create Course</button>
                </form>


                <table border="1" style={{ marginTop: 10, marginLeft: 30 }}>
                    <tr>
                        <th>Course Title</th><th>Course Duration</th>
                    </tr>
                    {this.state.courseList.map((i) => {
                        return (
                            <tr key={i.id}>
                                <td>{i.courseName}</td>
                                <td>{i.courseDuration}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>)
    }
}
export default Courses

