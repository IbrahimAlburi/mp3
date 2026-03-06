import {Link} from "react-router";

export default function References() {
    return (
        <main>

            <h2>References</h2>

            <h3> Personal Details </h3>
            <table className="contact-table">
                <tr>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
                <tr>
                    <td>Ibrahim Alburi</td>
                    <td>
                        <Link to="mailto:ibrah1m@bu.edu">ibrah1m@bu.edu</Link>
                    </td>
                    <td>
                        <Link to="tel:+18575656444">+1 (857) 565-6444</Link>
                    </td>
                </tr>

            </table>

            <h3> Instructor Details</h3>
            <table className="contact-table">
                <tr>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
                <tr>
                    <td>Taymaz Davoodi</td>
                    <td>
                        <Link to="mailto:tdavoodi@bu.edu">tdavoodi@bu.edu</Link>
                    </td>
                    <td>
                        <Link to="">N/A</Link>
                    </td>
                </tr>

            </table>

        </main>
    );
}