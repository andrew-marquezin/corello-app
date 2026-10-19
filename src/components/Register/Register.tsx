import styles from './Register.module.css';

export default function Register() {
  return (
    <section className={styles.section} aria-labelledby="register-title">
      <div className={styles.content}>
        <h2 id="register-title">
          Cadastre-se para receber novidades exclusivas da Corello e ganhe 15% OFF na sua primeira
          compra.
        </h2>
        <p className={styles.note}>*Válido apenas em itens não remarcados</p>

        <form className={styles.form}>
          <label>
            <span className="visually-hidden">Nome</span>
            <input type="text" name="name" placeholder="Nome" autoComplete="name" required />
          </label>
          <label>
            <span className="visually-hidden">E-mail</span>
            <input type="email" name="email" placeholder="E-mail" autoComplete="email" required />
          </label>
          <label>
            <span className="visually-hidden">WhatsApp</span>
            <input type="tel" name="whatsapp" placeholder="WhatsApp" autoComplete="tel" required />
          </label>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
}
