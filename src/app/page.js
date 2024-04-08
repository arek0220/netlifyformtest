export default function Home() {
  return (
    <div className="bg-gray-500">
      <h2>Contact Us</h2>
      <form name="contact" method="post">
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <label htmlFor="name">Name</label>
          <input className="my-2" type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input className="my-2" type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
