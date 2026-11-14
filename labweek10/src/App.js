import './App.css';
import {useState} from "react";

function App()
{
    const initialForm = {
        email: "",
        name: "",
        address: "",
        address2: "",
        city: "",
        province: "AB",
        postal: "",
        agree: false
    };
    // Set the form to the initial state
    const [form, setForm] = useState(initialForm);

    // Separate state variable to hold the submitted form info
    const [submitted, setSubmitted] = useState(null);

    // Handle change for text fields and selections/dropdowns
    const handleChange = (e) =>
    {
        const {name, value, type, checked} = e.target;

        setForm({
            ...form,
            [name]: type === "checkbox" ? checked : value
        });
    };
    // Handle submission
    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        setSubmitted({...form});
    }
    // Handle clearing, this sets the form back to initial state
    const handleClear = () =>
    {
        setForm(initialForm);
        setSubmitted(null);
    };

    return (
        <div className="App">
            <h1>Data Entry Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Enter Email"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Full Name"
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input
                            id="address"
                            name="address"
                            type="text"
                            value={form.address}
                            onChange={handleChange}
                            placeholder="1234 Main St"
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="address2">Address 2</label>
                        <input
                            id="address2"
                            name="address2"
                            type="text"
                            value={form.address2}
                            onChange={handleChange}
                            placeholder="Apartment, studio, or floor"
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input
                            id="city"
                            name="city"
                            type="text"
                            value={form.city}
                            onChange={handleChange}
                            placeholder=""
                        /></div>
                    <div className="form-group">
                        <label htmlFor="province">Province</label>
                        <select name="province"
                                value={form.province}
                                onChange={handleChange}>
                            <option value="AB">Alberta</option>
                            <option value="BC">British Columbia</option>
                            <option value="MB">Manitoba</option>
                            <option value="NB">New Brunswick</option>
                            <option value="NL">Newfoundland and Labrador</option>
                            <option value="NS">Nova Scotia</option>
                            <option value="ON">Ontario</option>
                            <option value="PE">Prince Edward Island</option>
                            <option value="QC">Quebec</option>
                            <option value="SK">Saskatchewan</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="postal">Postal Code</label>
                        <input
                            id="postal"
                            name="postal"
                            type="text"
                            value={form.postal}
                            onChange={handleChange}
                            placeholder=""
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="agree">Agree Terms & Conditions</label>
                        <input
                            id="agree"
                            name="agree"
                            type="checkbox"
                            checked={form.agree}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="button-group">
                    <button type="submit" className="button">Submit</button>
                    <button
                        type="button"
                        className="button"
                        onClick={handleClear}>Clear
                    </button>
                </div>
            </form>
            {submitted && (
                <div className="submitted-info">
                    <p><strong>Email: </strong>{submitted.email}</p>
                    <p><strong>Full Name: </strong>{submitted.name}</p>
                    <p><strong>Address: </strong>{submitted.address}</p>
                    <p><strong>Address 2: </strong>{submitted.address2}</p>
                    <p><strong>City: </strong>{submitted.city}</p>
                    <p><strong>Province: </strong>{submitted.province}</p>
                    <p><strong>Postal Code: </strong>{submitted.postal}</p>
                    <p><strong>Agree to Terms: </strong>{submitted.agree ? "Yes" : "No"}</p>
                </div>
            )}
        </div>
    );
}

export default App;
