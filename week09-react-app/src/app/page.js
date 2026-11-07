import Student from "./student.jsx";
import College from "./college.jsx";
import Counter from "./counter.jsx";
import CounterClassComponent from "./counterclass.jsx";

export default function Home() {
    let collegeDetails = {
        name: "ABC College",
        location: "New York",
        established: 1990,
    };

    return (
        <div>
            <h1>ReactJs Application using Next.js</h1>
            <Student />
            <College collegeDetails={collegeDetails} />
            <Counter />
            <CounterClassComponent />
        </div>
    );
}
