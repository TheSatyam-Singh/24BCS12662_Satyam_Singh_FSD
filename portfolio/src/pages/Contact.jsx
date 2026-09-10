import { useNavigate } from "react-router-dom";

function Contact() {
	const navigate = useNavigate();

	function handleSubmit(event) {
		event.preventDefault();
		navigate("/");
	}

	return (
		<main>
			<h1>Contact Page</h1>
			<form onSubmit={handleSubmit}>
				<label>
					Message
					<textarea name="message" required />
				</label>
				<button type="submit">Send Message</button>
			</form>
		</main>
	);
}

export default Contact;
