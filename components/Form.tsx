import { ITranslations } from "@/i18n/get-dictionary";

export default function Form({ dictionary }: { dictionary: ITranslations }) {
  const { form } = dictionary;

  return (
    <div className="section section-contact">
      <div className="container">
        <form className="contact-form section-contact-form">
          <h2>{form.title}</h2>

          <div className="subtitle">
            {form.content}
            <a href="mailto:info@revelo.bi">info@revelo.bi</a>
          </div>

          <div className="form-row">
            <div className="input-wrapper">
              <label>{form.firstname}</label>
              <input type="text" name="user_first_name" required ></input>
            </div>
            <div className="input-wrapper">
              <label>{form.lastname}</label>
              <input type="text" name="user_last_name" required></input>
            </div>
          </div>

          <div className="form-row">
            <div className="input-wrapper">
              <label>{form.email}</label>
              <input type="email" name="user_email" required></input>
            </div>
          </div>

          <div className="form-row">
            <div className="input-wrapper">
              <label>{form.msg}</label>
              <textarea
                placeholder={form.msg_placeholder}
                name="message"
                required
              ></textarea>
            </div>
          </div>

          <div className="submit-wrapper">
            <input
              className="cta-button cta-button-md"
              type="submit"
              value={form.button}
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
}
